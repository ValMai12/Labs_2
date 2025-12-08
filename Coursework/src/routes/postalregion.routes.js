const { PostalRegionService } = require("../services/postalregion.service");
const postalRegionSchemas = require("../schemas/postalregion.schemas.json");

async function postalRegionRoutes(fastify) {
  const postalRegionService = new PostalRegionService();

  fastify.post(
    "/postal-regions",
    {
      schema: {
        body: postalRegionSchemas.createPostalRegion,
      },
    },
    async (request, reply) => {
      try {
        const postalRegion = await postalRegionService.createPostalRegion(
          request.body
        );
        return reply.code(201).send(postalRegion);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/postal-regions/:id",
    {
      schema: {
        params: postalRegionSchemas.getPostalRegionParams,
      },
    },
    async (request, reply) => {
      try {
        const postalRegion = await postalRegionService.getPostalRegionById(
          request.params.id
        );
        return reply.send(postalRegion);
      } catch (error) {
        const statusCode =
          error.message === "Postal region not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/postal-regions",
    {
      schema: {
        querystring: postalRegionSchemas.getPostalRegionsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.city) {
          filters.city = request.query.city;
        }

        if (request.query.country) {
          filters.country = request.query.country;
        }

        const postalRegions = await postalRegionService.getPostalRegions(
          filters
        );
        return reply.send(postalRegions);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/postal-regions/:id",
    {
      schema: {
        params: postalRegionSchemas.getPostalRegionParams,
        body: postalRegionSchemas.updatePostalRegion,
      },
    },
    async (request, reply) => {
      try {
        const postalRegion = await postalRegionService.updatePostalRegion(
          request.params.id,
          request.body
        );
        return reply.send(postalRegion);
      } catch (error) {
        const statusCode =
          error.message === "Postal region not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/postal-regions/:id",
    {
      schema: {
        params: postalRegionSchemas.deletePostalRegionParams,
      },
    },
    async (request, reply) => {
      try {
        await postalRegionService.deletePostalRegion(request.params.id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode =
          error.message === "Postal region not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { postalRegionRoutes };

