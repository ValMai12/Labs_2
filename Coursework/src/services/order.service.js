const prisma = require("../db/prisma");

class OrderService {
  async createOrder(data) {
    return await prisma.$transaction(async (tx) => {
      return await tx.order.create({
        data: {
          user_id: data.user_id,
          address_id: data.address_id,
          cart_id: data.cart_id,
          total_amount: data.total_amount,
          status: data.status || "pending",
          applied_discount_id: data.applied_discount_id,
        },
      });
    });
  }

  async getOrderById(id) {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { order_id: id },
      });
      if (!order) {
        throw new Error("Order not found");
      }
      return order;
    });
  }

  async getOrders(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.user_id) {
        where.user_id = parseInt(filters.user_id);
      }

      if (filters?.status) {
        where.status = filters.status;
      }

      return await tx.order.findMany({
        where,
        orderBy: { created_at: "desc" },
      });
    });
  }

  async updateOrder(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingOrder = await tx.order.findUnique({
        where: { order_id: id },
      });
      if (!existingOrder) {
        throw new Error("Order not found");
      }

      return await tx.order.update({
        where: { order_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deleteOrder(id) {
    return await prisma.$transaction(async (tx) => {
      const existingOrder = await tx.order.findUnique({
        where: { order_id: id },
      });
      if (!existingOrder) {
        throw new Error("Order not found");
      }

      return await tx.order.delete({
        where: { order_id: id },
      });
    });
  }
}

module.exports = { OrderService };
