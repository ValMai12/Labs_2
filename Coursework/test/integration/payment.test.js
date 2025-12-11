const Fastify = require("fastify");
const { paymentRoutes } = require("../../src/routes/payment.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(paymentRoutes);
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

async function createTestOrder(userId) {
  return await prisma.order.create({
    data: {
      user_id: userId,
      total_amount: 99.99,
      status: "pending",
    },
  });
}

describe("Payment Integration Tests", () => {
  describe("POST /payments", () => {
    test("should create payment successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "card",
          amount: 99.99,
          status: "pending",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.order_id).toBe(order.order_id);
      expect(body.method).toBe("card");
      expect(body.amount).toBe("99.99");
      expect(body.status).toBe("pending");
      expect(body.payment_id).toBeDefined();
    });

    test("should create payment with method paypal", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "paypal",
          amount: 150.5,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.method).toBe("paypal");
      expect(body.amount).toBe("150.5");
    });

    test("should create payment with method cash_on_delivery", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "cash_on_delivery",
          amount: 200,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.method).toBe("cash_on_delivery");
    });

    test("should create payment with default status pending", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("pending");
    });

    test("should create payment with transaction_id", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          transaction_id: "TXN123456",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.transaction_id).toBe("TXN123456");
    });

    test("should create payment with status success", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "success",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("success");
    });

    test("should return 404 when order not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/payments",
        payload: {
          order_id: 99999,
          method: "card",
          amount: 100,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Order not found");
    });
  });

  describe("GET /payments/:id", () => {
    test("should get payment by id successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 150.75,
          status: "success",
          transaction_id: "TXN789",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/payments/${payment.payment_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.payment_id).toBe(payment.payment_id);
      expect(body.order_id).toBe(order.order_id);
      expect(body.method).toBe("card");
      expect(body.amount).toBe("150.75");
      expect(body.status).toBe("success");
      expect(body.transaction_id).toBe("TXN789");
    });

    test("should return 404 when payment not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/payments/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Payment not found");
    });
  });

  describe("GET /payments", () => {
    test("should get all payments", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const order1 = await createTestOrder(user1.user_id);
      const order2 = await createTestOrder(user2.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "pending",
          },
          {
            order_id: order2.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/payments",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter payments by order_id", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "pending",
          },
          {
            order_id: order2.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/payments?order_id=${order1.order_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].order_id).toBe(order1.order_id);
    });

    test("should filter payments by status", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);
      const order3 = await createTestOrder(user.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "pending",
          },
          {
            order_id: order2.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
          {
            order_id: order3.order_id,
            method: "card",
            amount: 300,
            status: "pending",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/payments?status=pending",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every((p) => p.status === "pending")).toBe(true);
    });

    test("should filter payments by method", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "pending",
          },
          {
            order_id: order2.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/payments?method=card",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].method).toBe("card");
    });

    test("should filter payments by order_id and status", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "pending",
          },
          {
            order_id: order1.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
          {
            order_id: order2.order_id,
            method: "card",
            amount: 300,
            status: "pending",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/payments?order_id=${order1.order_id}&status=pending`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].order_id).toBe(order1.order_id);
      expect(body[0].status).toBe("pending");
    });

    test("should filter payments by status and method", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);

      await prisma.payment.createMany({
        data: [
          {
            order_id: order1.order_id,
            method: "card",
            amount: 100,
            status: "success",
          },
          {
            order_id: order2.order_id,
            method: "paypal",
            amount: 200,
            status: "success",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/payments?status=success&method=card",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].status).toBe("success");
      expect(body[0].method).toBe("card");
    });

    test("should return empty array when no payments match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/payments?order_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /payments/:id", () => {
    test("should update payment status successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/payments/${payment.payment_id}`,
        payload: {
          status: "success",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("success");
    });

    test("should update payment amount successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/payments/${payment.payment_id}`,
        payload: {
          amount: 150,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.amount).toBe("150");
    });

    test("should update payment method successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/payments/${payment.payment_id}`,
        payload: {
          method: "paypal",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.method).toBe("paypal");
    });

    test("should update payment transaction_id successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/payments/${payment.payment_id}`,
        payload: {
          transaction_id: "NEWTXN123",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.transaction_id).toBe("NEWTXN123");
    });

    test("should update multiple fields at once", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/payments/${payment.payment_id}`,
        payload: {
          status: "success",
          transaction_id: "TXN456",
          amount: 120,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("success");
      expect(body.transaction_id).toBe("TXN456");
      expect(body.amount).toBe("120");
    });

    test("should return 404 when payment not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/payments/99999",
        payload: {
          status: "success",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Payment not found");
    });
  });

  describe("DELETE /payments/:id", () => {
    test("should delete payment successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const payment = await prisma.payment.create({
        data: {
          order_id: order.order_id,
          method: "card",
          amount: 100,
          status: "pending",
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/payments/${payment.payment_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedPayment = await prisma.payment.findUnique({
        where: { payment_id: payment.payment_id },
      });
      expect(deletedPayment).toBeNull();
    });

    test("should return 404 when payment not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/payments/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Payment not found");
    });
  });
});
