const prisma = require("../db/prisma");

class WishlistService {
  async createWishlist(data) {
    return await prisma.$transaction(async (tx) => {
      const existingWishlist = await tx.wishlist.findFirst({
        where: {
          user_id: data.user_id,
          product_id: data.product_id,
        },
      });
      if (existingWishlist) {
        throw new Error("Product already in wishlist");
      }

      return await tx.wishlist.create({
        data: {
          user_id: data.user_id,
          product_id: data.product_id,
        },
      });
    });
  }

  async getWishlistById(id) {
    return await prisma.$transaction(async (tx) => {
      const wishlist = await tx.wishlist.findUnique({
        where: { wishlist_id: id },
      });
      if (!wishlist) {
        throw new Error("Wishlist item not found");
      }
      return wishlist;
    });
  }

  async getWishlists(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.user_id) {
        where.user_id = parseInt(filters.user_id);
      }

      if (filters?.product_id) {
        where.product_id = parseInt(filters.product_id);
      }

      return await tx.wishlist.findMany({
        where,
        orderBy: { added_at: "desc" },
      });
    });
  }

  async deleteWishlist(id) {
    return await prisma.$transaction(async (tx) => {
      const existingWishlist = await tx.wishlist.findUnique({
        where: { wishlist_id: id },
      });
      if (!existingWishlist) {
        throw new Error("Wishlist item not found");
      }

      return await tx.wishlist.delete({
        where: { wishlist_id: id },
      });
    });
  }
}

module.exports = { WishlistService };

