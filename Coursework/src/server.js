const Fastify = require("fastify");
const { userRoutes } = require("./routes/user.routes");

const fastify = Fastify({
  logger: true,
});

fastify.register(userRoutes);

fastify.get("/", async (request, reply) => {
  return "Maievska Valeria IM41";
});

const start = async () => {
  try {
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
    const host = process.env.HOST || "127.0.0.1";

    await fastify.listen({ port, host });
    console.log(`Server listening on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
