const { ReviewService } = require("../services/review.service");
const reviewSchemas = require("../schemas/review.schemas.json");

async function reviewRoutes(fastify) {
  const reviewService = new ReviewService();

  fastify.post(
    "/reviews",
    {
      schema: {
        body: reviewSchemas.createReview,
      },
    },
    async (request, reply) => {
      try {
        const review = await reviewService.createReview(request.body);
        return reply.code(201).send(review);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/reviews/:id",
    {
      schema: {
        params: reviewSchemas.getReviewParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const review = await reviewService.getReviewById(id);
        return reply.send(review);
      } catch (error) {
        const statusCode = error.message === "Review not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.get(
    "/reviews",
    {
      schema: {
        querystring: reviewSchemas.getReviewsQuery,
      },
    },
    async (request, reply) => {
      try {
        const filters = {};

        if (request.query.user_id) {
          filters.user_id = request.query.user_id;
        }

        if (request.query.product_id) {
          filters.product_id = request.query.product_id;
        }

        if (request.query.is_approved !== undefined) {
          filters.is_approved = request.query.is_approved;
        }

        const reviews = await reviewService.getReviews(filters);
        return reply.send(reviews);
      } catch (error) {
        return reply.code(400).send({ error: error.message });
      }
    }
  );

  fastify.put(
    "/reviews/:id",
    {
      schema: {
        params: reviewSchemas.getReviewParams,
        body: reviewSchemas.updateReview,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        const review = await reviewService.updateReview(id, request.body);
        return reply.send(review);
      } catch (error) {
        const statusCode = error.message === "Review not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );

  fastify.delete(
    "/reviews/:id",
    {
      schema: {
        params: reviewSchemas.deleteReviewParams,
      },
    },
    async (request, reply) => {
      try {
        const id = parseInt(request.params.id);
        await reviewService.deleteReview(id);
        return reply.code(204).send();
      } catch (error) {
        const statusCode = error.message === "Review not found" ? 404 : 400;
        return reply.code(statusCode).send({ error: error.message });
      }
    }
  );
}

module.exports = { reviewRoutes };

