const { WishlistService } = require("../services/wishlist.service");
const wishlistSchemas = require("../schemas/wishlist.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function wishlistRoutes(fastify) {
  const wishlistService = new WishlistService();

  fastify.post(
    "/wishlists",
    {
      schema: {
        body: wishlistSchemas.createWishlist,
      },
    },
    async (request, reply) => {
      try {
        const wishlist = await wishlistService.createWishlist(request.body);
        return reply.code(201).send(wishlist);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/wishlists/:id",
    {
      schema: {
        params: wishlistSchemas.getWishlistParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const wishlist = await wishlistService.getWishlistById(id);
        return reply.send(wishlist);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/wishlists",
    {
      schema: {
        querystring: wishlistSchemas.getWishlistsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.user_id) {
          filters.user_id = request.query.user_id;
        }

        if (request.query.product_id) {
          filters.product_id = request.query.product_id;
        }

        const wishlists = await wishlistService.getWishlists(filters);
        return reply.send(wishlists);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/wishlists/:id",
    {
      schema: {
        params: wishlistSchemas.deleteWishlistParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await wishlistService.deleteWishlist(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { wishlistRoutes };

