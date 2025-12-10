const Fastify = require("fastify");
const { addressRoutes } = require("../../src/routes/address.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(addressRoutes);
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

async function createTestPostalRegion() {
  return await prisma.postalRegion.create({
    data: {
      postal_code: `PC${Date.now()}`,
      city: "Test City",
      country: "Test Country",
    },
  });
}

describe("Address Integration Tests", () => {
  describe("POST /addresses", () => {
    test("should create address successfully", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const response = await fastify.inject({
        method: "POST",
        url: "/addresses",
        payload: {
          user_id: user.user_id,
          street: "123 Test Street",
          postal_code: postalRegion.postal_code,
          is_default: true,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.street).toBe("123 Test Street");
      expect(body.postal_code).toBe(postalRegion.postal_code);
      expect(body.user_id).toBe(user.user_id);
      expect(body.is_default).toBe(true);
    });

    test("should return 404 when user not found", async () => {
      const postalRegion = await createTestPostalRegion();

      const response = await fastify.inject({
        method: "POST",
        url: "/addresses",
        payload: {
          user_id: 99999,
          street: "123 Test Street",
          postal_code: postalRegion.postal_code,
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });

    test("should return 404 when postal region not found", async () => {
      const user = await createTestUser();

      const response = await fastify.inject({
        method: "POST",
        url: "/addresses",
        payload: {
          user_id: user.user_id,
          street: "123 Test Street",
          postal_code: "INVALID",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal region not found");
    });

    test("should create address with default is_default false", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const response = await fastify.inject({
        method: "POST",
        url: "/addresses",
        payload: {
          user_id: user.user_id,
          street: "123 Test Street",
          postal_code: postalRegion.postal_code,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_default).toBe(false);
    });
  });

  describe("GET /addresses/:id", () => {
    test("should get address by id successfully", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const address = await prisma.address.create({
        data: {
          user_id: user.user_id,
          street: "123 Test Street",
          postal_code: postalRegion.postal_code,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/addresses/${address.address_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.address_id).toBe(address.address_id);
      expect(body.street).toBe("123 Test Street");
    });

    test("should return 404 when address not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/addresses/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Address not found");
    });
  });

  describe("GET /addresses", () => {
    test("should get all addresses", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      await prisma.address.createMany({
        data: [
          {
            user_id: user1.user_id,
            street: "Street 1",
            postal_code: postalRegion.postal_code,
          },
          {
            user_id: user2.user_id,
            street: "Street 2",
            postal_code: postalRegion.postal_code,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/addresses",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter addresses by user_id", async () => {
      const user1 = await createTestUser();
      const user2 = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      await prisma.address.createMany({
        data: [
          {
            user_id: user1.user_id,
            street: "Street 1",
            postal_code: postalRegion.postal_code,
          },
          {
            user_id: user2.user_id,
            street: "Street 2",
            postal_code: postalRegion.postal_code,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/addresses?user_id=${user1.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].user_id).toBe(user1.user_id);
    });

    test("should filter addresses by is_default", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      await prisma.address.createMany({
        data: [
          {
            user_id: user.user_id,
            street: "Default Street",
            postal_code: postalRegion.postal_code,
            is_default: true,
          },
          {
            user_id: user.user_id,
            street: "Non-default Street",
            postal_code: postalRegion.postal_code,
            is_default: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/addresses?is_default=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_default).toBe(true);
    });

    test("should return empty array when no addresses match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/addresses?user_id=99999",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /addresses/:id", () => {
    test("should update address successfully", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const address = await prisma.address.create({
        data: {
          user_id: user.user_id,
          street: "Old Street",
          postal_code: postalRegion.postal_code,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/addresses/${address.address_id}`,
        payload: {
          street: "New Street",
          is_default: true,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.street).toBe("New Street");
      expect(body.is_default).toBe(true);
    });

    test("should update postal_code when valid", async () => {
      const user = await createTestUser();
      const postalRegion1 = await createTestPostalRegion();
      const postalRegion2 = await createTestPostalRegion();

      const address = await prisma.address.create({
        data: {
          user_id: user.user_id,
          street: "Test Street",
          postal_code: postalRegion1.postal_code,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/addresses/${address.address_id}`,
        payload: {
          postal_code: postalRegion2.postal_code,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.postal_code).toBe(postalRegion2.postal_code);
    });

    test("should return 404 when address not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/addresses/99999",
        payload: {
          street: "New Street",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Address not found");
    });

    test("should return 404 when postal_code not found", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const address = await prisma.address.create({
        data: {
          user_id: user.user_id,
          street: "Test Street",
          postal_code: postalRegion.postal_code,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/addresses/${address.address_id}`,
        payload: {
          postal_code: "INVALID",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal region not found");
    });
  });

  describe("DELETE /addresses/:id", () => {
    test("should delete address successfully", async () => {
      const user = await createTestUser();
      const postalRegion = await createTestPostalRegion();

      const address = await prisma.address.create({
        data: {
          user_id: user.user_id,
          street: "Test Street",
          postal_code: postalRegion.postal_code,
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/addresses/${address.address_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedAddress = await prisma.address.findUnique({
        where: { address_id: address.address_id },
      });
      expect(deletedAddress).toBeNull();
    });

    test("should return 404 when address not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/addresses/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Address not found");
    });
  });
});
