const Fastify = require("fastify");
const { deliveryRoutes } = require("../../src/routes/delivery.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(deliveryRoutes);
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

describe("Delivery Integration Tests", () => {
  describe("POST /deliveries", () => {
    test("should create delivery successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/deliveries",
        payload: {
          order_id: order.order_id,
          courier: "DHL",
          tracking_number: "TRACK123",
          status: "preparing",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.order_id).toBe(order.order_id);
      expect(body.courier).toBe("DHL");
      expect(body.tracking_number).toBe("TRACK123");
      expect(body.status).toBe("preparing");
      expect(body.delivery_id).toBeDefined();
    });

    test("should create delivery with default status preparing", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/deliveries",
        payload: {
          order_id: order.order_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("preparing");
    });

    test("should create delivery with optional fields only", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/deliveries",
        payload: {
          order_id: order.order_id,
          courier: "FedEx",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.courier).toBe("FedEx");
      expect(body.tracking_number).toBeNull();
    });

    test("should return 404 when order not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/deliveries",
        payload: {
          order_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Order not found");
    });

    test("should return error when delivery already exists for order", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          status: "preparing",
        },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/deliveries",
        payload: {
          order_id: order.order_id,
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Delivery already exists for this order");
    });
  });

  describe("GET /deliveries/:id", () => {
    test("should get delivery by id successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          courier: "UPS",
          tracking_number: "TRACK456",
          status: "in_transit",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/deliveries/${delivery.delivery_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.delivery_id).toBe(delivery.delivery_id);
      expect(body.order_id).toBe(order.order_id);
      expect(body.courier).toBe("UPS");
      expect(body.tracking_number).toBe("TRACK456");
      expect(body.status).toBe("in_transit");
    });

    test("should return 404 when delivery not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/deliveries/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Delivery not found");
    });
  });

  describe("GET /deliveries", () => {
    test("should get all deliveries", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const order1 = await createTestOrder(user1.user_id);
      const order2 = await createTestOrder(user2.user_id);

      await prisma.delivery.createMany({
        data: [
          {
            order_id: order1.order_id,
            status: "preparing",
          },
          {
            order_id: order2.order_id,
            status: "in_transit",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/deliveries",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter deliveries by order_id", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);

      await prisma.delivery.createMany({
        data: [
          {
            order_id: order1.order_id,
            status: "preparing",
          },
          {
            order_id: order2.order_id,
            status: "in_transit",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/deliveries?order_id=${order1.order_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].order_id).toBe(order1.order_id);
    });

    test("should filter deliveries by status", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);
      const order3 = await createTestOrder(user.user_id);

      await prisma.delivery.createMany({
        data: [
          {
            order_id: order1.order_id,
            status: "preparing",
          },
          {
            order_id: order2.order_id,
            status: "delivered",
          },
          {
            order_id: order3.order_id,
            status: "preparing",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/deliveries?status=preparing",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every((d) => d.status === "preparing")).toBe(true);
    });

    test("should filter deliveries by order_id and status", async () => {
      const user = await createTestUser();
      const order1 = await createTestOrder(user.user_id);
      const order2 = await createTestOrder(user.user_id);
      const order3 = await createTestOrder(user.user_id);

      await prisma.delivery.createMany({
        data: [
          {
            order_id: order1.order_id,
            status: "preparing",
          },
          {
            order_id: order2.order_id,
            status: "delivered",
          },
          {
            order_id: order3.order_id,
            status: "preparing",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/deliveries?order_id=${order1.order_id}&status=preparing`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].order_id).toBe(order1.order_id);
      expect(body[0].status).toBe("preparing");
    });

    test("should return empty array when no deliveries match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/deliveries?order_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /deliveries/:id", () => {
    test("should update delivery status successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          status: "preparing",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/deliveries/${delivery.delivery_id}`,
        payload: {
          status: "in_transit",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("in_transit");
    });

    test("should update delivery courier successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          courier: "Old Courier",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/deliveries/${delivery.delivery_id}`,
        payload: {
          courier: "New Courier",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.courier).toBe("New Courier");
    });

    test("should update delivery tracking_number successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          tracking_number: "OLD123",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/deliveries/${delivery.delivery_id}`,
        payload: {
          tracking_number: "NEW456",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.tracking_number).toBe("NEW456");
    });

    test("should update multiple fields at once", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          status: "preparing",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/deliveries/${delivery.delivery_id}`,
        payload: {
          courier: "DHL",
          tracking_number: "TRACK789",
          status: "delivered",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.courier).toBe("DHL");
      expect(body.tracking_number).toBe("TRACK789");
      expect(body.status).toBe("delivered");
    });

    test("should return 404 when delivery not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/deliveries/99999",
        payload: {
          status: "delivered",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Delivery not found");
    });
  });

  describe("DELETE /deliveries/:id", () => {
    test("should delete delivery successfully", async () => {
      const user = await createTestUser();
      const order = await createTestOrder(user.user_id);

      const delivery = await prisma.delivery.create({
        data: {
          order_id: order.order_id,
          status: "preparing",
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/deliveries/${delivery.delivery_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedDelivery = await prisma.delivery.findUnique({
        where: { delivery_id: delivery.delivery_id },
      });
      expect(deletedDelivery).toBeNull();
    });

    test("should return 404 when delivery not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/deliveries/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Delivery not found");
    });
  });
});
