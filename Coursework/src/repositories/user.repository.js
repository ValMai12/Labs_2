const { PrismaClient } = require("../../generated");

const prisma = new PrismaClient();

class UserRepository {
  async create(data) {
    return await prisma.user.create({
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
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { user_id: id },
    });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll(filters) {
    const where = {};

    if (filters?.role) {
      where.role = filters.role;
    }

    if (filters?.is_active !== undefined) {
      where.is_active = filters.is_active;
    }

    return await prisma.user.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: { user_id: id },
      data: {
        ...data,
        updated_at: new Date(),
      },
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: { user_id: id },
    });
  }
}

module.exports = { UserRepository };
