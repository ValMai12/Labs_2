DELETE FROM "User"
WHERE is_active = FALSE;

DELETE FROM Product
WHERE status = 'hidden';

DELETE FROM Review
WHERE is_approved = FALSE;
