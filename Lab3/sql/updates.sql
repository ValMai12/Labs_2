UPDATE Product
SET price = 24.99, stock = stock - 10, updated_at = CURRENT_TIMESTAMP
WHERE product_id = 1;

UPDATE "User"
SET role = 'manager', updated_at = CURRENT_TIMESTAMP
WHERE email = 'emma.w@example.com';

UPDATE "Order"
SET status = 'shipped', shipped_at = CURRENT_TIMESTAMP
WHERE order_id = 5;
