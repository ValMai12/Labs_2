const { PrismaClient } = require("../../generated");

const prisma = new PrismaClient();

class UserService {
  async createUser(data) {
    return await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findUnique({
        where: { email: data.email },
      });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      return await tx.user.create({
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password_hash: data.password_hash,
          phone: data.phone,
          role: data.role || "customer",
          is_active: data.is_active ?? true,
        },
      });
    });
  }

  async getUserById(id) {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { user_id: id },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    });
  }

  async getUsers(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.role) {
        where.role = filters.role;
      }

      if (filters?.is_active !== undefined) {
        where.is_active = filters.is_active;
      }

      return await tx.user.findMany({
        where,
        orderBy: { created_at: "desc" },
      });
    });
  }

  async updateUser(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findUnique({
        where: { user_id: id },
      });
      if (!existingUser) {
        throw new Error("User not found");
      }

      if (data.email && data.email !== existingUser.email) {
        const emailExists = await tx.user.findUnique({
          where: { email: data.email },
        });
        if (emailExists) {
          throw new Error("Email already in use");
        }
      }

      return await tx.user.update({
        where: { user_id: id },
        data: {
          ...data,
          updated_at: new Date(),
        },
      });
    });
  }

  async deleteUser(id) {
    return await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findUnique({
        where: { user_id: id },
      });
      if (!existingUser) {
        throw new Error("User not found");
      }

      return await tx.user.delete({
        where: { user_id: id },
      });
    });
  }
}

module.exports = { UserService };
