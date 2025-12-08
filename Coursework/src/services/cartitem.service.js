const prisma = require("../db/prisma");

class CartItemService {
  async createCartItem(data) {
    return await prisma.$transaction(async (tx) => {
      const cart = await tx.cart.findUnique({
        where: { cart_id: data.cart_id },
      });
      if (!cart) {
        throw new Error("Cart not found");
      }

      const product = await tx.product.findUnique({
        where: { product_id: data.product_id },
      });
      if (!product) {
        throw new Error("Product not found");
      }

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
    const cartItem = await prisma.cartitem.findUnique({
      where: { cart_item_id: id },
    });
    if (!cartItem) {
      throw new Error("Cart item not found");
    }
    return cartItem;
  }

  async getCartItems(filters) {
    const where = {};

    if (filters?.cart_id) {
      where.cart_id = parseInt(filters.cart_id);
    }

    if (filters?.product_id) {
      where.product_id = parseInt(filters.product_id);
    }

    return await prisma.cartitem.findMany({
      where,
      orderBy: { added_at: "desc" },
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
