const { CartService } = require("../services/cart.service");
const cartSchemas = require("../schemas/cart.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function cartRoutes(fastify) {
  const cartService = new CartService();

  fastify.post(
    "/carts",
    {
      schema: {
        body: cartSchemas.createCart,
      },
    },
    async (request, reply) => {
      try {
        const cart = await cartService.createCart(request.body);
        return reply.code(201).send(cart);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/carts/:id",
    {
      schema: {
        params: cartSchemas.getCartParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const cart = await cartService.getCartById(id);
        return reply.send(cart);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/carts",
    {
      schema: {
        querystring: cartSchemas.getCartsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.user_id) {
          filters.user_id = request.query.user_id;
        }

        if (request.query.is_active !== undefined) {
          filters.is_active = request.query.is_active;
        }

        const carts = await cartService.getCarts(filters);
        return reply.send(carts);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/carts/:id",
    {
      schema: {
        params: cartSchemas.getCartParams,
        body: cartSchemas.updateCart,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const cart = await cartService.updateCart(id, request.body);
        return reply.send(cart);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/carts/:id",
    {
      schema: {
        params: cartSchemas.deleteCartParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await cartService.deleteCart(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { cartRoutes };

