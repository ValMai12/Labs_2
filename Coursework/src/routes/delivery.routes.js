const { DeliveryService } = require("../services/delivery.service");
const deliverySchemas = require("../schemas/delivery.schemas.json");

async function deliveryRoutes(fastify) {
  const deliveryService = new DeliveryService();

  fastify.post(
    "/deliveries",
    {
      schema: {
        body: deliverySchemas.createDelivery,
      },
    },
    async (request, reply) => {
      try {
        const delivery = await deliveryService.createDelivery(request.body);
        return reply.code(201).send(delivery);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/deliveries/:id",
    {
      schema: {
        params: deliverySchemas.getDeliveryParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const delivery = await deliveryService.getDeliveryById(id);
        return reply.send(delivery);
      } catch (error) {
        const statusCode = error.message === "Delivery not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/deliveries",
    {
      schema: {
        querystring: deliverySchemas.getDeliveriesQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.order_id) {
          filters.order_id = request.query.order_id;
        }

        if (request.query.status) {
          filters.status = request.query.status;
        }

        const deliveries = await deliveryService.getDeliveries(filters);
        return reply.send(deliveries);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/deliveries/:id",
    {
      schema: {
        params: deliverySchemas.getDeliveryParams,
        body: deliverySchemas.updateDelivery,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const delivery = await deliveryService.updateDelivery(id, request.body);
        return reply.send(delivery);
      } catch (error) {
        const statusCode = error.message === "Delivery not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/deliveries/:id",
    {
      schema: {
        params: deliverySchemas.deleteDeliveryParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await deliveryService.deleteDelivery(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Delivery not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { deliveryRoutes };

