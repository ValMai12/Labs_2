-- CreateEnum
CREATE TYPE "discount_types" AS ENUM ('percent', 'fixed');

-- CreateTable
CREATE TABLE "DiscountRule" (
    "discount_rule_id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "type" "discount_types" NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("discount_rule_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRule_code_key" ON "DiscountRule"("code");
