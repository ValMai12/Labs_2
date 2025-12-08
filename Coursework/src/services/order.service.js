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
}

module.exports = { OrderService };
