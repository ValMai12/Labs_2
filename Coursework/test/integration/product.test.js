const Fastify = require("fastify");
const { productRoutes } = require("../../src/routes/product.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(productRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

async function createTestCategory() {
  return await prisma.category.create({
    data: {
      name: `Test Category ${Date.now()}`,
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

describe("Product Integration Tests", () => {
  describe("POST /products", () => {
    test("should create product successfully", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Test Product",
          price: 99.99,
          description: "Test Description",
          stock: 100,
          status: "active",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("Test Product");
      expect(body.price).toBe("99.99");
      expect(body.description).toBe("Test Description");
      expect(body.stock).toBe(100);
      expect(body.status).toBe("active");
      expect(body.product_id).toBeDefined();
    });

    test("should create product with default stock 0", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Product No Stock",
          price: 50,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.stock).toBe(0);
    });

    test("should create product with default status active", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Default Status Product",
          price: 75,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("active");
    });

    test("should create product with category", async () => {
      const category = await createTestCategory();

      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Categorized Product",
          price: 100,
          category_id: category.category_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.category_id).toBe(category.category_id);
    });

    test("should create product with discount rule", async () => {
      const discount = await createTestDiscountRule();

      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Discounted Product",
          price: 100,
          discount_rule_id: discount.discount_rule_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.discount_rule_id).toBe(discount.discount_rule_id);
    });

    test("should create product with all optional fields", async () => {
      const category = await createTestCategory();
      const discount = await createTestDiscountRule();

      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Full Product",
          price: 150,
          description: "Full description",
          stock: 50,
          status: "active",
          image_url: "https://example.com/image.jpg",
          category_id: category.category_id,
          discount_rule_id: discount.discount_rule_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("Full Product");
      expect(body.image_url).toBe("https://example.com/image.jpg");
      expect(body.category_id).toBe(category.category_id);
      expect(body.discount_rule_id).toBe(discount.discount_rule_id);
    });

    test("should return 404 when category not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Product",
          price: 100,
          category_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Category not found");
    });

    test("should return 404 when discount rule not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/products",
        payload: {
          name: "Product",
          price: 100,
          discount_rule_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount rule not found");
    });
  });

  describe("GET /products/:id", () => {
    test("should get product by id successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Get Product",
          price: 125.50,
          stock: 75,
          status: "active",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/products/${product.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.product_id).toBe(product.product_id);
      expect(body.name).toBe("Get Product");
      expect(body.price).toBe("125.5");
      expect(body.stock).toBe(75);
    });

    test("should return 404 when product not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/products/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });
  });

  describe("GET /products", () => {
    test("should get all products", async () => {
      await prisma.product.createMany({
        data: [
          {
            name: "Product 1",
            price: 100,
            status: "active",
          },
          {
            name: "Product 2",
            price: 200,
            status: "hidden",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter products by category_id", async () => {
      const category1 = await createTestCategory();
      const category2 = await createTestCategory();

      await prisma.product.createMany({
        data: [
          {
            name: "Product 1",
            price: 100,
            category_id: category1.category_id,
          },
          {
            name: "Product 2",
            price: 200,
            category_id: category2.category_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/products?category_id=${category1.category_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].category_id).toBe(category1.category_id);
    });

    test("should filter products by status active", async () => {
      await prisma.product.createMany({
        data: [
          {
            name: "Active Product",
            price: 100,
            status: "active",
          },
          {
            name: "Hidden Product",
            price: 200,
            status: "hidden",
          },
          {
            name: "Out of Stock Product",
            price: 300,
            status: "out_of_stock",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products?status=active",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].status).toBe("active");
    });

    test("should filter products by status hidden", async () => {
      await prisma.product.createMany({
        data: [
          {
            name: "Active Product",
            price: 100,
            status: "active",
          },
          {
            name: "Hidden Product",
            price: 200,
            status: "hidden",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products?status=hidden",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].status).toBe("hidden");
    });

    test("should filter products by category_id and status", async () => {
      const category = await createTestCategory();

      await prisma.product.createMany({
        data: [
          {
            name: "Active Product",
            price: 100,
            category_id: category.category_id,
            status: "active",
          },
          {
            name: "Hidden Product",
            price: 200,
            category_id: category.category_id,
            status: "hidden",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/products?category_id=${category.category_id}&status=active`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].category_id).toBe(category.category_id);
      expect(body[0].status).toBe("active");
    });

    test("should return empty array when no products match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/products?category_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /products/:id", () => {
    test("should update product name successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Old Name",
          price: 100,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          name: "New Name",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("New Name");
    });

    test("should update product price successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Product",
          price: 100,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          price: 150,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.price).toBe("150");
    });

    test("should update product stock successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Product",
          price: 100,
          stock: 50,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          stock: 75,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.stock).toBe(75);
    });

    test("should update product status successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Product",
          price: 100,
          status: "active",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          status: "out_of_stock",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.status).toBe("out_of_stock");
    });

    test("should update product category successfully", async () => {
      const category1 = await createTestCategory();
      const category2 = await createTestCategory();

      const product = await prisma.product.create({
        data: {
          name: "Product",
          price: 100,
          category_id: category1.category_id,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          category_id: category2.category_id,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.category_id).toBe(category2.category_id);
    });

    test("should update multiple fields at once", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Old Name",
          price: 100,
          stock: 50,
          status: "active",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/products/${product.product_id}`,
        payload: {
          name: "New Name",
          price: 150,
          stock: 75,
          status: "hidden",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("New Name");
      expect(body.price).toBe("150");
      expect(body.stock).toBe(75);
      expect(body.status).toBe("hidden");
    });

    test("should return 404 when product not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/products/99999",
        payload: {
          name: "New Name",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });
  });

  describe("DELETE /products/:id", () => {
    test("should delete product successfully", async () => {
      const product = await prisma.product.create({
        data: {
          name: "Product to Delete",
          price: 100,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/products/${product.product_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedProduct = await prisma.product.findUnique({
        where: { product_id: product.product_id },
      });
      expect(deletedProduct).toBeNull();
    });

    test("should return 404 when product not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/products/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });
  });

  describe("GET /products/with-category", () => {
    test("should get products with category details", async () => {
      const category = await createTestCategory();

      await prisma.product.create({
        data: {
          name: "Product with Category",
          price: 100,
          category_id: category.category_id,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products/with-category",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBeGreaterThan(0);
      expect(body[0].category).toBeDefined();
      expect(body[0].category.category_id).toBe(category.category_id);
    });

    test("should filter products with category by category_id", async () => {
      const category1 = await createTestCategory();
      const category2 = await createTestCategory();

      await prisma.product.createMany({
        data: [
          {
            name: "Product 1",
            price: 100,
            category_id: category1.category_id,
          },
          {
            name: "Product 2",
            price: 200,
            category_id: category2.category_id,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/products/with-category?category_id=${category1.category_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].category.category_id).toBe(category1.category_id);
    });

    test("should filter products with category by status", async () => {
      await prisma.product.createMany({
        data: [
          {
            name: "Active Product",
            price: 100,
            status: "active",
          },
          {
            name: "Hidden Product",
            price: 200,
            status: "hidden",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products/with-category?status=active",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].status).toBe("active");
    });
  });

  describe("GET /products/most-successful", () => {
    test("should get most successful products", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const category = await createTestCategory();
      const product = await prisma.product.create({
        data: {
          name: "Successful Product",
          price: 100,
          category_id: category.category_id,
          status: "active",
        },
      });

      const cart = await prisma.cart.create({
        data: {
          user_id: user.user_id,
          is_active: true,
        },
      });

      await prisma.cartitem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: product.product_id,
          quantity: 2,
        },
      });

      const order = await prisma.order.create({
        data: {
          user_id: user.user_id,
          cart_id: cart.cart_id,
          total_amount: 200,
          status: "paid",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/products/most-successful",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(Array.isArray(body)).toBe(true);
    });

    test("should filter most successful products by status", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/products/most-successful?status=active",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(Array.isArray(body)).toBe(true);
    });
  });
});

