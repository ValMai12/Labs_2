SELECT 
    c.name AS category_name,
    SUM(ci.quantity * p.price) AS total_category_revenue
FROM Category c
JOIN Product p ON c.category_id = p.category_id
JOIN CartItem ci ON p.product_id = ci.product_id
JOIN Cart cart ON ci.cart_id = cart.cart_id
JOIN "Order" o ON cart.cart_id = o.cart_id
WHERE o.status IN ('paid', 'delivered')
GROUP BY c.name
ORDER BY total_category_revenue DESC;
