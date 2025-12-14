FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache openssl

FROM base AS dependencies

COPY package.json package-lock.json ./

RUN npm ci --only=production && npm cache clean --force

FROM base AS build

COPY package.json package-lock.json ./

RUN npm ci && npm cache clean --force

COPY prisma ./prisma

RUN npx prisma generate

FROM base AS runtime

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=build /app/generated ./generated
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=build /app/node_modules/prisma ./node_modules/prisma
COPY package.json ./
COPY prisma ./prisma
COPY src ./src

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "src/server.js"]

