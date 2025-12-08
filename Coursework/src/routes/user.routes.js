const { UserService } = require("../services/user.service");
const userSchemas = require("../schemas/user.schemas.json");
const { getStatusCode } = require("../utils/errorHandler");

async function userRoutes(fastify) {
  const userService = new UserService();

  fastify.post(
    "/users",
    {
      schema: {
        body: userSchemas.createUser,
      },
    },
    async (request, reply) => {
      try {
        const user = await userService.createUser(request.body);
        return reply.code(201).send(user);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/users/:id",
    {
      schema: {
        params: userSchemas.getUserParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const user = await userService.getUserById(id);
        return reply.send(user);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/users",
    {
      schema: {
        querystring: userSchemas.getUsersQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.role) {
          filters.role = request.query.role;
        }

        if (request.query.is_active !== undefined) {
          filters.is_active = request.query.is_active === "true";
        }

        const users = await userService.getUsers(filters);
        return reply.send(users);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/users/:id",
    {
      schema: {
        params: userSchemas.getUserParams,
        body: userSchemas.updateUser,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const user = await userService.updateUser(id, request.body);
        return reply.send(user);
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/users/:id",
    {
      schema: {
        params: userSchemas.deleteUserParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await userService.deleteUser(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = getStatusCode(error);
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { userRoutes };
