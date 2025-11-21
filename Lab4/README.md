# Звіт 6 лабораторна

## 1. Базова агрегація даних

Ця група запитів використовує агрегатні функції для отримання загальних статистичних показників по всій таблиці без поділу на групи.

### Розрахунок загального доходу

**Опис:** Обчислює загальну суму коштів, отриманих від успішних транзакцій.  
**Як працює:** Використовує функцію `SUM` для стовпця суми та фільтрує лише успішні платежі (`status = 'success'`).

```sql
SELECT
    SUM(amount) AS total_revenue
FROM Payment
WHERE status = 'success';
```

## 2. Групування даних та фільтрація груп

Запити цієї групи дозволяють поділити дані за певними ознаками та застосовувати умови до цих сегментів.

### Аналіз стану інвентарю

**Опис:** Підраховує кількість товарів у кожному статусі (активний, немає в наявності, прихований).  
**Як працює:** Групує товари за полем `status` та рахує кількість записів у кожній групі.

```sql
SELECT
    status,
    COUNT(*) AS product_count
FROM Product
GROUP BY status;
```

### Пошук товарів з гарним рейтингом (HAVING)

**Опис:** Знаходить товари з середнім рейтингом вище 3.5.  
**Як працює:** Використовує HAVING для фільтрації результатів після агрегації.

```sql
SELECT
    product_id,
    AVG(rating) AS average_rating,
    COUNT(*) AS review_count
FROM Review
GROUP BY product_id
HAVING AVG(rating) > 3.5;
```

## 3. Об'єднання таблиць (JOIN)

Демонстрація різних способів зв'язування даних із кількох таблиць.

### Деталізація замовлень (INNER JOIN)

**Опис:** Виводить ідентифікатор замовлення, ім'я клієнта та місто доставки.  
**Як працює:** З'єднує таблиці замовлень, користувачів та адрес.

```sql
SELECT
    o.order_id,
    u.first_name,
    u.last_name,
    a.city,
    o.total_amount
FROM "Order" o
JOIN "User" u ON o.user_id = u.user_id
JOIN Address a ON o.address_id = a.address_id;
```

### Виявлення непопулярного товару (LEFT JOIN)

**Опис:** Знаходить товари, які жоден користувач не додав до Wishlist.  
**Як працює:** Якщо у Wishlist немає запису, wishlist_id буде NULL.

```sql
SELECT
    p.name,
    p.stock
FROM Product p
LEFT JOIN Wishlist w ON p.product_id = w.product_id
WHERE w.wishlist_id IS NULL;
```

### Аналіз структури категорій (RIGHT JOIN)

**Опис:** Виводить список усіх категорій і кількість товарів у них, включаючи порожні.  
**Як працює:** `RIGHT JOIN` для відображення всіх категорій.

```sql
SELECT
    c.name AS category_name,
    COUNT(p.product_id) AS items_in_category
FROM Product p
RIGHT JOIN Category c ON p.category_id = c.category_id
GROUP BY c.name;
```

## 4. Складні запити та підзапити (Subqueries)

Використання вкладених запитів для багатотабличного аналізу.

### Дохід у розрізі категорій

**Опис:** Розраховує сумарну вартість проданих товарів для кожної категорії.  
**Як працює:** Об'єднує 5 таблиць і агрегує суму продажів лише по оплачених замовленнях.

```sql
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
```

### Пошук VIP-клієнтів

**Опис:** Знаходить користувачів, які зробили замовлення на суму, вищу за середній чек магазину.

```sql
SELECT
    u.first_name,
    u.last_name,
    o.total_amount
FROM "User" u
JOIN "Order" o ON u.user_id = o.user_id
WHERE o.total_amount > (
    SELECT AVG(total_amount) FROM "Order"
);
```

### Дата останнього замовлення

**Опис:** Виводить дату останнього замовлення кожного користувача.

```sql
SELECT
    u.email,
    (SELECT MAX(created_at) FROM "Order" WHERE user_id = u.user_id) AS last_order_date
FROM "User" u;
```

---
