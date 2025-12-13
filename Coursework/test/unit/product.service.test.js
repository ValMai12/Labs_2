const { ProductService } = require("../../src/services/product.service");
const prisma = require("../../src/db/prisma");

jest.mock("../../src/db/prisma", () => ({
  $transaction: jest.fn(),
  product: {
    findUnique: jest.fn(),
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  category: {
    findUnique: jest.fn(),
  },
  discountRule: {
    findUnique: jest.fn(),
  },
  $queryRawUnsafe: jest.fn(),
}));

describe("ProductService", () => {
  let productService;
  let mockTx;

  beforeEach(() => {
    jest.clearAllMocks();
    productService = new ProductService();
    mockTx = {
      product: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      category: {
        findUnique: jest.fn(),
      },
      discountRule: {
        findUnique: jest.fn(),
      },
      $queryRawUnsafe: jest.fn(),
    };
    prisma.$transaction.mockImplementation((callback) => callback(mockTx));
  });

  describe("createProduct", () => {
    test("should create product successfully", async () => {
      const productData = {
        name: "Test Product",
        price: 99.99,
        stock: 100,
        status: "active",
      };
      const createdProduct = { product_id: 1, ...productData };

      mockTx.product.create.mockResolvedValue(createdProduct);

      const result = await productService.createProduct(productData);

      expect(result).toEqual(createdProduct);
      expect(mockTx.product.create).toHaveBeenCalledWith({
        data: {
          category_id: undefined,
          name: productData.name,
          description: undefined,
          price: productData.price,
          stock: 100,
          status: "active",
          image_url: undefined,
          discount_rule_id: undefined,
        },
      });
    });

    test("should create product with category", async () => {
      const productData = {
        name: "Test Product",
        price: 99.99,
        category_id: 1,
      };
      const category = { category_id: 1, name: "Category" };
      const createdProduct = { product_id: 1, ...productData };

      mockTx.category.findUnique.mockResolvedValue(category);
      mockTx.product.create.mockResolvedValue(createdProduct);

      const result = await productService.createProduct(productData);

      expect(result).toEqual(createdProduct);
      expect(mockTx.category.findUnique).toHaveBeenCalledWith({
        where: { category_id: 1 },
      });
    });

    test("should throw error when category not found", async () => {
      const productData = {
        name: "Test Product",
        price: 99.99,
        category_id: 999,
      };

      mockTx.category.findUnique.mockResolvedValue(null);

      await expect(
        productService.createProduct(productData)
      ).rejects.toThrow("Category not found");
    });

    test("should throw error when discount rule not found", async () => {
      const productData = {
        name: "Test Product",
        price: 99.99,
        discount_rule_id: 999,
      };

      mockTx.discountRule.findUnique.mockResolvedValue(null);

      await expect(
        productService.createProduct(productData)
      ).rejects.toThrow("Discount rule not found");
    });
  });

  describe("getProductById", () => {
    test("should get product by id successfully", async () => {
      const product = {
        product_id: 1,
        name: "Test Product",
        price: 99.99,
      };

      prisma.product.findUnique.mockResolvedValue(product);

      const result = await productService.getProductById(1);

      expect(result).toEqual(product);
      expect(prisma.product.findUnique).toHaveBeenCalledWith({
        where: { product_id: 1 },
      });
    });

    test("should throw error when product not found", async () => {
      prisma.product.findUnique.mockResolvedValue(null);

      await expect(productService.getProductById(999)).rejects.toThrow(
        "Product not found"
      );
    });
  });

  describe("getProducts", () => {
    test("should get all products", async () => {
      const products = [
        { product_id: 1, name: "Product 1" },
        { product_id: 2, name: "Product 2" },
      ];

      prisma.product.findMany.mockResolvedValue(products);

      const result = await productService.getProducts({});

      expect(result).toEqual(products);
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: {},
        orderBy: { created_at: "desc" },
      });
    });

    test("should filter products by category_id", async () => {
      const products = [{ product_id: 1, name: "Product 1" }];

      prisma.product.findMany.mockResolvedValue(products);

      const result = await productService.getProducts({ category_id: "1" });

      expect(result).toEqual(products);
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: { category_id: 1 },
        orderBy: { created_at: "desc" },
      });
    });

    test("should filter products by status", async () => {
      const products = [{ product_id: 1, name: "Product 1" }];

      prisma.product.findMany.mockResolvedValue(products);

      const result = await productService.getProducts({ status: "active" });

      expect(result).toEqual(products);
      expect(prisma.product.findMany).toHaveBeenCalledWith({
        where: { status: "active" },
        orderBy: { created_at: "desc" },
      });
    });
  });

  describe("updateProduct", () => {
    test("should update product successfully", async () => {
      const existingProduct = { product_id: 1, name: "Old Name" };
      const updatedProduct = { product_id: 1, name: "New Name" };

      mockTx.product.findUnique.mockResolvedValue(existingProduct);
      mockTx.product.update.mockResolvedValue(updatedProduct);

      const result = await productService.updateProduct(1, { name: "New Name" });

      expect(result).toEqual(updatedProduct);
      expect(mockTx.product.findUnique).toHaveBeenCalledWith({
        where: { product_id: 1 },
      });
      expect(mockTx.product.update).toHaveBeenCalled();
    });

    test("should throw error when product not found", async () => {
      mockTx.product.findUnique.mockResolvedValue(null);

      await expect(
        productService.updateProduct(999, { name: "New Name" })
      ).rejects.toThrow("Product not found");
    });
  });

  describe("deleteProduct", () => {
    test("should delete product successfully", async () => {
      const product = { product_id: 1, name: "Test Product" };

      mockTx.product.findUnique.mockResolvedValue(product);
      mockTx.product.delete.mockResolvedValue(product);

      const result = await productService.deleteProduct(1);

      expect(result).toEqual(product);
      expect(mockTx.product.delete).toHaveBeenCalledWith({
        where: { product_id: 1 },
      });
    });

    test("should throw error when product not found", async () => {
      mockTx.product.findUnique.mockResolvedValue(null);

      await expect(productService.deleteProduct(999)).rejects.toThrow(
        "Product not found"
      );
    });
  });

  describe("getProductsWithCategoryDetails", () => {
    test("should get products with category details", async () => {
      const products = [
        {
          product_id: 1,
          name: "Product 1",
          category: { category_id: 1, name: "Category 1" },
        },
      ];

      mockTx.product.findMany.mockResolvedValue(products);

      const result = await productService.getProductsWithCategoryDetails({});

      expect(result).toEqual(products);
      expect(mockTx.product.findMany).toHaveBeenCalledWith({
        where: {},
        include: {
          category: {
            select: {
              category_id: true,
              name: true,
              description: true,
            },
          },
        },
        orderBy: { created_at: "desc" },
        take: undefined,
      });
    });

    test("should filter by min_price and max_price", async () => {
      const products = [{ product_id: 1, name: "Product 1" }];

      mockTx.product.findMany.mockResolvedValue(products);

      const result = await productService.getProductsWithCategoryDetails({
        min_price: "10",
        max_price: "100",
      });

      expect(result).toEqual(products);
      expect(mockTx.product.findMany).toHaveBeenCalledWith({
        where: {
          price: {
            gte: 10,
            lte: 100,
          },
        },
        include: expect.any(Object),
        orderBy: { created_at: "desc" },
        take: undefined,
      });
    });

    test("should filter by min_stock", async () => {
      const products = [{ product_id: 1, name: "Product 1" }];

      mockTx.product.findMany.mockResolvedValue(products);

      const result = await productService.getProductsWithCategoryDetails({
        min_stock: "5",
      });

      expect(result).toEqual(products);
      expect(mockTx.product.findMany).toHaveBeenCalledWith({
        where: {
          stock: {
            gte: 5,
          },
        },
        include: expect.any(Object),
        orderBy: { created_at: "desc" },
        take: undefined,
      });
    });

    test("should apply custom sort and limit", async () => {
      const products = [{ product_id: 1, name: "Product 1" }];

      mockTx.product.findMany.mockResolvedValue(products);

      const result = await productService.getProductsWithCategoryDetails({
        sort_by: "price",
        sort_order: "asc",
        limit: "10",
      });

      expect(result).toEqual(products);
      expect(mockTx.product.findMany).toHaveBeenCalledWith({
        where: {},
        include: expect.any(Object),
        orderBy: { price: "asc" },
        take: 10,
      });
    });
  });

  describe("getMostSuccessfulProducts", () => {
    test("should get most successful products", async () => {
      const mockResults = [
        {
          product_id: 1,
          name: "Product 1",
          price: 100,
          category_name: "Category 1",
          order_count: 10,
          total_quantity_sold: 50,
          total_revenue: 5000,
          avg_order_value: 500,
          rank: 1,
        },
      ];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({});

      expect(result).toHaveLength(1);
      expect(result[0].product_id).toBe(1);
      expect(result[0].name).toBe("Product 1");
      expect(result[0].order_count).toBe(10);
      expect(result[0].total_quantity_sold).toBe(50);
      expect(result[0].total_revenue).toBe(5000);
      expect(result[0].rank).toBe(1);
      expect(mockTx.$queryRawUnsafe).toHaveBeenCalled();
    });

    test("should filter by min_revenue", async () => {
      const mockResults = [
        {
          product_id: 1,
          name: "Product 1",
          price: 100,
          category_name: "Category 1",
          order_count: 10,
          total_quantity_sold: 50,
          total_revenue: 5000,
          avg_order_value: 500,
          rank: 1,
        },
      ];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({
        min_revenue: "1000",
      });

      expect(result).toHaveLength(1);
      expect(mockTx.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining("HAVING SUM(ci.quantity * CAST(p.price AS DECIMAL)) >= 1000")
      );
    });

    test("should filter by status", async () => {
      const mockResults = [];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({
        status: "active",
      });

      expect(result).toEqual([]);
      expect(mockTx.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining("AND p.status = 'active'")
      );
    });

    test("should filter by category_id", async () => {
      const mockResults = [];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({
        category_id: "1",
      });

      expect(result).toEqual([]);
      expect(mockTx.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining("AND p.category_id = 1")
      );
    });

    test("should apply limit", async () => {
      const mockResults = [];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({
        limit: "5",
      });

      expect(result).toEqual([]);
      expect(mockTx.$queryRawUnsafe).toHaveBeenCalledWith(
        expect.stringContaining("LIMIT 5")
      );
    });

    test("should map results correctly", async () => {
      const mockResults = [
        {
          product_id: "1",
          name: "Product 1",
          price: "100.00",
          category_name: "Category 1",
          order_count: "10",
          total_quantity_sold: "50",
          total_revenue: "5000.00",
          avg_order_value: "500.00",
          rank: "1",
        },
      ];

      mockTx.$queryRawUnsafe.mockResolvedValue(mockResults);

      const result = await productService.getMostSuccessfulProducts({});

      expect(result[0].product_id).toBe(1);
      expect(result[0].price).toBe(100);
      expect(result[0].order_count).toBe(10);
      expect(result[0].total_quantity_sold).toBe(50);
      expect(result[0].total_revenue).toBe(5000);
      expect(result[0].avg_order_value).toBe(500);
      expect(result[0].rank).toBe(1);
    });
  });
});

