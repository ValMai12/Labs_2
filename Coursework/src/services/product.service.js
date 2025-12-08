const prisma = require("../db/prisma");

class ProductService {
  async createProduct(data) {
    return await prisma.$transaction(async (tx) => {
      if (data.category_id) {
        const category = await tx.category.findUnique({
          where: { category_id: data.category_id },
        });
        if (!category) {
          throw new Error("Category not found");
        }
      }

      if (data.discount_rule_id) {
        const discount = await tx.discountRule.findUnique({
          where: { discount_rule_id: data.discount_rule_id },
        });
        if (!discount) {
          throw new Error("Discount rule not found");
        }
      }

      return await tx.product.create({
        data: {
          category_id: data.category_id,
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock ?? 0,
          status: data.status || "active",
          image_url: data.image_url,
          discount_rule_id: data.discount_rule_id,
        },
      });
    });
  }

  async getProductById(id) {
    const product = await prisma.product.findUnique({
      where: { product_id: id },
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async getProducts(filters) {
    const where = {};

    if (filters?.category_id) {
      where.category_id = parseInt(filters.category_id);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    return await prisma.product.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async updateProduct(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingProduct = await tx.product.findUnique({
        where: { product_id: id },
      });
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      return await tx.product.update({
        where: { product_id: id },
        data: {
          ...data,
          updated_at: new Date(),
        },
      });
    });
  }

  async deleteProduct(id) {
    return await prisma.$transaction(async (tx) => {
      const existingProduct = await tx.product.findUnique({
        where: { product_id: id },
      });
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      return await tx.product.delete({
        where: { product_id: id },
      });
    });
  }
}

module.exports = { ProductService };
