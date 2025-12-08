const prisma = require("../db/prisma");

class PostalRegionService {
  async createPostalRegion(data) {
    return await prisma.$transaction(async (tx) => {
      const existingPostalRegion = await tx.postalRegion.findUnique({
        where: { postal_code: data.postal_code },
      });
      if (existingPostalRegion) {
        throw new Error("Postal code already exists");
      }

      return await tx.postalRegion.create({
        data: {
          postal_code: data.postal_code,
          city: data.city,
          country: data.country,
        },
      });
    });
  }

  async getPostalRegionById(id) {
    return await prisma.$transaction(async (tx) => {
      const postalRegion = await tx.postalRegion.findUnique({
        where: { postal_code: id },
      });
      if (!postalRegion) {
        throw new Error("Postal region not found");
      }
      return postalRegion;
    });
  }

  async getPostalRegions(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.city) {
        where.city = filters.city;
      }

      if (filters?.country) {
        where.country = filters.country;
      }

      return await tx.postalRegion.findMany({
        where,
      });
    });
  }

  async updatePostalRegion(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingPostalRegion = await tx.postalRegion.findUnique({
        where: { postal_code: id },
      });
      if (!existingPostalRegion) {
        throw new Error("Postal region not found");
      }

      return await tx.postalRegion.update({
        where: { postal_code: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deletePostalRegion(id) {
    return await prisma.$transaction(async (tx) => {
      const existingPostalRegion = await tx.postalRegion.findUnique({
        where: { postal_code: id },
      });
      if (!existingPostalRegion) {
        throw new Error("Postal region not found");
      }

      return await tx.postalRegion.delete({
        where: { postal_code: id },
      });
    });
  }
}

module.exports = { PostalRegionService };

