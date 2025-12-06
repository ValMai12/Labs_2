const { PrismaClient } = require("../../generated");

const prisma = new PrismaClient();

class CartItemService {
  async createCartItem(data) {
    return await prisma.$transaction(async (tx) => {
      return await tx.cartitem.create({
        data: {
          cart_id: data.cart_id,
          product_id: data.product_id,
          quantity: data.quantity,
        },
      });
    });
  }

  async getCartItemById(id) {
    return await prisma.$transaction(async (tx) => {
      const cartItem = await tx.cartitem.findUnique({
        where: { cart_item_id: id },
      });
      if (!cartItem) {
        throw new Error("Cart item not found");
      }
      return cartItem;
    });
  }

  async getCartItems(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.cart_id) {
        where.cart_id = parseInt(filters.cart_id);
      }

      if (filters?.product_id) {
        where.product_id = parseInt(filters.product_id);
      }

      return await tx.cartitem.findMany({
        where,
        orderBy: { added_at: "desc" },
      });
    });
  }

  async updateCartItem(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingCartItem = await tx.cartitem.findUnique({
        where: { cart_item_id: id },
      });
      if (!existingCartItem) {
        throw new Error("Cart item not found");
      }

      return await tx.cartitem.update({
        where: { cart_item_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteCartItem(id) {
    return await prisma.$transaction(async (tx) => {
      const existingCartItem = await tx.cartitem.findUnique({
        where: { cart_item_id: id },
      });
      if (!existingCartItem) {
        throw new Error("Cart item not found");
      }

      return await tx.cartitem.delete({
        where: { cart_item_id: id },
      });
    });
  }
}

module.exports = { CartItemService };

