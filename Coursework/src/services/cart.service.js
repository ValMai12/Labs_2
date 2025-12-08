const prisma = require("../db/prisma");

class CartService {
  async createCart(data) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { user_id: data.user_id },
      });
      if (!user) {
        throw new Error("User not found");
      }

      return await tx.cart.create({
        data: {
          user_id: data.user_id,
          is_active: data.is_active ?? true,
        },
      });
    });
  }

  async getCartById(id) {
    const cart = await prisma.cart.findUnique({
      where: { cart_id: id },
    });
    if (!cart) {
      throw new Error("Cart not found");
    }
    return cart;
  }

  async getCarts(filters) {
    const where = {};

    if (filters?.user_id) {
      where.user_id = parseInt(filters.user_id);
    }

    if (filters?.is_active !== undefined) {
      where.is_active = filters.is_active === "true";
    }

    return await prisma.cart.findMany({
      where,
      orderBy: { created_at: "desc" },
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
