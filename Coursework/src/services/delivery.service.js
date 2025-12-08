const prisma = require("../db/prisma");

class DeliveryService {
  async createDelivery(data) {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { order_id: data.order_id },
      });
      if (!order) {
        throw new Error("Order not found");
      }

      const existingDelivery = await tx.delivery.findUnique({
        where: { order_id: data.order_id },
      });
      if (existingDelivery) {
        throw new Error("Delivery already exists for this order");
      }

      return await tx.delivery.create({
        data: {
          order_id: data.order_id,
          courier: data.courier,
          tracking_number: data.tracking_number,
          status: data.status || "preparing",
        },
      });
    });
  }

  async getDeliveryById(id) {
    const delivery = await prisma.delivery.findUnique({
      where: { delivery_id: id },
    });
    if (!delivery) {
      throw new Error("Delivery not found");
    }
    return delivery;
  }

  async getDeliveries(filters) {
    const where = {};

    if (filters?.order_id) {
      where.order_id = parseInt(filters.order_id);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    return await prisma.delivery.findMany({
      where,
      orderBy: { updated_at: "desc" },
    });
  }

  async updateDelivery(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingDelivery = await tx.delivery.findUnique({
        where: { delivery_id: id },
      });
      if (!existingDelivery) {
        throw new Error("Delivery not found");
      }

      return await tx.delivery.update({
        where: { delivery_id: id },
        data: {
          ...data,
          updated_at: new Date(),
        },
      });
    });
  }

  async deleteDelivery(id) {
    return await prisma.$transaction(async (tx) => {
      const existingDelivery = await tx.delivery.findUnique({
        where: { delivery_id: id },
      });
      if (!existingDelivery) {
        throw new Error("Delivery not found");
      }

      return await tx.delivery.delete({
        where: { delivery_id: id },
      });
    });
  }
}

module.exports = { DeliveryService };
