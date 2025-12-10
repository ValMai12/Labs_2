const Fastify = require("fastify");
const { cartRoutes } = require("../../src/routes/cart.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(cartRoutes);
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

describe("Cart Integration Tests", () => {
  describe("POST /carts", () => {
    test("should create cart successfully", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/carts",
        payload: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.is_active).toBe(true);
      expect(body.cart_id).toBeDefined();
    });

    test("should create cart with default is_active true", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/carts",
        payload: {
          user_id: user.user_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(true);
    });

    test("should create cart with is_active false", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/carts",
        payload: {
          user_id: user.user_id,
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(false);
    });

    test("should return 404 when user not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/carts",
        payload: {
          user_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });
  });

  describe("GET /carts/:id", () => {
    test("should get cart by id successfully", async () => {
      const user = await createTestUser();

      const cart = await prisma.cart.create({
        data: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/carts/${cart.cart_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.cart_id).toBe(cart.cart_id);
      expect(body.user_id).toBe(user.user_id);
      expect(body.is_active).toBe(true);
    });

    test("should return 404 when cart not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/carts/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart not found");
    });
  });

  describe("GET /carts", () => {
    test("should get all carts", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.cart.createMany({
        data: [
          {
            user_id: user1.user_id,
            is_active: true,
          },
          {
            user_id: user2.user_id,
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/carts",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter carts by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.cart.createMany({
        data: [
          {
            user_id: user1.user_id,
            is_active: true,
          },
          {
            user_id: user2.user_id,
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/carts?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
    });

    test("should filter carts by is_active true", async () => {
      const user = await createTestUser();

      await prisma.cart.createMany({
        data: [
          {
            user_id: user.user_id,
            is_active: true,
          },
          {
            user_id: user.user_id,
            is_active: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/carts?is_active=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(true);
    });

    test("should filter carts by is_active false", async () => {
      const user = await createTestUser();

      await prisma.cart.createMany({
        data: [
          {
            user_id: user.user_id,
            is_active: true,
          },
          {
            user_id: user.user_id,
            is_active: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/carts?is_active=false",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(false);
    });

    test("should filter carts by user_id and is_active", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();

      await prisma.cart.createMany({
        data: [
          {
            user_id: user1.user_id,
            is_active: true,
          },
          {
            user_id: user1.user_id,
            is_active: false,
          },
          {
            user_id: user2.user_id,
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/carts?user_id=${user1.user_id}&is_active=true`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
      expect(body[0].is_active).toBe(true);
    });

    test("should return empty array when no carts match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/carts?user_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /carts/:id", () => {
    test("should update cart successfully", async () => {
      const user = await createTestUser();

      const cart = await prisma.cart.create({
        data: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/carts/${cart.cart_id}`,
        payload: {
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(false);
      expect(body.cart_id).toBe(cart.cart_id);
    });

    test("should return 404 when cart not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/carts/99999",
        payload: {
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart not found");
    });
  });

  describe("DELETE /carts/:id", () => {
    test("should delete cart successfully", async () => {
      const user = await createTestUser();

      const cart = await prisma.cart.create({
        data: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/carts/${cart.cart_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedCart = await prisma.cart.findUnique({
        where: { cart_id: cart.cart_id },
      });
      expect(deletedCart).toBeNull();
    });

    test("should return 404 when cart not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/carts/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart not found");
    });
  });
});

