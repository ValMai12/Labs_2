SELECT 
    u.first_name, 
    u.last_name, 
    o.total_amount
FROM "User" u
JOIN "Order" o ON u.user_id = o.user_id
WHERE o.total_amount > (
    SELECT AVG(total_amount) FROM "Order"
);

SELECT 
    u.email,
    (SELECT MAX(created_at) FROM "Order" WHERE user_id = u.user_id) AS last_order_date
FROM "User" u;

SELECT AVG(total_items) AS avg_items_per_cart
FROM (
    SELECT cart_id, SUM(quantity) AS total_items
    FROM CartItem
    GROUP BY cart_id
) AS cart_stats;
