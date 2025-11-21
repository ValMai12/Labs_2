SELECT 
    o.order_id, 
    u.first_name, 
    u.last_name, 
    a.city, 
    o.total_amount
FROM "Order" o
JOIN "User" u ON o.user_id = u.user_id
JOIN Address a ON o.address_id = a.address_id;

SELECT 
    p.name, 
    p.stock
FROM Product p
LEFT JOIN Wishlist w ON p.product_id = w.product_id
WHERE w.wishlist_id IS NULL;

SELECT 
    c.name AS category_name, 
    COUNT(p.product_id) AS items_in_category
FROM Product p
RIGHT JOIN Category c ON p.category_id = c.category_id
GROUP BY c.name;
