/*
  Warnings:

  - You are about to drop the column `city` on the `address` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `address` table. All the data in the column will be lost.
  - Made the column `postal_code` on table `address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "address" DROP COLUMN "city",
DROP COLUMN "country",
ALTER COLUMN "postal_code" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_postal_code_fkey" FOREIGN KEY ("postal_code") REFERENCES "PostalRegion"("postal_code") ON DELETE RESTRICT ON UPDATE NO ACTION;
