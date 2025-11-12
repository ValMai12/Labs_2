INSERT INTO "User" (first_name, last_name, email, password_hash, phone, role)
VALUES
('Alice', 'Brown', 'alice@example.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', '+380991111111', 'customer'),
('Bob', 'Smith', 'bob@example.com', 'a3f1b87c5e6a4128c9e92f740a41c067f18e9b76a1f9d6d8f64dba1cfa6232a9', '+380992222222', 'customer'),
('Charlie', 'Davis', 'charlie@example.com', 'd7b0a3c6e8f9a24e5b6e9c704dc73f1a9e2b7b6f54a9d2e36f91a4d3c29f5a18', '+380993333333', 'customer'),
('Diana', 'Evans', 'diana@example.com', 'c19b8f70a3a44b45d6762b53a3124b7a1c7a2d3e6b3c8f8e2d9c6a8a0c4b5f79', '+380994444444', 'customer'),
('Ethan', 'Ford', 'ethan@example.com', '4f8b9e1a7c5d3f6a2b9e7c8a0f2b6c4d1a9e5f7d2b3c4a8f6e7b2c9a1d0e8b7', '+380995555555', 'customer'),
('Fiona', 'Green', 'fiona@example.com', 'bd2f4c9a6b8e7a1f0c3d5e6b2a9f4b7c1d8e5a3f6c2b9d7a0e4f1b6c8d9a2e5', '+380996666666', 'manager'),
('George', 'Hall', 'george@example.com', '9e1f6a3b7c4d2e8a9f0b1c6d3a7e5b9c8f4d2a1b7e6c3f9d0a2b5c8e7f4a1d3', '+380997777777', 'admin'),
('Hannah', 'Iverson', 'hannah@example.com', 'f4b7a2d8e9c6f3a1b5d7c4e0a9f8b2d1c3e7a4b6f0d9c8e2a5b1f7d3c9a0e4', '+380998888888', 'support'),
('Ian', 'Jones', 'ian@example.com', '1a9f8b7c6d5e4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9', '+380999999999', 'customer'),
('Julia', 'King', 'julia@example.com', 'e8b3a9c7d6f2e4a1b5c8d9f0a2b7c3e5d4a6b9c8f1e0d2a7b5c4e9f3d1a0b8', '+380990000000', 'customer');


INSERT INTO Address (user_id, country, city, street, postal_code, is_default)
VALUES
(1, 'Ukraine', 'Kyiv', 'Shevchenka 10', '01001', TRUE),
(2, 'Ukraine', 'Lviv', 'Bandery 15', '79000', TRUE),
(3, 'Ukraine', 'Odesa', 'Deribasivska 1', '65000', TRUE),
(4, 'Ukraine', 'Dnipro', 'Centralna 20', '49000', TRUE),
(5, 'Ukraine', 'Kharkiv', 'Sumska 5', '61000', TRUE),
(6, 'Ukraine', 'Kyiv', 'Khreshchatyk 25', '01002', TRUE),
(7, 'Ukraine', 'Lviv', 'Horodotska 30', '79005', TRUE),
(8, 'Ukraine', 'Odesa', 'Fontanska 12', '65009', TRUE),
(9, 'Ukraine', 'Kyiv', 'Pecherska 8', '01011', TRUE),
(10, 'Ukraine', 'Lutsk', 'Voli 22', '43000', TRUE);

INSERT INTO Category (name, description, parent_id)
VALUES
('Electronics', 'Devices and gadgets', NULL),
('Phones', 'Smartphones and accessories', 1),
('Laptops', 'Portable computers', 1),
('Accessories', 'Small items for devices', 1),
('Home Appliances', 'Equipment for home', NULL),
('Kitchen', 'Kitchen electronics', 5),
('TV & Audio', 'TVs and sound systems', 1),
('Gaming', 'Consoles and games', 1),
('Books', 'Printed and digital books', NULL),
('Clothing', 'Men and women apparel', NULL);

INSERT INTO Product (category_id, name, description, price, discount_percent, stock, status, image_url)
VALUES
(2, 'iPhone 14', 'Latest Apple smartphone', 999.99, 5, 50, 'active', 'img/iphone14.png'),
(2, 'Samsung Galaxy S23', 'Flagship Samsung phone', 899.50, 10, 70, 'active', 'img/s23.png'),
(3, 'MacBook Air M2', 'Lightweight Apple laptop', 1299.00, 7, 30, 'active', 'img/macbook.png'),
(3, 'Dell XPS 13', 'Powerful ultrabook', 1199.00, 5, 25, 'active', 'img/dellxps.png'),
(4, 'Wireless Mouse', 'Ergonomic mouse', 29.99, 15, 200, 'active', 'img/mouse.png'),
(6, 'Blender Pro', 'High-speed kitchen blender', 89.99, 20, 40, 'active', 'img/blender.png'),
(7, 'Samsung 4K TV', '65-inch Smart TV', 1599.00, 10, 15, 'active', 'img/tv.png'),
(8, 'PlayStation 5', 'Next-gen gaming console', 699.00, 0, 10, 'active', 'img/ps5.png'),
(9, 'Harry Potter Set', 'Complete 7-book collection', 99.00, 25, 60, 'active', 'img/hp.png'),
(10, 'Leather Jacket', 'Men’s stylish jacket', 149.00, 30, 80, 'active', 'img/jacket.png');

