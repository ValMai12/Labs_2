const { DiscountRuleService } = require("../services/discountrule.service");
const discountRuleSchemas = require("../schemas/discountrule.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function discountRuleRoutes(fastify) {
  const discountRuleService = new DiscountRuleService();

  fastify.post(
    "/discount-rules",
    {
      schema: {
        body: discountRuleSchemas.createDiscountRule,
      },
    },
    async (request, reply) => {
      try {
        const discountRule = await discountRuleService.createDiscountRule(
          request.body
        );
        return reply.code(201).send(discountRule);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/discount-rules/:id",
    {
      schema: {
        params: discountRuleSchemas.getDiscountRuleParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const discountRule = await discountRuleService.getDiscountRuleById(id);
        return reply.send(discountRule);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/discount-rules",
    {
      schema: {
        querystring: discountRuleSchemas.getDiscountRulesQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.is_active !== undefined) {
          filters.is_active = request.query.is_active;
        }

        if (request.query.type) {
          filters.type = request.query.type;
        }

        const discountRules = await discountRuleService.getDiscountRules(
          filters
        );
        return reply.send(discountRules);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/discount-rules/:id",
    {
      schema: {
        params: discountRuleSchemas.getDiscountRuleParams,
        body: discountRuleSchemas.updateDiscountRule,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const discountRule = await discountRuleService.updateDiscountRule(
          id,
          request.body
        );
        return reply.send(discountRule);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/discount-rules/:id",
    {
      schema: {
        params: discountRuleSchemas.deleteDiscountRuleParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await discountRuleService.deleteDiscountRule(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { discountRuleRoutes };

