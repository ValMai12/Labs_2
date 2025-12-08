const prisma = require("../db/prisma");

class ProductService {
  async createProduct(data) {
    return await prisma.$transaction(async (tx) => {
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
    return await prisma.$transaction(async (tx) => {
      const product = await tx.product.findUnique({
        where: { product_id: id },
      });
      if (!product) {
        throw new Error("Product not found");
      }
      return product;
    });
  }

  async getProducts(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.category_id) {
        where.category_id = parseInt(filters.category_id);
      }

      if (filters?.status) {
        where.status = filters.status;
      }

      return await tx.product.findMany({
        where,
        orderBy: { created_at: "desc" },
      });
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
