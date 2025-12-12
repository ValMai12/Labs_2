const Fastify = require("fastify");
const { wishlistRoutes } = require("../../src/routes/wishlist.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(wishlistRoutes);
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

describe("Wishlist Integration Tests", () => {
  describe("POST /wishlists", () => {
    test("should create wishlist item successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.wishlist_id).toBeDefined();
      expect(body.added_at).toBeDefined();
    });

    test("should return 404 when user not found", async () => {
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: 99999,
          product_id: product.product_id,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });

    test("should return 404 when product not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user.user_id,
          product_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });

    test("should return 400 when product already in wishlist", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product already in wishlist");
    });

    test("should allow same product for different users", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product = await createTestProduct();

      const response1 = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user1.user_id,
          product_id: product.product_id,
        },
      });

      const response2 = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user2.user_id,
          product_id: product.product_id,
        },
      });

      expect(response1.statusCode).toBe(201);
      expect(response2.statusCode).toBe(201);
      const body1 = JSON.parse(response1.body);
      const body2 = JSON.parse(response2.body);
      expect(body1.user_id).toBe(user1.user_id);
      expect(body2.user_id).toBe(user2.user_id);
      expect(body1.product_id).toBe(product.product_id);
      expect(body2.product_id).toBe(product.product_id);
    });

    test("should allow different products for same user", async () => {
      const user = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      const response1 = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user.user_id,
          product_id: product1.product_id,
        },
      });

      const response2 = await fastify.inject({
        method: "POST",
        url: "/wishlists",
        payload: {
          user_id: user.user_id,
          product_id: product2.product_id,
        },
      });

      expect(response1.statusCode).toBe(201);
      expect(response2.statusCode).toBe(201);
      const body1 = JSON.parse(response1.body);
      const body2 = JSON.parse(response2.body);
      expect(body1.user_id).toBe(user.user_id);
      expect(body2.user_id).toBe(user.user_id);
      expect(body1.product_id).toBe(product1.product_id);
      expect(body2.product_id).toBe(product2.product_id);
    });
  });

  describe("GET /wishlists/:id", () => {
    test("should get wishlist item by id successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const wishlist = await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/wishlists/${wishlist.wishlist_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.wishlist_id).toBe(wishlist.wishlist_id);
      expect(body.user_id).toBe(user.user_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.added_at).toBeDefined();
    });

    test("should return 404 when wishlist item not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/wishlists/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Wishlist item not found");
    });
  });

  describe("GET /wishlists", () => {
    test("should get all wishlist items", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.wishlist.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
          },
          {
            user_id: user2.user_id,
            product_id: product2.product_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/wishlists",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter wishlist items by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.wishlist.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
          },
          {
            user_id: user1.user_id,
            product_id: product2.product_id,
          },
          {
            user_id: user2.user_id,
            product_id: product1.product_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/wishlists?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      body.forEach((item) => {
        expect(item.user_id).toBe(user1.user_id);
      });
    });

    test("should filter wishlist items by product_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.wishlist.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
          },
          {
            user_id: user2.user_id,
            product_id: product1.product_id,
          },
          {
            user_id: user1.user_id,
            product_id: product2.product_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/wishlists?product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      body.forEach((item) => {
        expect(item.product_id).toBe(product1.product_id);
      });
    });

    test("should filter wishlist items by user_id and product_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.wishlist.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
          },
          {
            user_id: user1.user_id,
            product_id: product2.product_id,
          },
          {
            user_id: user2.user_id,
            product_id: product1.product_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/wishlists?user_id=${user1.user_id}&product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
      expect(body[0].product_id).toBe(product1.product_id);
    });

    test("should return empty array when no wishlist items match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/wishlists?user_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });

    test("should return wishlist items ordered by added_at desc", async () => {
      const user = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();
      const product3 = await createTestProduct();

      const wishlist1 = await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product1.product_id,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 10));

      const wishlist2 = await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product2.product_id,
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 10));

      const wishlist3 = await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product3.product_id,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/wishlists?user_id=${user.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(3);
      expect(body[0].wishlist_id).toBe(wishlist3.wishlist_id);
      expect(body[1].wishlist_id).toBe(wishlist2.wishlist_id);
      expect(body[2].wishlist_id).toBe(wishlist1.wishlist_id);
    });
  });

  describe("DELETE /wishlists/:id", () => {
    test("should delete wishlist item successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const wishlist = await prisma.wishlist.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/wishlists/${wishlist.wishlist_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedWishlist = await prisma.wishlist.findUnique({
        where: { wishlist_id: wishlist.wishlist_id },
      });
      expect(deletedWishlist).toBeNull();
    });

    test("should return 404 when wishlist item not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/wishlists/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Wishlist item not found");
    });
  });
});
