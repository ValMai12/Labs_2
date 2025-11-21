SELECT 
    SUM(amount) AS total_revenue
FROM Payment
WHERE status = 'success';
