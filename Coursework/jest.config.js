module.exports = {
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/server.js", "!src/db/**"],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
  testTimeout: 30000,
};
