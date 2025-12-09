const { PrismaClient } = require("../../generated");

let testPrisma = null;

function getTestPrisma() {
  if (!testPrisma) {
    testPrisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.TEST_DATABASE_URL || process.env.DATABASE_URL,
        },
      },
    });
  }
  return testPrisma;
}

async function cleanupDatabase() {
  const prisma = getTestPrisma();
  
  await prisma.$transaction(async (tx) => {
    await tx.$executeRawUnsafe(`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE product RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE category RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE cart RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE cartitem RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE address RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE delivery RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE payment RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE wishlist RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE review RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE "DiscountRule" RESTART IDENTITY CASCADE`);
    await tx.$executeRawUnsafe(`TRUNCATE TABLE "PostalRegion" RESTART IDENTITY CASCADE`);
  });
}

async function disconnectTestDatabase() {
  if (testPrisma) {
    await testPrisma.$disconnect();
    testPrisma = null;
  }
}

module.exports = {
  getTestPrisma,
  cleanupDatabase,
  disconnectTestDatabase,
};
