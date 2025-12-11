const Fastify = require("fastify");
const { postalRegionRoutes } = require("../../src/routes/postalregion.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(postalRegionRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

function generatePostalCode() {
  return `PC${Date.now()}${Math.floor(Math.random() * 1000)}`;
}

describe("Postal Region Integration Tests", () => {
  describe("POST /postal-regions", () => {
    test("should create postal region successfully", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/postal-regions",
        payload: {
          postal_code: generatePostalCode(),
          city: "Kyiv",
          country: "Ukraine",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.city).toBe("Kyiv");
      expect(body.country).toBe("Ukraine");
      expect(body.postal_code).toBeDefined();
    });

    test("should return error when postal code already exists", async () => {
      const postalCode = generatePostalCode();

      await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "City1",
          country: "Country1",
        },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/postal-regions",
        payload: {
          postal_code: postalCode,
          city: "City2",
          country: "Country2",
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal code already exists");
    });
  });

  describe("GET /postal-regions/:id", () => {
    test("should get postal region by id successfully", async () => {
      const postalCode = generatePostalCode();

      const postalRegion = await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "Lviv",
          country: "Ukraine",
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/postal-regions/${postalRegion.postal_code}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.postal_code).toBe(postalRegion.postal_code);
      expect(body.city).toBe("Lviv");
      expect(body.country).toBe("Ukraine");
    });

    test("should return 404 when postal region not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions/INVALID",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal region not found");
    });
  });

  describe("GET /postal-regions", () => {
    test("should get all postal regions", async () => {
      await prisma.postalRegion.createMany({
        data: [
          {
            postal_code: generatePostalCode(),
            city: "City1",
            country: "Country1",
          },
          {
            postal_code: generatePostalCode(),
            city: "City2",
            country: "Country2",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter postal regions by city", async () => {
      await prisma.postalRegion.createMany({
        data: [
          {
            postal_code: generatePostalCode(),
            city: "Kyiv",
            country: "Ukraine",
          },
          {
            postal_code: generatePostalCode(),
            city: "Lviv",
            country: "Ukraine",
          },
          {
            postal_code: generatePostalCode(),
            city: "Kyiv",
            country: "Ukraine",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions?city=Kyiv",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every((pr) => pr.city === "Kyiv")).toBe(true);
    });

    test("should filter postal regions by country", async () => {
      await prisma.postalRegion.createMany({
        data: [
          {
            postal_code: generatePostalCode(),
            city: "Kyiv",
            country: "Ukraine",
          },
          {
            postal_code: generatePostalCode(),
            city: "Warsaw",
            country: "Poland",
          },
          {
            postal_code: generatePostalCode(),
            city: "Lviv",
            country: "Ukraine",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions?country=Ukraine",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      expect(body.every((pr) => pr.country === "Ukraine")).toBe(true);
    });

    test("should filter postal regions by city and country", async () => {
      await prisma.postalRegion.createMany({
        data: [
          {
            postal_code: generatePostalCode(),
            city: "Kyiv",
            country: "Ukraine",
          },
          {
            postal_code: generatePostalCode(),
            city: "Kyiv",
            country: "Poland",
          },
          {
            postal_code: generatePostalCode(),
            city: "Lviv",
            country: "Ukraine",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions?city=Kyiv&country=Ukraine",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].city).toBe("Kyiv");
      expect(body[0].country).toBe("Ukraine");
    });

    test("should return empty array when no postal regions match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/postal-regions?city=Nonexistent",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /postal-regions/:id", () => {
    test("should update postal region city successfully", async () => {
      const postalCode = generatePostalCode();

      const postalRegion = await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "Old City",
          country: "Ukraine",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/postal-regions/${postalRegion.postal_code}`,
        payload: {
          city: "New City",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.city).toBe("New City");
      expect(body.country).toBe("Ukraine");
    });

    test("should update postal region country successfully", async () => {
      const postalCode = generatePostalCode();

      const postalRegion = await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "Kyiv",
          country: "Ukraine",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/postal-regions/${postalRegion.postal_code}`,
        payload: {
          country: "Poland",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.country).toBe("Poland");
      expect(body.city).toBe("Kyiv");
    });

    test("should update multiple fields at once", async () => {
      const postalCode = generatePostalCode();

      const postalRegion = await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "Old City",
          country: "Old Country",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/postal-regions/${postalRegion.postal_code}`,
        payload: {
          city: "New City",
          country: "New Country",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.city).toBe("New City");
      expect(body.country).toBe("New Country");
    });

    test("should return 404 when postal region not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/postal-regions/INVALID",
        payload: {
          city: "New City",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal region not found");
    });
  });

  describe("DELETE /postal-regions/:id", () => {
    test("should delete postal region successfully", async () => {
      const postalCode = generatePostalCode();

      const postalRegion = await prisma.postalRegion.create({
        data: {
          postal_code: postalCode,
          city: "Kyiv",
          country: "Ukraine",
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/postal-regions/${postalRegion.postal_code}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedRegion = await prisma.postalRegion.findUnique({
        where: { postal_code: postalRegion.postal_code },
      });
      expect(deletedRegion).toBeNull();
    });

    test("should return 404 when postal region not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/postal-regions/INVALID",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Postal region not found");
    });
  });
});

