SELECT 
    p.product_id,
    p.name AS product_name,
    c.name AS category_name,
    p.price,
    p.status
FROM Product p
JOIN Category c ON p.category_id = c.category_id
WHERE p.status = 'active';

SELECT 
    o.order_id,
    o.total_amount,
    o.status,
    o.created_at
FROM "Order" o
JOIN "User" u ON o.user_id = u.user_id
WHERE u.email = 'julia@example.com';

SELECT 
    p.name,
    r.rating,
    r.comment
FROM Product p
JOIN Review r ON p.product_id = r.product_id
WHERE r.is_approved = TRUE;
