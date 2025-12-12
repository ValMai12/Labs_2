const Fastify = require("fastify");
const { userRoutes } = require("../../src/routes/user.routes");
const { getTestPrisma, cleanupDatabase } = require("../helpers/testDb");

let fastify;
let prisma;

beforeAll(async () => {
  prisma = getTestPrisma();
  fastify = Fastify();
  await fastify.register(userRoutes);
  await fastify.ready();
});

afterAll(async () => {
  await fastify.close();
  await prisma.$disconnect();
});

beforeEach(async () => {
  await cleanupDatabase();
});

describe("User Integration Tests", () => {
  describe("POST /users", () => {
    test("should create user successfully with all fields", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/users",
        payload: {
          first_name: "John",
          last_name: "Doe",
          email: `john${Date.now()}@example.com`,
          password_hash: "hashedpassword123",
          phone: "+1234567890",
          role: "admin",
          is_active: true,
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.first_name).toBe("John");
      expect(body.last_name).toBe("Doe");
      expect(body.email).toContain("@example.com");
      expect(body.password_hash).toBe("hashedpassword123");
      expect(body.phone).toBe("+1234567890");
      expect(body.role).toBe("admin");
      expect(body.is_active).toBe(true);
      expect(body.user_id).toBeDefined();
    });

    test("should create user with default role customer", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/users",
        payload: {
          first_name: "Jane",
          last_name: "Smith",
          email: `jane${Date.now()}@example.com`,
          password_hash: "hashedpassword456",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.role).toBe("customer");
    });

    test("should create user with default is_active true", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/users",
        payload: {
          first_name: "Bob",
          last_name: "Johnson",
          email: `bob${Date.now()}@example.com`,
          password_hash: "hashedpassword789",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(true);
    });

    test("should create user without phone", async () => {
      const response = await fastify.inject({
        method: "POST",
        url: "/users",
        payload: {
          first_name: "Alice",
          last_name: "Brown",
          email: `alice${Date.now()}@example.com`,
          password_hash: "hashedpassword000",
        },
      });

      expect(response.statusCode).toBe(201);
      const body = JSON.parse(response.body);
      expect(body.phone).toBeNull();
    });

    test("should create user with different roles", async () => {
      const roles = ["customer", "admin", "manager", "support"];

      for (const role of roles) {
        const response = await fastify.inject({
          method: "POST",
          url: "/users",
          payload: {
            first_name: "Test",
            last_name: "User",
            email: `test${role}${Date.now()}@example.com`,
            password_hash: "hashedpassword",
            role: role,
          },
        });

        expect(response.statusCode).toBe(201);
        const body = JSON.parse(response.body);
        expect(body.role).toBe(role);
      }
    });

    test("should return 400 when email already exists", async () => {
      const email = `duplicate${Date.now()}@example.com`;

      await prisma.user.create({
        data: {
          first_name: "First",
          last_name: "User",
          email: email,
          password_hash: "hashedpassword",
        },
      });

      const response = await fastify.inject({
        method: "POST",
        url: "/users",
        payload: {
          first_name: "Second",
          last_name: "User",
          email: email,
          password_hash: "hashedpassword2",
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User with this email already exists");
    });
  });

  describe("GET /users/:id", () => {
    test("should get user by id successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "John",
          last_name: "Doe",
          email: `john${Date.now()}@example.com`,
          password_hash: "hashedpassword",
          phone: "+1234567890",
          role: "admin",
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "GET",
        url: `/users/${user.user_id}`,
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.user_id).toBe(user.user_id);
      expect(body.first_name).toBe("John");
      expect(body.last_name).toBe("Doe");
      expect(body.email).toBe(user.email);
      expect(body.password_hash).toBe("hashedpassword");
      expect(body.phone).toBe("+1234567890");
      expect(body.role).toBe("admin");
      expect(body.is_active).toBe(true);
    });

    test("should return 404 when user not found", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/users/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });
  });

  describe("GET /users", () => {
    test("should get all users", async () => {
      await prisma.user.createMany({
        data: [
          {
            first_name: "User1",
            last_name: "Test",
            email: `user1${Date.now()}@example.com`,
            password_hash: "hash1",
            role: "customer",
          },
          {
            first_name: "User2",
            last_name: "Test",
            email: `user2${Date.now()}@example.com`,
            password_hash: "hash2",
            role: "admin",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/users",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
    });

    test("should filter users by role", async () => {
      await prisma.user.createMany({
        data: [
          {
            first_name: "Customer",
            last_name: "One",
            email: `customer1${Date.now()}@example.com`,
            password_hash: "hash1",
            role: "customer",
          },
          {
            first_name: "Admin",
            last_name: "One",
            email: `admin1${Date.now()}@example.com`,
            password_hash: "hash2",
            role: "admin",
          },
          {
            first_name: "Customer",
            last_name: "Two",
            email: `customer2${Date.now()}@example.com`,
            password_hash: "hash3",
            role: "customer",
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/users?role=customer",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      body.forEach((user) => {
        expect(user.role).toBe("customer");
      });
    });

    test("should filter users by is_active true", async () => {
      await prisma.user.createMany({
        data: [
          {
            first_name: "Active",
            last_name: "User",
            email: `active${Date.now()}@example.com`,
            password_hash: "hash1",
            is_active: true,
          },
          {
            first_name: "Inactive",
            last_name: "User",
            email: `inactive${Date.now()}@example.com`,
            password_hash: "hash2",
            is_active: false,
          },
          {
            first_name: "Active2",
            last_name: "User",
            email: `active2${Date.now()}@example.com`,
            password_hash: "hash3",
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/users?is_active=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(2);
      body.forEach((user) => {
        expect(user.is_active).toBe(true);
      });
    });

    test("should filter users by is_active false", async () => {
      await prisma.user.createMany({
        data: [
          {
            first_name: "Active",
            last_name: "User",
            email: `active${Date.now()}@example.com`,
            password_hash: "hash1",
            is_active: true,
          },
          {
            first_name: "Inactive",
            last_name: "User",
            email: `inactive${Date.now()}@example.com`,
            password_hash: "hash2",
            is_active: false,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/users?is_active=false",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].is_active).toBe(false);
    });

    test("should filter users by role and is_active", async () => {
      await prisma.user.createMany({
        data: [
          {
            first_name: "Active",
            last_name: "Admin",
            email: `activeadmin${Date.now()}@example.com`,
            password_hash: "hash1",
            role: "admin",
            is_active: true,
          },
          {
            first_name: "Inactive",
            last_name: "Admin",
            email: `inactiveadmin${Date.now()}@example.com`,
            password_hash: "hash2",
            role: "admin",
            is_active: false,
          },
          {
            first_name: "Active",
            last_name: "Customer",
            email: `activecustomer${Date.now()}@example.com`,
            password_hash: "hash3",
            role: "customer",
            is_active: true,
          },
        ],
      });

      const response = await fastify.inject({
        method: "GET",
        url: "/users?role=admin&is_active=true",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(1);
      expect(body[0].role).toBe("admin");
      expect(body[0].is_active).toBe(true);
    });

    test("should return empty array when no users match filters", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/users?role=manager",
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.length).toBe(0);
    });
  });

  describe("PUT /users/:id", () => {
    test("should update user first_name successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Old",
          last_name: "Name",
          email: `old${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          first_name: "New",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.first_name).toBe("New");
      expect(body.last_name).toBe("Name");
    });

    test("should update user last_name successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "First",
          last_name: "Old",
          email: `first${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          last_name: "New",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.first_name).toBe("First");
      expect(body.last_name).toBe("New");
    });

    test("should update user email successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `old${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const newEmail = `new${Date.now()}@example.com`;

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          email: newEmail,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.email).toBe(newEmail);
    });

    test("should update user password_hash successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "oldhash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          password_hash: "newhash",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.password_hash).toBe("newhash");
    });

    test("should update user phone successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          phone: "+9876543210",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.phone).toBe("+9876543210");
    });

    test("should update user role successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
          role: "customer",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          role: "manager",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.role).toBe("manager");
    });

    test("should update user is_active successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
          is_active: true,
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.is_active).toBe(false);
    });

    test("should update multiple fields at once", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Old",
          last_name: "Name",
          email: `old${Date.now()}@example.com`,
          password_hash: "oldhash",
          phone: "+1111111111",
          role: "customer",
          is_active: true,
        },
      });

      const newEmail = `new${Date.now()}@example.com`;

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          first_name: "New",
          last_name: "Surname",
          email: newEmail,
          password_hash: "newhash",
          phone: "+2222222222",
          role: "admin",
          is_active: false,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.first_name).toBe("New");
      expect(body.last_name).toBe("Surname");
      expect(body.email).toBe(newEmail);
      expect(body.password_hash).toBe("newhash");
      expect(body.phone).toBe("+2222222222");
      expect(body.role).toBe("admin");
      expect(body.is_active).toBe(false);
    });

    test("should return 404 when user not found", async () => {
      const response = await fastify.inject({
        method: "PUT",
        url: "/users/99999",
        payload: {
          first_name: "New",
        },
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });

    test("should return 400 when email already in use", async () => {
      const existingUser = await prisma.user.create({
        data: {
          first_name: "Existing",
          last_name: "User",
          email: `existing${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          email: existingUser.email,
        },
      });

      expect(response.statusCode).toBe(400);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("Email already in use");
    });

    test("should allow updating email to same email", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "PUT",
        url: `/users/${user.user_id}`,
        payload: {
          email: user.email,
          first_name: "Updated",
        },
      });

      expect(response.statusCode).toBe(200);
      const body = JSON.parse(response.body);
      expect(body.email).toBe(user.email);
      expect(body.first_name).toBe("Updated");
    });
  });

  describe("DELETE /users/:id", () => {
    test("should delete user successfully", async () => {
      const user = await prisma.user.create({
        data: {
          first_name: "Test",
          last_name: "User",
          email: `test${Date.now()}@example.com`,
          password_hash: "hash",
        },
      });

      const response = await fastify.inject({
        method: "DELETE",
        url: `/users/${user.user_id}`,
      });

      expect(response.statusCode).toBe(204);

      const deletedUser = await prisma.user.findUnique({
        where: { user_id: user.user_id },
      });
      expect(deletedUser).toBeNull();
    });

    test("should return 404 when user not found", async () => {
      const response = await fastify.inject({
        method: "DELETE",
        url: "/users/99999",
      });

      expect(response.statusCode).toBe(404);
      const body = JSON.parse(response.body);
      expect(body.error).toBe("User not found");
    });
  });
});

