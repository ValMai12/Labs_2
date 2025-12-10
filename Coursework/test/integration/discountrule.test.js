const Fastify = require("fastify");
const { discountRuleRoutes } = require("../../src/routes/discountrule.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(discountRuleRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

function getFutureDate(days = 30) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function getPastDate(days = 30) {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date.toISOString();
}

describe("Discount Rule Integration Tests", () => {
  describe("POST /discount-rules", () => {
    test("should create discount rule successfully", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/discount-rules",
        payload: {
          code: "SAVE10",
          type: "percent",
          value: 10,
          valid_from: getPastDate(1),
          valid_to: getFutureDate(30),
          is_active: true,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.code).toBe("SAVE10");
      expect(body.type).toBe("percent");
      expect(body.value).toBe("10");
      expect(body.is_active).toBe(true);
      expect(body.discount_rule_id).toBeDefined();
    });

    test("should create discount rule with type fixed", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/discount-rules",
        payload: {
          code: "FIXED5",
          type: "fixed",
          value: 5,
          valid_from: getPastDate(1),
          valid_to: getFutureDate(30),
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.type).toBe("fixed");
      expect(body.value).toBe("5");
    });

    test("should create discount rule with default is_active true", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/discount-rules",
        payload: {
          code: "DEFAULT",
          type: "percent",
          value: 15,
          valid_from: getPastDate(1),
          valid_to: getFutureDate(30),
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(true);
    });

    test("should create discount rule with is_active false", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/discount-rules",
        payload: {
          code: "INACTIVE",
          type: "percent",
          value: 20,
          valid_from: getPastDate(1),
          valid_to: getFutureDate(30),
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(false);
    });

    test("should return error when code already exists", async () => {
      await prisma.discountRule.create({
        data: {
          code: "EXISTING",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/discount-rules",
        payload: {
          code: "EXISTING",
          type: "fixed",
          value: 5,
          valid_from: getPastDate(1),
          valid_to: getFutureDate(30),
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount code already exists");
    });
  });

  describe("GET /discount-rules/:id", () => {
    test("should get discount rule by id successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "GETTEST",
          type: "percent",
          value: 25,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.discount_rule_id).toBe(discountRule.discount_rule_id);
      expect(body.code).toBe("GETTEST");
      expect(body.type).toBe("percent");
      expect(body.value).toBe("25");
    });

    test("should return 404 when discount rule not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount rule not found");
    });
  });

  describe("GET /discount-rules", () => {
    test("should get all discount rules", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "RULE1",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
          {
            code: "RULE2",
            type: "fixed",
            value: 5,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter discount rules by is_active true", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "ACTIVE1",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: true,
          },
          {
            code: "INACTIVE1",
            type: "percent",
            value: 15,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?is_active=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(true);
    });

    test("should filter discount rules by is_active false", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "ACTIVE2",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: true,
          },
          {
            code: "INACTIVE2",
            type: "percent",
            value: 15,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?is_active=false",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(false);
    });

    test("should filter discount rules by type percent", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "PERCENT1",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
          {
            code: "FIXED1",
            type: "fixed",
            value: 5,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?type=percent",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].type).toBe("percent");
    });

    test("should filter discount rules by type fixed", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "PERCENT2",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
          {
            code: "FIXED2",
            type: "fixed",
            value: 5,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?type=fixed",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].type).toBe("fixed");
    });

    test("should filter discount rules by is_active and type", async () => {
      await prisma.discountRule.createMany({
        data: [
          {
            code: "ACTIVE_PERCENT",
            type: "percent",
            value: 10,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: true,
          },
          {
            code: "INACTIVE_PERCENT",
            type: "percent",
            value: 15,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: false,
          },
          {
            code: "ACTIVE_FIXED",
            type: "fixed",
            value: 5,
            valid_from: new Date(getPastDate(1)),
            valid_to: new Date(getFutureDate(30)),
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?is_active=true&type=percent",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(true);
      expect(body[0].type).toBe("percent");
    });

    test("should return empty array when no discount rules match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/discount-rules?is_active=false",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /discount-rules/:id", () => {
    test("should update discount rule value successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "UPDATE1",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          value: 20,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.value).toBe("20");
    });

    test("should update discount rule is_active successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "UPDATE2",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(false);
    });

    test("should update discount rule code successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "OLDCODE",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          code: "NEWCODE",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.code).toBe("NEWCODE");
    });

    test("should update discount rule valid dates successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "DATES",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const newValidFrom = getPastDate(5);
      const newValidTo = getFutureDate(60);

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          valid_from: newValidFrom,
          valid_to: newValidTo,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(new Date(body.valid_from).toISOString()).toBe(
        new Date(newValidFrom).toISOString()
      );
      expect(new Date(body.valid_to).toISOString()).toBe(
        new Date(newValidTo).toISOString()
      );
    });

    test("should update multiple fields at once", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "MULTI",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          type: "fixed",
          value: 15,
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.type).toBe("fixed");
      expect(body.value).toBe("15");
      expect(body.is_active).toBe(false);
    });

    test("should return 404 when discount rule not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/discount-rules/99999",
        payload: {
          value: 20,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount rule not found");
    });

    test("should return error when code already in use", async () => {
      await prisma.discountRule.create({
        data: {
          code: "TAKEN",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const discountRule = await prisma.discountRule.create({
        data: {
          code: "ORIGINAL",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
        payload: {
          code: "TAKEN",
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount code already in use");
    });
  });

  describe("DELETE /discount-rules/:id", () => {
    test("should delete discount rule successfully", async () => {
      const discountRule = await prisma.discountRule.create({
        data: {
          code: "DELETE",
          type: "percent",
          value: 10,
          valid_from: new Date(getPastDate(1)),
          valid_to: new Date(getFutureDate(30)),
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/discount-rules/${discountRule.discount_rule_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedRule = await prisma.discountRule.findUnique({
        where: { discount_rule_id: discountRule.discount_rule_id },
      });
      expect(deletedRule).toBeNull();
    });

    test("should return 404 when discount rule not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/discount-rules/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Discount rule not found");
    });
  });
});