INSERT INTO Cart (user_id, is_active)
VALUES
(1, TRUE),
(2, TRUE),
(3, TRUE),
(4, TRUE),
(5, TRUE),
(6, TRUE),
(7, TRUE),
(8, TRUE),
(9, TRUE),
(10, TRUE);

INSERT INTO CartItem (cart_id, product_id, quantity)
VALUES
(1, 1, 1),
(1, 5, 2),
(2, 2, 1),
(3, 3, 1),
(4, 6, 1),
(5, 7, 1),
(6, 8, 1),
(7, 9, 2),
(8, 4, 1),
(9, 10, 1);

INSERT INTO "Order" (user_id, address_id, cart_id, total_amount, status)
VALUES
(1, 1, 1, 1059.97, 'paid'),
(2, 2, 2, 899.50, 'shipped'),
(3, 3, 3, 1299.00, 'pending'),
(4, 4, 4, 89.99, 'delivered'),
(5, 5, 5, 1599.00, 'paid'),
(6, 6, 6, 699.00, 'pending'),
(7, 7, 7, 198.00, 'paid'),
(8, 8, 8, 1199.00, 'cancelled'),
(9, 9, 9, 149.00, 'pending'),
(10, 10, 10, 99.00, 'paid');

INSERT INTO Payment (order_id, method, amount, status, transaction_id)
VALUES
(1, 'card', 1059.97, 'success', 'TX1001'),
(2, 'paypal', 899.50, 'success', 'TX1002'),
(3, 'card', 1299.00, 'pending', 'TX1003'),
(4, 'cash_on_delivery', 89.99, 'success', 'TX1004'),
(5, 'card', 1599.00, 'success', 'TX1005'),
(6, 'paypal', 699.00, 'pending', 'TX1006'),
(7, 'card', 198.00, 'success', 'TX1007'),
(8, 'card', 1199.00, 'failed', 'TX1008'),
(9, 'card', 149.00, 'pending', 'TX1009'),
(10, 'cash_on_delivery', 99.00, 'success', 'TX1010');

INSERT INTO Delivery (order_id, courier, tracking_number, status)
VALUES
(1, 'Nova Poshta', 'NP001', 'in_transit'),
(2, 'UkrPoshta', 'UP002', 'delivered'),
(3, 'Nova Poshta', 'NP003', 'preparing'),
(4, 'UkrPoshta', 'UP004', 'delivered'),
(5, 'DHL', 'DHL005', 'in_transit'),
(6, 'Nova Poshta', 'NP006', 'preparing'),
(7, 'UkrPoshta', 'UP007', 'delivered'),
(8, 'Nova Poshta', 'NP008', 'returned'),
(9, 'DHL', 'DHL009', 'preparing'),
(10, 'Nova Poshta', 'NP010', 'in_transit');

INSERT INTO Review (user_id, product_id, rating, comment, is_approved)
VALUES
(1, 1, 5, 'Excellent phone!', TRUE),
(2, 2, 4, 'Good but expensive', TRUE),
(3, 3, 5, 'Perfect for work', TRUE),
(4, 4, 4, 'Solid laptop', TRUE),
(5, 5, 5, 'Great mouse', TRUE),
(6, 6, 4, 'Very useful', TRUE),
(7, 7, 5, 'Amazing picture quality', TRUE),
(8, 8, 5, 'Best console ever', TRUE),
(9, 9, 5, 'Magical series', TRUE),
(10, 10, 4, 'Nice jacket', TRUE);

INSERT INTO Wishlist (user_id, product_id)
VALUES
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 1);

INSERT INTO Discount (code, type, value, valid_from, valid_to, is_active, product_id, order_id)
VALUES
('DISC5', 'percent', 5, '2025-01-01', '2025-12-31', TRUE, 1, 1),
('DISC10', 'percent', 10, '2025-01-01', '2025-12-31', TRUE, 2, 2),
('SPRING20', 'percent', 20, '2025-03-01', '2025-06-01', TRUE, 6, 4),
('FREESHIP', 'fixed', 50, '2025-01-01', '2025-12-31', TRUE, NULL, 5),
('SUMMER25', 'percent', 25, '2025-06-01', '2025-09-01', FALSE, 9, NULL),
('AUTUMN15', 'percent', 15, '2025-09-01', '2025-11-01', TRUE, 10, NULL),
('WELCOME', 'fixed', 100, '2025-01-01', '2025-12-31', TRUE, 3, 3),
('VIP50', 'percent', 50, '2025-01-01', '2026-01-01', TRUE, 8, 6),
('BLACKFRIDAY', 'percent', 40, '2025-11-20', '2025-11-30', TRUE, 7, 7),
('NEWYEAR', 'percent', 30, '2025-12-25', '2026-01-05', TRUE, 5, 10);
