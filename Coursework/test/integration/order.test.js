const Fastify = require("fastify");
const { orderRoutes } = require("../../src/routes/order.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(orderRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

async function createTestUser() {
  return await prisma.user.create({
    data: {
      first_name: "Test",
      last_name: "User",
      email: `test${Date.now()}@example.com`,
      password_hash: "hashedpassword",
    },
  });
}

async function createTestPostalRegion() {
  return await prisma.postalRegion.create({
    data: {
      postal_code: `PC${Date.now()}`,
      city: "Test City",
      country: "Test Country",
    },
  });
}

async function createTestAddress(userId, postalCode) {
  return await prisma.address.create({
    data: {
      user_id: userId,
      street: "123 Test Street",
      postal_code: postalCode,
    },
  });
}

async function createTestCart(userId) {
  return await prisma.cart.create({
    data: {
      user_id: userId,
      is_active: true,
    },
  });
}

async function createTestProduct() {
  return await prisma.product.create({
    data: {
      name: `Test Product ${Date.now()}`,
      price: 99.99,
      stock: 100,
      status: "active",
    },
  });
}

function getFutureDate(days = 30) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function getPastDate(days = 30) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

async function createTestDiscountRule() {
  return await prisma.discountRule.create({
    data: {
      code: `CODE${Date.now()}`,
      type: "percent",
      value: 10,
      valid_from: new Date(getPastDate(1)),
      valid_to: new Date(getFutureDate(30)),
      is_active: true,
    },
  });
}

describe("Order Integration Tests", () => {
  describe("POST /orders", () => {
    test("should create order successfully", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 99.99,
          status: "pending",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.total_amount).toBe("99.99");
      expect(body.status).toBe("pending");
      expect(body.order_id).toBeDefined();
    });

    test("should create order with address and cart", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();
      const address = await createTestAddress(
        user.user_id,
        postalRegion.postal_code
      );
      const cart = await createTestCart(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 199.99,
          address_id: address.address_id,
          cart_id: cart.cart_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.address_id).toBe(address.address_id);
      expect(body.cart_id).toBe(cart.cart_id);
    });

    test("should create order with discount", async () => {
      const user = await createTestUser();
      const discount = await createTestDiscountRule();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 100,
          applied_discount_id: discount.discount_rule_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.applied_discount_id).toBe(discount.discount_rule_id);
    });

    test("should create order with default status pending", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 50,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("pending");
    });

    test("should return 404 when user not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: 99999,
          total_amount: 100,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });

    test("should return 404 when address not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 100,
          address_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Address not found");
    });

    test("should return 404 when cart not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 100,
          cart_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart not found");
    });

    test("should return 404 when discount rule not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders",
        payload: {
          user_id: user.user_id,
          total_amount: 100,
          applied_discount_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount rule not found");
    });
  });

  describe("GET /orders/:id", () => {
    test("should get order by id successfully", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 150.5,
          status: "paid",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/orders/${order.order_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.order_id).toBe(order.order_id);
      expect(body.user_id).toBe(user.user_id);
      expect(body.total_amount).toBe("150.5");
      expect(body.status).toBe("paid");
    });

    test("should return 404 when order not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/orders/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Order not found");
    });
  });

  describe("GET /orders", () => {
    test("should get all orders", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.order.createMany({
        data: [
          {
            user_id: user1.user_id,
            total_amount: 100,
            status: "pending",
          },
          {
            user_id: user2.user_id,
            total_amount: 200,
            status: "paid",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/orders",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter orders by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.order.createMany({
        data: [
          {
            user_id: user1.user_id,
            total_amount: 100,
            status: "pending",
          },
          {
            user_id: user2.user_id,
            total_amount: 200,
            status: "paid",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/orders?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
    });

    test("should filter orders by status", async () => {
      const user = await createTestUser();

      await prisma.order.createMany({
        data: [
          {
            user_id: user.user_id,
            total_amount: 100,
            status: "pending",
          },
          {
            user_id: user.user_id,
            total_amount: 200,
            status: "paid",
          },
          {
            user_id: user.user_id,
            total_amount: 300,
            status: "pending",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/orders?status=pending",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every((o) => o.status === "pending")).toBe(true);
    });

    test("should filter orders by user_id and status", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.order.createMany({
        data: [
          {
            user_id: user1.user_id,
            total_amount: 100,
            status: "pending",
          },
          {
            user_id: user1.user_id,
            total_amount: 200,
            status: "paid",
          },
          {
            user_id: user2.user_id,
            total_amount: 300,
            status: "pending",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/orders?user_id=${user1.user_id}&status=pending`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
      expect(body[0].status).toBe("pending");
    });

    test("should return empty array when no orders match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/orders?user_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /orders/:id", () => {
    test("should update order total_amount successfully", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/orders/${order.order_id}`,
        payload: {
          total_amount: 150,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.total_amount).toBe("150");
    });

    test("should update order status successfully", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/orders/${order.order_id}`,
        payload: {
          status: "paid",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("paid");
    });

    test("should update multiple fields at once", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();
      const address = await createTestAddress(
        user.user_id,
        postalRegion.postal_code
      );

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/orders/${order.order_id}`,
        payload: {
          total_amount: 200,
          status: "paid",
          address_id: address.address_id,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.total_amount).toBe("200");
      expect(body.status).toBe("paid");
      expect(body.address_id).toBe(address.address_id);
    });

    test("should return 404 when order not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/orders/99999",
        payload: {
          total_amount: 200,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Order not found");
    });
  });

  describe("DELETE /orders/:id", () => {
    test("should delete order successfully", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/orders/${order.order_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedOrder = await prisma.order.findUnique({
        where: { order_id: order.order_id },
      });
      expect(deletedOrder).toBeNull();
    });

    test("should return 404 when order not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/orders/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Order not found");
    });
  });

  describe("POST /orders/with-products", () => {
    test("should create order with products successfully", async () => {
      const user = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders/with-products",
        payload: {
          user_id: user.user_id,
          products: [
            { product_id: product1.product_id, quantity: 2 },
            { product_id: product2.product_id, quantity: 1 },
          ],
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.cart_id).toBeDefined();
      expect(Number(body.total_amount)).toBeGreaterThan(0);
    });

    test("should create order with products and discount", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();
      const discount = await createTestDiscountRule();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders/with-products",
        payload: {
          user_id: user.user_id,
          products: [{ product_id: product.product_id, quantity: 1 }],
          applied_discount_id: discount.discount_rule_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.applied_discount_id).toBe(discount.discount_rule_id);
    });

    test("should return error when products array is empty", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders/with-products",
        payload: {
          user_id: user.user_id,
          products: [],
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Bad Request");
    });

    test("should return error when product not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/orders/with-products",
        payload: {
          user_id: user.user_id,
          products: [{ product_id: 99999, quantity: 1 }],
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toContain("not found");
    });

    test("should return error when insufficient stock", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();
      await prisma.product.update({
        where: { product_id: product.product_id },
        data: { stock: 5 },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/orders/with-products",
        payload: {
          user_id: user.user_id,
          products: [{ product_id: product.product_id, quantity: 10 }],
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toContain("Insufficient stock");
    });
  });

  describe("PATCH /orders/:id/status", () => {
    test("should update order status from pending to paid", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PATCH",
        url: `/orders/${order.order_id}/status`,
        payload: {
          status: "paid",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("paid");
    });

    test("should update order status with expected_status validation", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PATCH",
        url: `/orders/${order.order_id}/status`,
        payload: {
          status: "paid",
          expected_status: "pending",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("paid");
    });

    test("should return error on invalid status transition", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PATCH",
        url: `/orders/${order.order_id}/status`,
        payload: {
          status: "delivered",
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toContain("Invalid status transition");
    });

    test("should return error when expected_status mismatch", async () => {
      const user = await createTestUser();

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PATCH",
        url: `/orders/${order.order_id}/status`,
        payload: {
          status: "paid",
          expected_status: "paid",
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toContain("status mismatch");
    });
  });

  describe("GET /orders/with-user", () => {
    test("should get orders with user details", async () => {
      const user = await createTestUser();

      await prisma.order.create({
        data: {
          user_id: user.user_id,
          total_amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/orders/with-user",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBeGreaterThan(0);
      expect(body[0].User).toBeDefined();
      expect(body[0].User.user_id).toBe(user.user_id);
    });

    test("should filter orders with user details by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.order.createMany({
        data: [
          {
            user_id: user1.user_id,
            total_amount: 100,
            status: "pending",
          },
          {
            user_id: user2.user_id,
            total_amount: 200,
            status: "paid",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/orders/with-user?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].User.user_id).toBe(user1.user_id);
    });
  });
});
