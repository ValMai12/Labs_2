const { ProductService } = require("../services/product.service");
const productSchemas = require("../schemas/product.schemas.json");

async function productRoutes(fastify) {
  const productService = new ProductService();

  fastify.post(
    "/products",
    {
      schema: {
        body: productSchemas.createProduct,
      },
    },
    async (request, reply) => {
      try {
        const product = await productService.createProduct(request.body);
        return reply.code(201).send(product);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/products/:id",
    {
      schema: {
        params: productSchemas.getProductParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const product = await productService.getProductById(id);
        return reply.send(product);
      } catch (error) {
        const statusCode = error.message === "Product not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/products",
    {
      schema: {
        querystring: productSchemas.getProductsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.category_id) {
          filters.category_id = request.query.category_id;
        }

        if (request.query.status) {
          filters.status = request.query.status;
        }

        const products = await productService.getProducts(filters);
        return reply.send(products);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/products/:id",
    {
      schema: {
        params: productSchemas.getProductParams,
        body: productSchemas.updateProduct,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const product = await productService.updateProduct(id, request.body);
        return reply.send(product);
      } catch (error) {
        const statusCode = error.message === "Product not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/products/:id",
    {
      schema: {
        params: productSchemas.deleteProductParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await productService.deleteProduct(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Product not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { productRoutes };
