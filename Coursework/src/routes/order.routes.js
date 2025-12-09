const { OrderService } = require("../services/order.service");
const orderSchemas = require("../schemas/order.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

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
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
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
        const statusCode = getStatusCode(error);
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
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
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
        const statusCode = getStatusCode(error);
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
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.post(
    "/orders/with-products",
    {
      schema: {
        body: orderSchemas.createOrderWithProducts,
      },
    },
    async (request, reply) => {
      try {
        const order = await orderService.createOrderWithProducts(request.body);
        return reply.code(201).send(order);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.patch(
    "/orders/:id/status",
    {
      schema: {
        params: orderSchemas.getOrderParams,
        body: orderSchemas.updateOrderStatus,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const order = await orderService.updateOrderStatusWithReconciliation(
          id,
          request.body.status,
          request.body.expected_status
        );
        return reply.send(order);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/orders/with-user",
    {
      schema: {
        querystring: orderSchemas.getOrdersWithUserQuery,
      },
    },
    async (request, reply) => {
      try {
        const result = await orderService.getOrdersWithUserDetails(
          request.query
        );
        return reply.send(result);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { orderRoutes };

