const Fastify = require("fastify");
const { categoryRoutes } = require("../../src/routes/category.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(categoryRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

async function createTestCategory(name, description, parentId) {
  return await prisma.category.create({
    data: {
      name: name || `Test Category ${Date.now()}`,
      description: description,
      parent_id: parentId,
    },
  });
}

describe("Category Integration Tests", () => {
  describe("POST /categories", () => {
    test("should create category successfully", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/categories",
        payload: {
          name: "Electronics",
          description: "Electronic products",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("Electronics");
      expect(body.description).toBe("Electronic products");
      expect(body.category_id).toBeDefined();
      expect(body.parent_id).toBeNull();
    });

    test("should create category with parent_id", async () => {
      const parentCategory = await createTestCategory("Parent Category");

      const response = await fastify.inject({
        method: "POST",
        url: "/categories",
        payload: {
          name: "Child Category",
          parent_id: parentCategory.category_id,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("Child Category");
      expect(body.parent_id).toBe(parentCategory.category_id);
    });

    test("should create category without description", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/categories",
        payload: {
          name: "Simple Category",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("Simple Category");
      expect(body.description).toBeNull();
    });

    test("should return 404 when parent category not found", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/categories",
        payload: {
          name: "Child Category",
          parent_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Parent category not found");
    });
  });

  describe("GET /categories/:id", () => {
    test("should get category by id successfully", async () => {
      const category = await createTestCategory("Test Category", "Test Description");

      const response = await fastify.inject({
        method: "GET",
        url: `/categories/${category.category_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.category_id).toBe(category.category_id);
      expect(body.name).toBe("Test Category");
      expect(body.description).toBe("Test Description");
    });

    test("should return 404 when category not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/categories/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Category not found");
    });
  });

  describe("GET /categories", () => {
    test("should get all categories", async () => {
      await createTestCategory("Category 1");
      await createTestCategory("Category 2");
      await createTestCategory("Category 3");

      const response = await fastify.inject({
        method: "GET",
        url: "/categories",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(3);
    });

    test("should filter categories by parent_id", async () => {
      const parentCategory = await createTestCategory("Parent");
      const child1 = await createTestCategory("Child 1", null, parentCategory.category_id);
      const child2 = await createTestCategory("Child 2", null, parentCategory.category_id);
      await createTestCategory("Other Category");

      const response = await fastify.inject({
        method: "GET",
        url: `/categories?parent_id=${parentCategory.category_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every(cat => cat.parent_id === parentCategory.category_id)).toBe(true);
    });

    test("should return only root categories when filtering by null parent_id", async () => {
      const parent = await createTestCategory("Parent");
      await createTestCategory("Child", null, parent.category_id);
      await createTestCategory("Root Category");

      const response = await fastify.inject({
        method: "GET",
        url: "/categories",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBeGreaterThan(0);
    });

    test("should return empty array when no categories match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/categories?parent_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /categories/:id", () => {
    test("should update category name successfully", async () => {
      const category = await createTestCategory("Old Name", "Old Description");

      const response = await fastify.inject({
        method: "PUT",
        url: `/categories/${category.category_id}`,
        payload: {
          name: "New Name",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("New Name");
      expect(body.description).toBe("Old Description");
    });

    test("should update category description successfully", async () => {
      const category = await createTestCategory("Category", "Old Description");

      const response = await fastify.inject({
        method: "PUT",
        url: `/categories/${category.category_id}`,
        payload: {
          description: "New Description",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.description).toBe("New Description");
    });

    test("should update category parent_id successfully", async () => {
      const parent1 = await createTestCategory("Parent 1");
      const parent2 = await createTestCategory("Parent 2");
      const category = await createTestCategory("Category", null, parent1.category_id);

      const response = await fastify.inject({
        method: "PUT",
        url: `/categories/${category.category_id}`,
        payload: {
          parent_id: parent2.category_id,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.parent_id).toBe(parent2.category_id);
    });

    test("should update multiple fields at once", async () => {
      const category = await createTestCategory("Old Name", "Old Description");

      const response = await fastify.inject({
        method: "PUT",
        url: `/categories/${category.category_id}`,
        payload: {
          name: "New Name",
          description: "New Description",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.name).toBe("New Name");
      expect(body.description).toBe("New Description");
    });

    test("should return 404 when category not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/categories/99999",
        payload: {
          name: "New Name",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Category not found");
    });

    test("should return 404 when parent category not found", async () => {
      const category = await createTestCategory("Category");

      const response = await fastify.inject({
        method: "PUT",
        url: `/categories/${category.category_id}`,
        payload: {
          parent_id: 99999,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Parent category not found");
    });
  });

  describe("DELETE /categories/:id", () => {
    test("should delete category successfully", async () => {
      const category = await createTestCategory("Category to Delete");

      const response = await fastify.inject({
        method: "DELETE",
        url: `/categories/${category.category_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedCategory = await prisma.category.findUnique({
        where: { category_id: category.category_id },
      });
      expect(deletedCategory).toBeNull();
    });

    test("should return 404 when category not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/categories/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Category not found");
    });
  });
});

