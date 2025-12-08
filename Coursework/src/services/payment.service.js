const prisma = require("../db/prisma");

class PaymentService {
  async createPayment(data) {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUnique({
        where: { order_id: data.order_id },
      });
      if (!order) {
        throw new Error("Order not found");
      }

      return await tx.payment.create({
        data: {
          order_id: data.order_id,
          method: data.method,
          amount: data.amount,
          status: data.status || "pending",
          transaction_id: data.transaction_id,
        },
      });
    });
  }

  async getPaymentById(id) {
    const payment = await prisma.payment.findUnique({
      where: { payment_id: id },
    });
    if (!payment) {
      throw new Error("Payment not found");
    }
    return payment;
  }

  async getPayments(filters) {
    const where = {};

    if (filters?.order_id) {
      where.order_id = parseInt(filters.order_id);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.method) {
      where.method = filters.method;
    }

    return await prisma.payment.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async updatePayment(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingPayment = await tx.payment.findUnique({
        where: { payment_id: id },
      });
      if (!existingPayment) {
        throw new Error("Payment not found");
      }

      return await tx.payment.update({
        where: { payment_id: id },
        data: {
          ...data,
        },
      });
    });
  }

  async deletePayment(id) {
    return await prisma.$transaction(async (tx) => {
      const existingPayment = await tx.payment.findUnique({
        where: { payment_id: id },
      });
      if (!existingPayment) {
        throw new Error("Payment not found");
      }

      return await tx.payment.delete({
        where: { payment_id: id },
      });
    });
  }
}

module.exports = { PaymentService };
