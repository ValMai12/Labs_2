const { OrderService } = require("../../src/services/order.service");
const prisma = require("../../src/db/prisma");

jest.mock("../../src/db/prisma", () => ({
  $transaction: jest.fn(),
  order: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  user: {
    findUnique: jest.fn(),
  },
  address: {
    findUnique: jest.fn(),
  },
  cart: {
    findUnique: jest.fn(),
    create: jest.fn(),
  },
  discountRule: {
    findUnique: jest.fn(),
  },
  product: {
    findUnique: jest.fn(),
    update: jest.fn(),
  },
  cartitem: {
    create: jest.fn(),
  },
  $queryRaw: jest.fn(),
}));

describe("OrderService", () => {
  let orderService;
  let mockTx;

  beforeEach(() => {
    jest.clearAllMocks();
    orderService = new OrderService();
    mockTx = {
      order: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      user: {
        findUnique: jest.fn(),
      },
      address: {
        findUnique: jest.fn(),
      },
      cart: {
        findUnique: jest.fn(),
        create: jest.fn(),
      },
      discountRule: {
        findUnique: jest.fn(),
      },
      product: {
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      cartitem: {
        create: jest.fn(),
      },
      $queryRaw: jest.fn(),
    };
    prisma.$transaction.mockImplementation((callback) => callback(mockTx));
  });

  describe("createOrder", () => {
    test("should create order successfully", async () => {
      const user = { user_id: 1, first_name: "John" };
      const orderData = {
        user_id: 1,
        total_amount: 100.0,
        status: "pending",
      };
      const createdOrder = { order_id: 1, ...orderData };

      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.order.create.mockResolvedValue(createdOrder);

      const result = await orderService.createOrder(orderData);

      expect(result).toEqual(createdOrder);
      expect(mockTx.user.findUnique).toHaveBeenCalledWith({
        where: { user_id: 1 },
      });
      expect(mockTx.order.create).toHaveBeenCalled();
    });

    test("should throw error when user not found", async () => {
      mockTx.user.findUnique.mockResolvedValue(null);

      await expect(
        orderService.createOrder({ user_id: 999, total_amount: 100 })
      ).rejects.toThrow("User not found");
    });

    test("should throw error when address not found", async () => {
      const user = { user_id: 1 };
      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.address.findUnique.mockResolvedValue(null);

      await expect(
        orderService.createOrder({
          user_id: 1,
          address_id: 999,
          total_amount: 100,
        })
      ).rejects.toThrow("Address not found");
    });

    test("should throw error when cart not found", async () => {
      const user = { user_id: 1 };
      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.cart.findUnique.mockResolvedValue(null);

      await expect(
        orderService.createOrder({
          user_id: 1,
          cart_id: 999,
          total_amount: 100,
        })
      ).rejects.toThrow("Cart not found");
    });

    test("should throw error when discount rule not found", async () => {
      const user = { user_id: 1 };
      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.discountRule.findUnique.mockResolvedValue(null);

      await expect(
        orderService.createOrder({
          user_id: 1,
          applied_discount_id: 999,
          total_amount: 100,
        })
      ).rejects.toThrow("Discount rule not found");
    });
  });

  describe("getOrderById", () => {
    test("should get order by id successfully", async () => {
      const order = { order_id: 1, user_id: 1, total_amount: 100 };

      prisma.order.findUnique.mockResolvedValue(order);

      const result = await orderService.getOrderById(1);

      expect(result).toEqual(order);
      expect(prisma.order.findUnique).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
    });

    test("should throw error when order not found", async () => {
      prisma.order.findUnique.mockResolvedValue(null);

      await expect(orderService.getOrderById(999)).rejects.toThrow(
        "Order not found"
      );
    });
  });

  describe("getOrders", () => {
    test("should get all orders", async () => {
      const orders = [
        { order_id: 1, user_id: 1 },
        { order_id: 2, user_id: 2 },
      ];

      prisma.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrders({});

      expect(result).toEqual(orders);
      expect(prisma.order.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { created_at: "desc" },
      });
    });

    test("should filter orders by user_id", async () => {
      const orders = [{ order_id: 1, user_id: 1 }];

      prisma.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrders({ user_id: "1" });

      expect(result).toEqual(orders);
      expect(prisma.order.findMany).toHaveBeenCalledWith({
        where: { user_id: 1 },
        orderBy: { created_at: "desc" },
      });
    });

    test("should filter orders by status", async () => {
      const orders = [{ order_id: 1, status: "pending" }];

      prisma.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrders({ status: "pending" });

      expect(result).toEqual(orders);
      expect(prisma.order.findMany).toHaveBeenCalledWith({
        where: { status: "pending" },
        orderBy: { created_at: "desc" },
      });
    });
  });

  describe("updateOrder", () => {
    test("should update order successfully", async () => {
      const existingOrder = { order_id: 1, status: "pending" };
      const updatedOrder = { order_id: 1, status: "paid" };

      mockTx.order.findUnique.mockResolvedValue(existingOrder);
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrder(1, { status: "paid" });

      expect(result).toEqual(updatedOrder);
      expect(mockTx.order.findUnique).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
      expect(mockTx.order.update).toHaveBeenCalled();
    });

    test("should throw error when order not found", async () => {
      mockTx.order.findUnique.mockResolvedValue(null);

      await expect(
        orderService.updateOrder(999, { status: "paid" })
      ).rejects.toThrow("Order not found");
    });
  });

  describe("deleteOrder", () => {
    test("should delete order successfully", async () => {
      const order = { order_id: 1 };

      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.order.delete.mockResolvedValue(order);

      const result = await orderService.deleteOrder(1);

      expect(result).toEqual(order);
      expect(mockTx.order.delete).toHaveBeenCalledWith({
        where: { order_id: 1 },
      });
    });

    test("should throw error when order not found", async () => {
      mockTx.order.findUnique.mockResolvedValue(null);

      await expect(orderService.deleteOrder(999)).rejects.toThrow(
        "Order not found"
      );
    });
  });

  describe("createOrderWithProducts", () => {
    test("should create order with products successfully", async () => {
      const user = { user_id: 1 };
      const product1 = {
        product_id: 1,
        name: "Product 1",
        price: 50,
        stock: 10,
        status: "active",
      };
      const product2 = {
        product_id: 2,
        name: "Product 2",
        price: 30,
        stock: 5,
        status: "active",
      };
      const cart = { cart_id: 1, user_id: 1 };
      const order = {
        order_id: 1,
        user_id: 1,
        cart_id: 1,
        total_amount: 80,
        status: "pending",
      };

      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.product.findUnique
        .mockResolvedValueOnce(product1)
        .mockResolvedValueOnce(product2);
      mockTx.cart.create.mockResolvedValue(cart);
      mockTx.product.update.mockResolvedValue({});
      mockTx.cartitem.create.mockResolvedValue({});
      mockTx.order.create.mockResolvedValue(order);

      const result = await orderService.createOrderWithProducts({
        user_id: 1,
        products: [
          { product_id: 1, quantity: 1 },
          { product_id: 2, quantity: 1 },
        ],
      });

      expect(result).toEqual(order);
      expect(mockTx.product.findUnique).toHaveBeenCalledTimes(2);
      expect(mockTx.cart.create).toHaveBeenCalled();
      expect(mockTx.order.create).toHaveBeenCalled();
    });

    test("should apply percent discount", async () => {
      const user = { user_id: 1 };
      const product = {
        product_id: 1,
        name: "Product 1",
        price: 100,
        stock: 10,
        status: "active",
      };
      const discount = {
        discount_rule_id: 1,
        type: "percent",
        value: 10,
        is_active: true,
        valid_from: new Date(Date.now() - 86400000),
        valid_to: new Date(Date.now() + 86400000),
      };
      const cart = { cart_id: 1, user_id: 1 };
      const order = {
        order_id: 1,
        user_id: 1,
        total_amount: 90,
        status: "pending",
      };

      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.discountRule.findUnique.mockResolvedValue(discount);
      mockTx.product.findUnique.mockResolvedValue(product);
      mockTx.cart.create.mockResolvedValue(cart);
      mockTx.product.update.mockResolvedValue({});
      mockTx.cartitem.create.mockResolvedValue({});
      mockTx.order.create.mockResolvedValue(order);

      const result = await orderService.createOrderWithProducts({
        user_id: 1,
        applied_discount_id: 1,
        products: [{ product_id: 1, quantity: 1 }],
      });

      expect(result.total_amount).toBe(90);
    });

    test("should apply fixed discount", async () => {
      const user = { user_id: 1 };
      const product = {
        product_id: 1,
        name: "Product 1",
        price: 100,
        stock: 10,
        status: "active",
      };
      const discount = {
        discount_rule_id: 1,
        type: "fixed",
        value: 20,
        is_active: true,
        valid_from: new Date(Date.now() - 86400000),
        valid_to: new Date(Date.now() + 86400000),
      };
      const cart = { cart_id: 1, user_id: 1 };
      const order = {
        order_id: 1,
        user_id: 1,
        total_amount: 80,
        status: "pending",
      };

      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.discountRule.findUnique.mockResolvedValue(discount);
      mockTx.product.findUnique.mockResolvedValue(product);
      mockTx.cart.create.mockResolvedValue(cart);
      mockTx.product.update.mockResolvedValue({});
      mockTx.cartitem.create.mockResolvedValue({});
      mockTx.order.create.mockResolvedValue(order);

      const result = await orderService.createOrderWithProducts({
        user_id: 1,
        applied_discount_id: 1,
        products: [{ product_id: 1, quantity: 1 }],
      });

      expect(result.total_amount).toBe(80);
    });

    test("should throw error when products array is empty", async () => {
      const user = { user_id: 1 };
      mockTx.user.findUnique.mockResolvedValue(user);

      await expect(
        orderService.createOrderWithProducts({
          user_id: 1,
          products: [],
        })
      ).rejects.toThrow("Products array is required and must not be empty");
    });

    test("should throw error when product not found", async () => {
      const user = { user_id: 1 };
      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.product.findUnique.mockResolvedValue(null);

      await expect(
        orderService.createOrderWithProducts({
          user_id: 1,
          products: [{ product_id: 999, quantity: 1 }],
        })
      ).rejects.toThrow("Product with id 999 not found");
    });

    test("should throw error when insufficient stock", async () => {
      const user = { user_id: 1 };
      const product = {
        product_id: 1,
        name: "Product 1",
        price: 100,
        stock: 5,
        status: "active",
      };
      mockTx.user.findUnique.mockResolvedValue(user);
      mockTx.product.findUnique.mockResolvedValue(product);

      await expect(
        orderService.createOrderWithProducts({
          user_id: 1,
          products: [{ product_id: 1, quantity: 10 }],
        })
      ).rejects.toThrow("Insufficient stock");
    });
  });

  describe("updateOrderStatusWithReconciliation", () => {
    test("should update order status from pending to paid", async () => {
      const order = {
        order_id: 1,
        status: "pending",
        cart_id: 1,
        cart: {
          cartitem: [
            {
              product_id: 1,
              quantity: 2,
              product: { product_id: 1, name: "Product 1", stock: 10 },
            },
          ],
        },
      };
      const updatedOrder = { order_id: 1, status: "paid" };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrderStatusWithReconciliation(
        1,
        "paid"
      );

      expect(result).toEqual(updatedOrder);
      expect(mockTx.product.update).not.toHaveBeenCalled();
    });

    test("should restore inventory when cancelling order", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: {
          cartitem: [
            {
              product_id: 1,
              quantity: 2,
              product: { product_id: 1, name: "Product 1", stock: 8 },
            },
          ],
        },
      };
      const updatedOrder = { order_id: 1, status: "cancelled" };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.product.findUnique.mockResolvedValue({
        product_id: 1,
        stock: 8,
      });
      mockTx.product.update.mockResolvedValue({});
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrderStatusWithReconciliation(
        1,
        "cancelled"
      );

      expect(result).toEqual(updatedOrder);
      expect(mockTx.product.update).toHaveBeenCalledWith({
        where: { product_id: 1 },
        data: {
          stock: 10,
          updated_at: expect.any(Date),
        },
      });
    });

    test("should set shipped_at when status is shipped", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: {
          cartitem: [],
        },
      };
      const updatedOrder = {
        order_id: 1,
        status: "shipped",
        shipped_at: expect.any(Date),
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrderStatusWithReconciliation(
        1,
        "shipped"
      );

      expect(result).toEqual(updatedOrder);
      expect(mockTx.order.update).toHaveBeenCalledWith({
        where: { order_id: 1 },
        data: {
          status: "shipped",
          shipped_at: expect.any(Date),
        },
      });
    });

    test("should set delivered_at when status is delivered", async () => {
      const order = {
        order_id: 1,
        status: "shipped",
        cart_id: 1,
        cart: {
          cartitem: [],
        },
      };
      const updatedOrder = {
        order_id: 1,
        status: "delivered",
        delivered_at: expect.any(Date),
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrderStatusWithReconciliation(
        1,
        "delivered"
      );

      expect(result).toEqual(updatedOrder);
      expect(mockTx.order.update).toHaveBeenCalledWith({
        where: { order_id: 1 },
        data: {
          status: "delivered",
          delivered_at: expect.any(Date),
        },
      });
    });

    test("should throw error when order not found", async () => {
      mockTx.$queryRaw.mockResolvedValue([]);
      mockTx.order.findUnique.mockResolvedValue(null);

      await expect(
        orderService.updateOrderStatusWithReconciliation(999, "paid")
      ).rejects.toThrow("Order not found");
    });

    test("should throw error when status mismatch", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: { cartitem: [] },
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);

      await expect(
        orderService.updateOrderStatusWithReconciliation(
          1,
          "shipped",
          "pending"
        )
      ).rejects.toThrow("Order status mismatch");
    });

    test("should throw error on invalid status transition", async () => {
      const order = {
        order_id: 1,
        status: "delivered",
        cart_id: 1,
        cart: { cartitem: [] },
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);

      await expect(
        orderService.updateOrderStatusWithReconciliation(1, "pending")
      ).rejects.toThrow("Invalid status transition");
    });

    test("should throw error when product not found during inventory update", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: {
          cartitem: [
            {
              product_id: 999,
              quantity: 2,
              product: { product_id: 999, name: "Product 999", stock: 10 },
            },
          ],
        },
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.product.findUnique.mockResolvedValue(null);

      await expect(
        orderService.updateOrderStatusWithReconciliation(1, "cancelled")
      ).rejects.toThrow("Product with id 999 not found");
    });

    test("should not modify inventory when transitioning between non-cancelled statuses", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: {
          cartitem: [
            {
              product_id: 1,
              quantity: 2,
              product: { product_id: 1, name: "Product 1", stock: 8 },
            },
          ],
        },
      };
      const updatedOrder = { order_id: 1, status: "shipped" };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);
      mockTx.order.update.mockResolvedValue(updatedOrder);

      const result = await orderService.updateOrderStatusWithReconciliation(
        1,
        "shipped"
      );

      expect(result).toEqual(updatedOrder);
      expect(mockTx.product.update).not.toHaveBeenCalled();
    });

    test("should throw error when cart items not found", async () => {
      const order = {
        order_id: 1,
        status: "paid",
        cart_id: 1,
        cart: {
          cartitem: [],
        },
      };

      mockTx.$queryRaw.mockResolvedValue([order]);
      mockTx.order.findUnique.mockResolvedValue(order);

      await expect(
        orderService.updateOrderStatusWithReconciliation(1, "cancelled")
      ).rejects.toThrow("Cart items not found for order");
    });
  });

  describe("getOrdersWithUserDetails", () => {
    test("should get orders with user details", async () => {
      const orders = [
        {
          order_id: 1,
          user_id: 1,
          User: {
            user_id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john@example.com",
          },
        },
      ];

      mockTx.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrdersWithUserDetails({});

      expect(result).toEqual(orders);
      expect(mockTx.order.findMany).toHaveBeenCalledWith({
        where: {},
        include: {
          User: {
            select: {
              user_id: true,
              first_name: true,
              last_name: true,
              email: true,
            },
          },
        },
        orderBy: { created_at: "desc" },
        take: undefined,
      });
    });

    test("should filter by min_amount and max_amount", async () => {
      const orders = [];

      mockTx.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrdersWithUserDetails({
        min_amount: "10",
        max_amount: "100",
      });

      expect(result).toEqual(orders);
      expect(mockTx.order.findMany).toHaveBeenCalledWith({
        where: {
          total_amount: {
            gte: 10,
            lte: 100,
          },
        },
        include: expect.any(Object),
        orderBy: { created_at: "desc" },
        take: undefined,
      });
    });

    test("should apply custom sort and limit", async () => {
      const orders = [];

      mockTx.order.findMany.mockResolvedValue(orders);

      const result = await orderService.getOrdersWithUserDetails({
        sort_by: "total_amount",
        sort_order: "asc",
        limit: "5",
      });

      expect(result).toEqual(orders);
      expect(mockTx.order.findMany).toHaveBeenCalledWith({
        where: {},
        include: expect.any(Object),
        orderBy: { total_amount: "asc" },
        take: 5,
      });
    });
  });
});
