const prisma = require("../db/prisma");

class ReviewService {
  async createReview(data) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { user_id: data.user_id },
      });
      if (!user) {
        throw new Error("User not found");
      }

      const product = await tx.product.findUnique({
        where: { product_id: data.product_id },
      });
      if (!product) {
        throw new Error("Product not found");
      }

      return await tx.review.create({
        data: {
          user_id: data.user_id,
          product_id: data.product_id,
          rating: data.rating,
          comment: data.comment,
          is_approved: data.is_approved ?? false,
        },
      });
    });
  }

  async getReviewById(id) {
    const review = await prisma.review.findUnique({
      where: { review_id: id },
    });
    if (!review) {
      throw new Error("Review not found");
    }
    return review;
  }

  async getReviews(filters) {
    const where = {};

    if (filters?.user_id) {
      where.user_id = parseInt(filters.user_id);
    }

    if (filters?.product_id) {
      where.product_id = parseInt(filters.product_id);
    }

    if (filters?.is_approved !== undefined) {
      where.is_approved = filters.is_approved === "true";
    }

    return await prisma.review.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async updateReview(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingReview = await tx.review.findUnique({
        where: { review_id: id },
      });
      if (!existingReview) {
        throw new Error("Review not found");
      }

      return await tx.review.update({
        where: { review_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteReview(id) {
    return await prisma.$transaction(async (tx) => {
      const existingReview = await tx.review.findUnique({
        where: { review_id: id },
      });
      if (!existingReview) {
        throw new Error("Review not found");
      }

      return await tx.review.delete({
        where: { review_id: id },
      });
    });
  }
}

module.exports = { ReviewService };
