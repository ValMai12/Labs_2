const Fastify = require("fastify");
const { reviewRoutes } = require("../../src/routes/review.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(reviewRoutes);
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

describe("Review Integration Tests", () => {
  describe("POST /reviews", () => {
    test("should create review successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 5,
          comment: "Great product!",
          is_approved: true,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.rating).toBe(5);
      expect(body.comment).toBe("Great product!");
      expect(body.is_approved).toBe(true);
      expect(body.review_id).toBeDefined();
    });

    test("should create review with default is_approved false", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 4,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_approved).toBe(false);
    });

    test("should create review without rating and comment", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.rating).toBeNull();
      expect(body.comment).toBeNull();
    });

    test("should create review with only rating", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 3,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.rating).toBe(3);
      expect(body.comment).toBeNull();
    });

    test("should create review with only comment", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: product.product_id,
          comment: "Nice product",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.comment).toBe("Nice product");
      expect(body.rating).toBeNull();
    });

    test("should return 404 when user not found", async () => {
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/reviews",
        payload: {
          user_id: 99999,
          product_id: product.product_id,
          rating: 5,
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
        url: "/reviews",
        payload: {
          user_id: user.user_id,
          product_id: 99999,
          rating: 5,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });
  });

  describe("GET /reviews/:id", () => {
    test("should get review by id successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 4,
          comment: "Good product",
          is_approved: true,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/reviews/${review.review_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.review_id).toBe(review.review_id);
      expect(body.user_id).toBe(user.user_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.rating).toBe(4);
      expect(body.comment).toBe("Good product");
      expect(body.is_approved).toBe(true);
    });

    test("should return 404 when review not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/reviews/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Review not found");
    });
  });

  describe("GET /reviews", () => {
    test("should get all reviews", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
            rating: 5,
          },
          {
            user_id: user2.user_id,
            product_id: product2.product_id,
            rating: 4,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/reviews",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter reviews by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product.product_id,
            rating: 5,
          },
          {
            user_id: user2.user_id,
            product_id: product.product_id,
            rating: 4,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/reviews?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
    });

    test("should filter reviews by product_id", async () => {
      const user = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user.user_id,
            product_id: product1.product_id,
            rating: 5,
          },
          {
            user_id: user.user_id,
            product_id: product2.product_id,
            rating: 4,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/reviews?product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].product_id).toBe(product1.product_id);
    });

    test("should filter reviews by is_approved true", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 5,
            is_approved: true,
          },
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 4,
            is_approved: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/reviews?is_approved=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_approved).toBe(true);
    });

    test("should filter reviews by is_approved false", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 5,
            is_approved: true,
          },
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 4,
            is_approved: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/reviews?is_approved=false",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_approved).toBe(false);
    });

    test("should filter reviews by user_id and product_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user1.user_id,
            product_id: product1.product_id,
            rating: 5,
          },
          {
            user_id: user1.user_id,
            product_id: product2.product_id,
            rating: 4,
          },
          {
            user_id: user2.user_id,
            product_id: product1.product_id,
            rating: 3,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/reviews?user_id=${user1.user_id}&product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
      expect(body[0].product_id).toBe(product1.product_id);
    });

    test("should filter reviews by product_id and is_approved", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      await prisma.review.createMany({
        data: [
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 5,
            is_approved: true,
          },
          {
            user_id: user.user_id,
            product_id: product.product_id,
            rating: 4,
            is_approved: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/reviews?product_id=${product.product_id}&is_approved=true`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].product_id).toBe(product.product_id);
      expect(body[0].is_approved).toBe(true);
    });

    test("should return empty array when no reviews match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/reviews?user_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /reviews/:id", () => {
    test("should update review rating successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 3,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/reviews/${review.review_id}`,
        payload: {
          rating: 5,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.rating).toBe(5);
    });

    test("should update review comment successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          comment: "Old comment",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/reviews/${review.review_id}`,
        payload: {
          comment: "New comment",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.comment).toBe("New comment");
    });

    test("should update review is_approved successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          is_approved: false,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/reviews/${review.review_id}`,
        payload: {
          is_approved: true,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.is_approved).toBe(true);
    });

    test("should update multiple fields at once", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 3,
          comment: "Old comment",
          is_approved: false,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/reviews/${review.review_id}`,
        payload: {
          rating: 5,
          comment: "Updated comment",
          is_approved: true,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.rating).toBe(5);
      expect(body.comment).toBe("Updated comment");
      expect(body.is_approved).toBe(true);
    });

    test("should return 404 when review not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/reviews/99999",
        payload: {
          rating: 5,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Review not found");
    });
  });

  describe("DELETE /reviews/:id", () => {
    test("should delete review successfully", async () => {
      const user = await createTestUser();
      const product = await createTestProduct();

      const review = await prisma.review.create({
        data: {
          user_id: user.user_id,
          product_id: product.product_id,
          rating: 5,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/reviews/${review.review_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedReview = await prisma.review.findUnique({
        where: { review_id: review.review_id },
      });
      expect(deletedReview).toBeNull();
    });

    test("should return 404 when review not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/reviews/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Review not found");
    });
  });
});

