const { PrismaClient } = require("../../generated");

const prisma = new PrismaClient();

class DiscountRuleService {
  async createDiscountRule(data) {
    return await prisma.$transaction(async (tx) => {
      const existingDiscountRule = await tx.discountRule.findUnique({
        where: { code: data.code },
      });
      if (existingDiscountRule) {
        throw new Error("Discount code already exists");
      }

      return await tx.discountRule.create({
        data: {
          code: data.code,
          type: data.type,
          value: data.value,
          valid_from: new Date(data.valid_from),
          valid_to: new Date(data.valid_to),
          is_active: data.is_active ?? true,
        },
      });
    });
  }

  async getDiscountRuleById(id) {
    return await prisma.$transaction(async (tx) => {
      const discountRule = await tx.discountRule.findUnique({
        where: { discount_rule_id: id },
      });
      if (!discountRule) {
        throw new Error("Discount rule not found");
      }
      return discountRule;
    });
  }

  async getDiscountRules(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.is_active !== undefined) {
        where.is_active = filters.is_active === "true";
      }

      if (filters?.type) {
        where.type = filters.type;
      }

      return await tx.discountRule.findMany({
        where,
        orderBy: { valid_from: "desc" },
      });
    });
  }

  async updateDiscountRule(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingDiscountRule = await tx.discountRule.findUnique({
        where: { discount_rule_id: id },
      });
      if (!existingDiscountRule) {
        throw new Error("Discount rule not found");
      }

      if (data.code && data.code !== existingDiscountRule.code) {
        const codeExists = await tx.discountRule.findUnique({
          where: { code: data.code },
        });
        if (codeExists) {
          throw new Error("Discount code already in use");
        }
      }

      const updateData = { ...data };
      if (data.valid_from) {
        updateData.valid_from = new Date(data.valid_from);
      }
      if (data.valid_to) {
        updateData.valid_to = new Date(data.valid_to);
      }

      return await tx.discountRule.update({
        where: { discount_rule_id: id },
        data: updateData,
      });
    });
  }

  async deleteDiscountRule(id) {
    return await prisma.$transaction(async (tx) => {
      const existingDiscountRule = await tx.discountRule.findUnique({
        where: { discount_rule_id: id },
      });
      if (!existingDiscountRule) {
        throw new Error("Discount rule not found");
      }

      return await tx.discountRule.delete({
        where: { discount_rule_id: id },
      });
    });
  }
}

module.exports = { DiscountRuleService };

