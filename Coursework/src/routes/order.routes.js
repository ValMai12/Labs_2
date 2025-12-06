const { OrderService } = require("../services/order.service");
const orderSchemas = require("../schemas/order.schemas.json");

async function orderRoutes(fastify) {
  const orderService = new OrderService();

  fastify.post(
    "/orders",
    {
      schema: {
        body: orderSchemas.createOrder,
      },
    },
    async (request, reply) => {
      try {
        const order = await orderService.createOrder(request.body);
        return reply.code(201).send(order);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/orders/:id",
    {
      schema: {
        params: orderSchemas.getOrderParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const order = await orderService.getOrderById(id);
        return reply.send(order);
      } catch (error) {
        const statusCode = error.message === "Order not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/orders",
    {
      schema: {
        querystring: orderSchemas.getOrdersQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.user_id) {
          filters.user_id = request.query.user_id;
        }

        if (request.query.status) {
          filters.status = request.query.status;
        }

        const orders = await orderService.getOrders(filters);
        return reply.send(orders);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/orders/:id",
    {
      schema: {
        params: orderSchemas.getOrderParams,
        body: orderSchemas.updateOrder,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const order = await orderService.updateOrder(id, request.body);
        return reply.send(order);
      } catch (error) {
        const statusCode = error.message === "Order not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/orders/:id",
    {
      schema: {
        params: orderSchemas.deleteOrderParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await orderService.deleteOrder(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Order not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { orderRoutes };

