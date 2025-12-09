const prisma = require("../db/prisma");

class ProductService {
  async createProduct(data) {
    return await prisma.$transaction(async (tx) => {
      if (data.category_id) {
        const category = await tx.category.findUnique({
          where: { category_id: data.category_id },
        });
        if (!category) {
          throw new Error("Category not found");
        }
      }

      if (data.discount_rule_id) {
        const discount = await tx.discountRule.findUnique({
          where: { discount_rule_id: data.discount_rule_id },
        });
        if (!discount) {
          throw new Error("Discount rule not found");
        }
      }

      return await tx.product.create({
        data: {
          category_id: data.category_id,
          name: data.name,
          description: data.description,
          price: data.price,
          stock: data.stock ?? 0,
          status: data.status || "active",
          image_url: data.image_url,
          discount_rule_id: data.discount_rule_id,
        },
      });
    });
  }

  async getProductById(id) {
    const product = await prisma.product.findUnique({
      where: { product_id: id },
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async getProducts(filters) {
    const where = {};

    if (filters?.category_id) {
      where.category_id = parseInt(filters.category_id);
    }

    if (filters?.status) {
      where.status = filters.status;
    }

    return await prisma.product.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async updateProduct(id, data) {
    return await prisma.$transaction(async (tx) => {
      const existingProduct = await tx.product.findUnique({
        where: { product_id: id },
      });
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      return await tx.product.update({
        where: { product_id: id },
        data: {
          ...data,
          updated_at: new Date(),
        },
      });
    });
  }

  async deleteProduct(id) {
    return await prisma.$transaction(async (tx) => {
      const existingProduct = await tx.product.findUnique({
        where: { product_id: id },
      });
      if (!existingProduct) {
        throw new Error("Product not found");
      }

      return await tx.product.delete({
        where: { product_id: id },
      });
    });
  }

  async getProductsWithCategoryDetails(filters) {
    return await prisma.$transaction(async (tx) => {
      const where = {};

      if (filters?.category_id) {
        where.category_id = parseInt(filters.category_id);
      }

      if (filters?.status) {
        where.status = filters.status;
      }

      if (filters?.min_price) {
        where.price = {
          gte: parseFloat(filters.min_price),
        };
      }

      if (filters?.max_price) {
        where.price = {
          ...where.price,
          lte: parseFloat(filters.max_price),
        };
      }

      if (filters?.min_stock !== undefined) {
        where.stock = {
          ...where.stock,
          gte: parseInt(filters.min_stock),
        };
      }

      const orderBy = {};
      const sortField = filters?.sort_by || "created_at";
      const sortOrder = filters?.sort_order === "asc" ? "asc" : "desc";
      orderBy[sortField] = sortOrder;

      const limit = filters?.limit ? parseInt(filters.limit) : undefined;

      const products = await tx.product.findMany({
        where,
        include: {
          category: {
            select: {
              category_id: true,
              name: true,
              description: true,
            },
          },
        },
        orderBy,
        take: limit,
      });

      return products;
    });
  }

  async getMostSuccessfulProducts(filters) {
    return await prisma.$transaction(async (tx) => {
      const minRevenue = filters?.min_revenue
        ? parseFloat(filters.min_revenue)
        : 0;
      const limit = filters?.limit ? parseInt(filters.limit) : undefined;

      const query = `
        WITH product_stats AS (
          SELECT 
            p.product_id,
            p.name,
            p.price,
            cat.name as category_name,
            COUNT(DISTINCT o.order_id) as order_count,
            SUM(ci.quantity) as total_quantity_sold,
            SUM(ci.quantity * CAST(p.price AS DECIMAL)) as total_revenue,
            AVG(ci.quantity * CAST(p.price AS DECIMAL)) as avg_order_value
          FROM product p
          JOIN category cat ON p.category_id = cat.category_id
          JOIN cartitem ci ON p.product_id = ci.product_id
          JOIN cart c ON ci.cart_id = c.cart_id
          JOIN "Order" o ON c.cart_id = o.cart_id
          WHERE o.status != 'cancelled'
            ${filters?.status ? `AND p.status = '${filters.status}'` : ""}
            ${
              filters?.category_id
                ? `AND p.category_id = ${parseInt(filters.category_id)}`
                : ""
            }
          GROUP BY p.product_id, p.name, p.price, cat.name
          HAVING SUM(ci.quantity * CAST(p.price AS DECIMAL)) >= ${minRevenue}
        )
        SELECT 
          *,
          ROW_NUMBER() OVER (ORDER BY total_revenue DESC) as rank
        FROM product_stats
        ORDER BY total_revenue DESC
        ${limit ? `LIMIT ${limit}` : ""}
      `;

      const results = await tx.$queryRawUnsafe(query);

      return results.map((row) => ({
        product_id: Number(row.product_id),
        name: row.name,
        price: Number(row.price),
        category_name: row.category_name,
        order_count: Number(row.order_count),
        total_quantity_sold: Number(row.total_quantity_sold),
        total_revenue: Number(row.total_revenue),
        avg_order_value: Number(row.avg_order_value),
        rank: Number(row.rank),
      }));
    });
  }
}

module.exports = { ProductService };
