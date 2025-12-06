const { PrismaClient } = require("../../generated");

const prisma = new PrismaClient();

class CartService {
  async createCart(data) {
    return await prisma.$transaction(async (tx) => {
      return await tx.cart.create({
        data: {
          user_id: data.user_id,
          is_active: data.is_active ?? true,
        },
      });
    });
  }

  async getCartById(id) {
    return await prisma.$transaction(async (tx) => {
      const cart = await tx.cart.findUnique({
        where: { cart_id: id },
      });
      if (!cart) {
        throw new Error("Cart not found");
      }
      return cart;
    });
  }

  async getCarts(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.user_id) {
        where.user_id = parseInt(filters.user_id);
      }

      if (filters?.is_active !== undefined) {
        where.is_active = filters.is_active === "true";
      }

      return await tx.cart.findMany({
        where,
        orderBy: { created_at: "desc" },
      });
    });
  }

  async updateCart(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingCart = await tx.cart.findUnique({
        where: { cart_id: id },
      });
      if (!existingCart) {
        throw new Error("Cart not found");
      }

      return await tx.cart.update({
        where: { cart_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteCart(id) {
    return await prisma.$transaction(async (tx) => {
      const existingCart = await tx.cart.findUnique({
        where: { cart_id: id },
      });
      if (!existingCart) {
        throw new Error("Cart not found");
      }

      return await tx.cart.delete({
        where: { cart_id: id },
      });
    });
  }
}

module.exports = { CartService };

