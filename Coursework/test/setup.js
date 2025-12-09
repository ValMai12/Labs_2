const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.test") });
require("dotenv/config");

if (!process.env.TEST_DATABASE_URL && !process.env.DATABASE_URL) {
  throw new Error(
    "TEST_DATABASE_URL or DATABASE_URL environment variable is not set in .env.test"
  );
}

process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL || process.env.DATABASE_URL;
