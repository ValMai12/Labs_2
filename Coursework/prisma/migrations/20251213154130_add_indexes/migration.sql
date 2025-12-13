-- CreateEnum
CREATE TYPE "delivery_statuses" AS ENUM ('preparing', 'in_transit', 'delivered', 'returned');

-- CreateEnum
CREATE TYPE "discount_types" AS ENUM ('percent', 'fixed');

-- CreateEnum
CREATE TYPE "methods" AS ENUM ('card', 'paypal', 'cash_on_delivery');

-- CreateEnum
CREATE TYPE "order_statuses" AS ENUM ('pending', 'paid', 'shipped', 'delivered', 'cancelled');

-- CreateEnum
CREATE TYPE "payment_statuses" AS ENUM ('pending', 'success', 'failed', 'refunded');

-- CreateEnum
CREATE TYPE "product_statuses" AS ENUM ('active', 'hidden', 'out_of_stock');

-- CreateEnum
CREATE TYPE "rols" AS ENUM ('customer', 'admin', 'manager', 'support');

-- CreateEnum
CREATE TYPE "types" AS ENUM ('percent', 'fixed');

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

-- CreateTable
CREATE TABLE "Order" (
    "order_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "address_id" INTEGER,
    "cart_id" INTEGER,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "status" "order_statuses" DEFAULT 'pending',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "shipped_at" TIMESTAMP(6),
    "delivered_at" TIMESTAMP(6),
    "applied_discount_id" INTEGER,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "PostalRegion" (
    "postal_code" VARCHAR(20) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "country" VARCHAR(50) NOT NULL,

    CONSTRAINT "PostalRegion_pkey" PRIMARY KEY ("postal_code")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20),
    "role" "rols" DEFAULT 'customer',
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "address" (
    "address_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "postal_code" VARCHAR(20) NOT NULL,
    "is_default" BOOLEAN DEFAULT false,

    CONSTRAINT "address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cart_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "cartitem" (
    "cart_item_id" SERIAL NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "added_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cartitem_pkey" PRIMARY KEY ("cart_item_id")
);

-- CreateTable
CREATE TABLE "category" (
    "category_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255),
    "parent_id" INTEGER,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "delivery" (
    "delivery_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "courier" VARCHAR(50),
    "tracking_number" VARCHAR(100),
    "status" "delivery_statuses" DEFAULT 'preparing',
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("delivery_id")
);

-- CreateTable
CREATE TABLE "payment" (
    "payment_id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "method" "methods" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "payment_statuses" DEFAULT 'pending',
    "transaction_id" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "product" (
    "product_id" SERIAL NOT NULL,
    "category_id" INTEGER,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "price" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER DEFAULT 0,
    "status" "product_statuses" DEFAULT 'active',
    "image_url" VARCHAR(255),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "discount_rule_id" INTEGER,

    CONSTRAINT "product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "review" (
    "review_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "rating" INTEGER,
    "comment" VARCHAR(500),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "is_approved" BOOLEAN DEFAULT false,

    CONSTRAINT "review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "wishlist" (
    "wishlist_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "added_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "wishlist_pkey" PRIMARY KEY ("wishlist_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRule_code_key" ON "DiscountRule"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "delivery_order_id_key" ON "delivery"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "wishlist_user_id_product_id_key" ON "wishlist"("user_id", "product_id");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("address_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_applied_discount_id_fkey" FOREIGN KEY ("applied_discount_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_postal_code_fkey" FOREIGN KEY ("postal_code") REFERENCES "PostalRegion"("postal_code") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cartitem" ADD CONSTRAINT "cartitem_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cartitem" ADD CONSTRAINT "cartitem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "category"("category_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_discount_rule_id_fkey" FOREIGN KEY ("discount_rule_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wishlist" ADD CONSTRAINT "wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;
