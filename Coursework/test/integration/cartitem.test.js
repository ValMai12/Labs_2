const Fastify = require("fastify");
const { cartItemRoutes } = require("../../src/routes/cartitem.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(cartItemRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

async function createTestUser() {
  return await prisma.user.create({
    data: {
      first_name: "Test",
      last_name: "User",
      email: `test${Date.now()}@example.com`,
      password_hash: "hashedpassword",
    },
  });
}

async function createTestCart(userId) {
  return await prisma.cart.create({
    data: {
      user_id: userId,
      is_active: true,
    },
  });
}

async function createTestProduct() {
  return await prisma.product.create({
    data: {
      name: `Test Product ${Date.now()}`,
      price: 99.99,
      stock: 100,
    },
  });
}

describe("Cart Item Integration Tests", () => {
  describe("POST /cart-items", () => {
    test("should create cart item successfully", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/cart-items",
        payload: {
          cart_id: cart.cart_id,
          product_id: product.product_id,
          quantity: 2,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.cart_id).toBe(cart.cart_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.quantity).toBe(2);
      expect(body.cart_item_id).toBeDefined();
    });

    test("should return 404 when cart not found", async () => {
      const product = await createTestProduct();

      const response = await fastify.inject({
        method: "POST",
        url: "/cart-items",
        payload: {
          cart_id: 99999,
          product_id: product.product_id,
          quantity: 1,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart not found");
    });

    test("should return 404 when product not found", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);

      const response = await fastify.inject({
        method: "POST",
        url: "/cart-items",
        payload: {
          cart_id: cart.cart_id,
          product_id: 99999,
          quantity: 1,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Product not found");
    });
  });

  describe("GET /cart-items/:id", () => {
    test("should get cart item by id successfully", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);
      const product = await createTestProduct();

      const cartItem = await prisma.cartitem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: product.product_id,
          quantity: 3,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/cart-items/${cartItem.cart_item_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.cart_item_id).toBe(cartItem.cart_item_id);
      expect(body.cart_id).toBe(cart.cart_id);
      expect(body.product_id).toBe(product.product_id);
      expect(body.quantity).toBe(3);
    });

    test("should return 404 when cart item not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/cart-items/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart item not found");
    });
  });

  describe("GET /cart-items", () => {
    test("should get all cart items", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const cart1 = await createTestCart(user1.user_id);
      const cart2 = await createTestCart(user2.user_id);
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.cartitem.createMany({
        data: [
          {
            cart_id: cart1.cart_id,
            product_id: product1.product_id,
            quantity: 1,
          },
          {
            cart_id: cart2.cart_id,
            product_id: product2.product_id,
            quantity: 2,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/cart-items",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter cart items by cart_id", async () => {
      const user = await createTestUser();
      const cart1 = await createTestCart(user.user_id);
      const cart2 = await createTestCart(user.user_id);
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.cartitem.createMany({
        data: [
          {
            cart_id: cart1.cart_id,
            product_id: product1.product_id,
            quantity: 1,
          },
          {
            cart_id: cart2.cart_id,
            product_id: product2.product_id,
            quantity: 2,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/cart-items?cart_id=${cart1.cart_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].cart_id).toBe(cart1.cart_id);
    });

    test("should filter cart items by product_id", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.cartitem.createMany({
        data: [
          {
            cart_id: cart.cart_id,
            product_id: product1.product_id,
            quantity: 1,
          },
          {
            cart_id: cart.cart_id,
            product_id: product2.product_id,
            quantity: 2,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/cart-items?product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].product_id).toBe(product1.product_id);
    });

    test("should filter cart items by cart_id and product_id", async () => {
      const user = await createTestUser();
      const cart1 = await createTestCart(user.user_id);
      const cart2 = await createTestCart(user.user_id);
      const product1 = await createTestProduct();
      const product2 = await createTestProduct();

      await prisma.cartitem.createMany({
        data: [
          {
            cart_id: cart1.cart_id,
            product_id: product1.product_id,
            quantity: 1,
          },
          {
            cart_id: cart1.cart_id,
            product_id: product2.product_id,
            quantity: 2,
          },
          {
            cart_id: cart2.cart_id,
            product_id: product1.product_id,
            quantity: 3,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/cart-items?cart_id=${cart1.cart_id}&product_id=${product1.product_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].cart_id).toBe(cart1.cart_id);
      expect(body[0].product_id).toBe(product1.product_id);
    });

    test("should return empty array when no cart items match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/cart-items?cart_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /cart-items/:id", () => {
    test("should update cart item quantity successfully", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);
      const product = await createTestProduct();

      const cartItem = await prisma.cartitem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: product.product_id,
          quantity: 1,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/cart-items/${cartItem.cart_item_id}`,
        payload: {
          quantity: 5,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.quantity).toBe(5);
      expect(body.cart_item_id).toBe(cartItem.cart_item_id);
    });

    test("should return 404 when cart item not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/cart-items/99999",
        payload: {
          quantity: 2,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart item not found");
    });
  });

  describe("DELETE /cart-items/:id", () => {
    test("should delete cart item successfully", async () => {
      const user = await createTestUser();
      const cart = await createTestCart(user.user_id);
      const product = await createTestProduct();

      const cartItem = await prisma.cartitem.create({
        data: {
          cart_id: cart.cart_id,
          product_id: product.product_id,
          quantity: 1,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/cart-items/${cartItem.cart_item_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedCartItem = await prisma.cartitem.findUnique({
        where: { cart_item_id: cartItem.cart_item_id },
      });
      expect(deletedCartItem).toBeNull();
    });

    test("should return 404 when cart item not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/cart-items/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Cart item not found");
    });
  });
});

