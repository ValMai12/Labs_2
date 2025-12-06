const { AddressService } = require("../services/address.service");
const addressSchemas = require("../schemas/address.schemas.json");

async function addressRoutes(fastify) {
  const addressService = new AddressService();

  fastify.post(
    "/addresses",
    {
      schema: {
        body: addressSchemas.createAddress,
      },
    },
    async (request, reply) => {
      try {
        const address = await addressService.createAddress(request.body);
        return reply.code(201).send(address);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/addresses/:id",
    {
      schema: {
        params: addressSchemas.getAddressParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const address = await addressService.getAddressById(id);
        return reply.send(address);
      } catch (error) {
        const statusCode = error.message === "Address not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/addresses",
    {
      schema: {
        querystring: addressSchemas.getAddressesQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.user_id) {
          filters.user_id = request.query.user_id;
        }

        if (request.query.is_default !== undefined) {
          filters.is_default = request.query.is_default;
        }

        const addresses = await addressService.getAddresses(filters);
        return reply.send(addresses);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/addresses/:id",
    {
      schema: {
        params: addressSchemas.getAddressParams,
        body: addressSchemas.updateAddress,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const address = await addressService.updateAddress(id, request.body);
        return reply.send(address);
      } catch (error) {
        const statusCode = error.message === "Address not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/addresses/:id",
    {
      schema: {
        params: addressSchemas.deleteAddressParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await addressService.deleteAddress(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Address not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { addressRoutes };

