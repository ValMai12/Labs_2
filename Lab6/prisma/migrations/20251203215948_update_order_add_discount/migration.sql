-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "applied_discount_id" INTEGER,
ALTER COLUMN "address_id" DROP NOT NULL,
ALTER COLUMN "cart_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_applied_discount_id_fkey" FOREIGN KEY ("applied_discount_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;
