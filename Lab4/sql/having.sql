SELECT 
    product_id, 
    AVG(rating) AS average_rating,
    COUNT(*) AS review_count
FROM Review
GROUP BY product_id
HAVING AVG(rating) > 3.5;
