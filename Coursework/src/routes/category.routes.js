const { CategoryService } = require("../services/category.service");
const categorySchemas = require("../schemas/category.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function categoryRoutes(fastify) {
  const categoryService = new CategoryService();

  fastify.post(
    "/categories",
    {
      schema: {
        body: categorySchemas.createCategory,
      },
    },
    async (request, reply) => {
      try {
        const category = await categoryService.createCategory(request.body);
        return reply.code(201).send(category);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/categories/:id",
    {
      schema: {
        params: categorySchemas.getCategoryParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const category = await categoryService.getCategoryById(id);
        return reply.send(category);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/categories",
    {
      schema: {
        querystring: categorySchemas.getCategoriesQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.parent_id) {
          filters.parent_id = request.query.parent_id;
        }

        const categories = await categoryService.getCategories(filters);
        return reply.send(categories);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/categories/:id",
    {
      schema: {
        params: categorySchemas.getCategoryParams,
        body: categorySchemas.updateCategory,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const category = await categoryService.updateCategory(id, request.body);
        return reply.send(category);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/categories/:id",
    {
      schema: {
        params: categorySchemas.deleteCategoryParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await categoryService.deleteCategory(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { categoryRoutes };

