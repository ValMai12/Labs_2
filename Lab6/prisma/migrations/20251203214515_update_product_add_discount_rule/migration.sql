/*
  Warnings:

  - You are about to drop the column `discount_percent` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "discount_percent",
ADD COLUMN     "discount_rule_id" INTEGER;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_discount_rule_id_fkey" FOREIGN KEY ("discount_rule_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;
