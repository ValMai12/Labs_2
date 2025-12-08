const { PaymentService } = require("../services/payment.service");
const paymentSchemas = require("../schemas/payment.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function paymentRoutes(fastify) {
  const paymentService = new PaymentService();

  fastify.post(
    "/payments",
    {
      schema: {
        body: paymentSchemas.createPayment,
      },
    },
    async (request, reply) => {
      try {
        const payment = await paymentService.createPayment(request.body);
        return reply.code(201).send(payment);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/payments/:id",
    {
      schema: {
        params: paymentSchemas.getPaymentParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const payment = await paymentService.getPaymentById(id);
        return reply.send(payment);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/payments",
    {
      schema: {
        querystring: paymentSchemas.getPaymentsQuery,
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

        if (request.query.method) {
          filters.method = request.query.method;
        }

        const payments = await paymentService.getPayments(filters);
        return reply.send(payments);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/payments/:id",
    {
      schema: {
        params: paymentSchemas.getPaymentParams,
        body: paymentSchemas.updatePayment,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const payment = await paymentService.updatePayment(id, request.body);
        return reply.send(payment);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/payments/:id",
    {
      schema: {
        params: paymentSchemas.deletePaymentParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await paymentService.deletePayment(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { paymentRoutes };

