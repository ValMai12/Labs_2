const prisma = require("../db/prisma");

class CategoryService {
  async createCategory(data) {
    return await prisma.$transaction(async (tx) => {
      return await tx.category.create({
        data: {
          name: data.name,
          description: data.description,
          parent_id: data.parent_id,
        },
      });
    });
  }

  async getCategoryById(id) {
    return await prisma.$transaction(async (tx) => {
      const category = await tx.category.findUnique({
        where: { category_id: id },
      });
      if (!category) {
        throw new Error("Category not found");
      }
      return category;
    });
  }

  async getCategories(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.parent_id) {
        where.parent_id = parseInt(filters.parent_id);
      }

      return await tx.category.findMany({
        where,
      });
    });
  }

  async updateCategory(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingCategory = await tx.category.findUnique({
        where: { category_id: id },
      });
      if (!existingCategory) {
        throw new Error("Category not found");
      }

      return await tx.category.update({
        where: { category_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteCategory(id) {
    return await prisma.$transaction(async (tx) => {
      const existingCategory = await tx.category.findUnique({
        where: { category_id: id },
      });
      if (!existingCategory) {
        throw new Error("Category not found");
      }

      return await tx.category.delete({
        where: { category_id: id },
      });
    });
  }
}

module.exports = { CategoryService };

