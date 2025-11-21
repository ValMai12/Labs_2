SELECT 
    status, 
    COUNT(*) AS product_count
FROM Product
GROUP BY status;
