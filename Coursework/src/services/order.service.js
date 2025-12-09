const prisma = require("../db/prisma");

class OrderService {
  async createOrder(data) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { user_id: data.user_id },
      });
      if (!user) {
        throw new Error("User not found");
      }

      if (data.address_id) {
        const address = await tx.address.findUnique({
          where: { address_id: data.address_id },
        });
        if (!address) {
          throw new Error("Address not found");
        }
      }

      if (data.cart_id) {
        const cart = await tx.cart.findUnique({
          where: { cart_id: data.cart_id },
        });
        if (!cart) {
          throw new Error("Cart not found");
        }
      }

      if (data.applied_discount_id) {
        const discount = await tx.discountRule.findUnique({
          where: { discount_rule_id: data.applied_discount_id },
        });
        if (!discount) {
          throw new Error("Discount rule not found");
        }
      }

      return await tx.order.create({
        data: {
          user_id: data.user_id,
          address_id: data.address_id,
          cart_id: data.cart_id,
          total_amount: data.total_amount,
          status: data.status || "pending",
          applied_discount_id: data.applied_discount_id,
        },
      });
    });
  }

  async getOrderById(id) {
    const order = await prisma.order.findUnique({
      where: { order_id: id },
    });
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  }

  async getOrders(filters) {
    const where = {};

    if (filters?.user_id) {
      where.user_id = parseInt(filters.user_id);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    return await prisma.order.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async updateOrder(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingOrder = await tx.order.findUnique({
        where: { order_id: id },
      });
      if (!existingOrder) {
        throw new Error("Order not found");
      }

      return await tx.order.update({
        where: { order_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteOrder(id) {
    return await prisma.$transaction(async (tx) => {
      const existingOrder = await tx.order.findUnique({
        where: { order_id: id },
      });
      if (!existingOrder) {
        throw new Error("Order not found");
      }

      return await tx.order.delete({
        where: { order_id: id },
      });
    });
  }

  async createOrderWithProducts(data) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { user_id: data.user_id },
      });
      if (!user) {
        throw new Error("User not found");
      }

      if (data.address_id) {
        const address = await tx.address.findUnique({
          where: { address_id: data.address_id },
        });
        if (!address) {
          throw new Error("Address not found");
        }
      }

      let discount = null;
      if (data.applied_discount_id) {
        discount = await tx.discountRule.findUnique({
          where: { discount_rule_id: data.applied_discount_id },
        });
        if (!discount) {
          throw new Error("Discount rule not found");
        }
        if (!discount.is_active) {
          throw new Error("Discount rule is not active");
        }
        const now = new Date();
        if (now < discount.valid_from || now > discount.valid_to) {
          throw new Error("Discount rule is not valid");
        }
      }

      if (
        !data.products ||
        !Array.isArray(data.products) ||
        data.products.length === 0
      ) {
        throw new Error("Products array is required and must not be empty");
      }

      const productsData = [];
      let totalAmount = 0;

      for (const item of data.products) {
        if (!item.product_id || !item.quantity) {
          throw new Error("Each product must have product_id and quantity");
        }
        if (item.quantity <= 0) {
          throw new Error("Quantity must be greater than 0");
        }

        const product = await tx.product.findUnique({
          where: { product_id: item.product_id },
        });
        if (!product) {
          throw new Error(`Product with id ${item.product_id} not found`);
        }
        if (product.status !== "active") {
          throw new Error(`Product with id ${item.product_id} is not active`);
        }
        if (product.stock < item.quantity) {
          throw new Error(
            `Insufficient stock for product ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}`
          );
        }

        const itemTotal = Number(product.price) * item.quantity;
        totalAmount += itemTotal;
        productsData.push({ product, quantity: item.quantity });
      }

      if (discount) {
        if (discount.type === "percent") {
          totalAmount = totalAmount * (1 - Number(discount.value) / 100);
        } else if (discount.type === "fixed") {
          totalAmount = Math.max(0, totalAmount - Number(discount.value));
        }
      }

      const cart = await tx.cart.create({
        data: {
          user_id: data.user_id,
          is_active: true,
        },
      });

      for (const item of productsData) {
        await tx.cartitem.create({
          data: {
            cart_id: cart.cart_id,
            product_id: item.product.product_id,
            quantity: item.quantity,
          },
        });

        await tx.product.update({
          where: { product_id: item.product.product_id },
          data: {
            stock: item.product.stock - item.quantity,
            updated_at: new Date(),
          },
        });
      }

      const order = await tx.order.create({
        data: {
          user_id: data.user_id,
          address_id: data.address_id,
          cart_id: cart.cart_id,
          total_amount: totalAmount,
          status: data.status || "pending",
          applied_discount_id: data.applied_discount_id,
        },
      });

      return order;
    });
  }

  async updateOrderStatusWithReconciliation(id, newStatus, expectedStatus) {
    return await prisma.$transaction(async (tx) => {
      await tx.$queryRaw`
        SELECT * FROM "Order" 
        WHERE order_id = ${id} 
        FOR UPDATE
      `;

      const currentOrder = await tx.order.findUnique({
        where: { order_id: id },
        include: {
          cart: { include: { cartitem: { include: { product: true } } } },
        },
      });

      if (!currentOrder) {
        throw new Error("Order not found");
      }

      if (expectedStatus && currentOrder.status !== expectedStatus) {
        throw new Error(
          `Order status mismatch. Expected: ${expectedStatus}, Current: ${currentOrder.status}`
        );
      }

      const validTransitions = {
        pending: ["paid", "cancelled"],
        paid: ["shipped", "cancelled"],
        shipped: ["delivered", "cancelled"],
        delivered: [],
        cancelled: [],
      };

      if (!validTransitions[currentOrder.status]?.includes(newStatus)) {
        throw new Error(
          `Invalid status transition from ${currentOrder.status} to ${newStatus}`
        );
      }

      const wasInventoryDeducted =
        currentOrder.status !== "cancelled" && currentOrder.cart_id;
      const willBeInventoryDeducted =
        newStatus !== "cancelled" && currentOrder.cart_id;
      const needsRestore = wasInventoryDeducted && newStatus === "cancelled";
      const needsDeduct = !wasInventoryDeducted && willBeInventoryDeducted;

      if (needsRestore || needsDeduct) {
        if (
          !currentOrder.cart ||
          !currentOrder.cart.cartitem ||
          currentOrder.cart.cartitem.length === 0
        ) {
          throw new Error("Cart items not found for order");
        }

        for (const cartItem of currentOrder.cart.cartitem) {
          const product = await tx.product.findUnique({
            where: { product_id: cartItem.product_id },
          });

          if (!product) {
            throw new Error(`Product with id ${cartItem.product_id} not found`);
          }

          if (needsRestore) {
            await tx.product.update({
              where: { product_id: cartItem.product_id },
              data: {
                stock: product.stock + cartItem.quantity,
                updated_at: new Date(),
              },
            });
          } else if (needsDeduct) {
            if (product.stock < cartItem.quantity) {
              throw new Error(
                `Insufficient stock for product ${product.name}. Available: ${product.stock}, Required: ${cartItem.quantity}`
              );
            }
            await tx.product.update({
              where: { product_id: cartItem.product_id },
              data: {
                stock: product.stock - cartItem.quantity,
                updated_at: new Date(),
              },
            });
          }
        }
      }

      const updateData = { status: newStatus };

      if (newStatus === "shipped") {
        updateData.shipped_at = new Date();
      } else if (newStatus === "delivered") {
        updateData.delivered_at = new Date();
      }

      const updatedOrder = await tx.order.update({
        where: { order_id: id },
        data: updateData,
      });

      return updatedOrder;
    });
  }
}

module.exports = { OrderService };
