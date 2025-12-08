const prisma = require("../db/prisma");

class AddressService {
  async createAddress(data) {
    return await prisma.$transaction(async (tx) => {
      return await tx.address.create({
        data: {
          user_id: data.user_id,
          street: data.street,
          postal_code: data.postal_code,
          is_default: data.is_default ?? false,
        },
      });
    });
  }

  async getAddressById(id) {
    return await prisma.$transaction(async (tx) => {
      const address = await tx.address.findUnique({
        where: { address_id: id },
      });
      if (!address) {
        throw new Error("Address not found");
      }
      return address;
    });
  }

  async getAddresses(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.user_id) {
        where.user_id = parseInt(filters.user_id);
      }

      if (filters?.is_default !== undefined) {
        where.is_default = filters.is_default === "true";
      }

      return await tx.address.findMany({
        where,
      });
    });
  }

  async updateAddress(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingAddress = await tx.address.findUnique({
        where: { address_id: id },
      });
      if (!existingAddress) {
        throw new Error("Address not found");
      }

      return await tx.address.update({
        where: { address_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteAddress(id) {
    return await prisma.$transaction(async (tx) => {
      const existingAddress = await tx.address.findUnique({
        where: { address_id: id },
      });
      if (!existingAddress) {
        throw new Error("Address not found");
      }

      return await tx.address.delete({
        where: { address_id: id },
      });
    });
  }
}

module.exports = { AddressService };

