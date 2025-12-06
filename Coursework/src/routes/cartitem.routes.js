const { CartItemService } = require("../services/cartitem.service");
const cartItemSchemas = require("../schemas/cartitem.schemas.json");

async function cartItemRoutes(fastify) {
  const cartItemService = new CartItemService();

  fastify.post(
    "/cart-items",
    {
      schema: {
        body: cartItemSchemas.createCartItem,
      },
    },
    async (request, reply) => {
      try {
        const cartItem = await cartItemService.createCartItem(request.body);
        return reply.code(201).send(cartItem);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/cart-items/:id",
    {
      schema: {
        params: cartItemSchemas.getCartItemParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const cartItem = await cartItemService.getCartItemById(id);
        return reply.send(cartItem);
      } catch (error) {
        const statusCode = error.message === "Cart item not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/cart-items",
    {
      schema: {
        querystring: cartItemSchemas.getCartItemsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.cart_id) {
          filters.cart_id = request.query.cart_id;
        }

        if (request.query.product_id) {
          filters.product_id = request.query.product_id;
        }

        const cartItems = await cartItemService.getCartItems(filters);
        return reply.send(cartItems);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/cart-items/:id",
    {
      schema: {
        params: cartItemSchemas.getCartItemParams,
        body: cartItemSchemas.updateCartItem,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const cartItem = await cartItemService.updateCartItem(id, request.body);
        return reply.send(cartItem);
      } catch (error) {
        const statusCode = error.message === "Cart item not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/cart-items/:id",
    {
      schema: {
        params: cartItemSchemas.deleteCartItemParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await cartItemService.deleteCartItem(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Cart item not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { cartItemRoutes };

