-- CreateTable
CREATE TABLE "PostalRegion" (
    "postal_code" VARCHAR(20) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "country" VARCHAR(50) NOT NULL,

    CONSTRAINT "PostalRegion_pkey" PRIMARY KEY ("postal_code")
);
