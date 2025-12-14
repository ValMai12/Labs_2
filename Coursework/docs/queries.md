# Документація складних запитів

## Запит: Найуспішніші продукти

### Бізнес-питання:
Які продукти приносять найбільший дохід та мають найбільшу кількість продажів?

### SQL Запит:
```sql
WITH product_stats AS (
    SELECT 
        p.product_id,
        p.name,
        p.price,
        cat.name as category_name,
        COUNT(DISTINCT o.order_id) as order_count,
        SUM(ci.quantity) as total_quantity_sold,
        SUM(ci.quantity * CAST(p.price AS DECIMAL)) as total_revenue,
        AVG(ci.quantity * CAST(p.price AS DECIMAL)) as avg_order_value
    FROM product p
    JOIN category cat ON p.category_id = cat.category_id
    JOIN cartitem ci ON p.product_id = ci.product_id
    JOIN cart c ON ci.cart_id = c.cart_id
    JOIN "Order" o ON c.cart_id = o.cart_id
    WHERE o.status != 'cancelled'
    GROUP BY p.product_id, p.name, p.price, cat.name
    HAVING SUM(ci.quantity * CAST(p.price AS DECIMAL)) >= 0
    )
    SELECT 
        *,
        ROW_NUMBER() OVER (ORDER BY total_revenue DESC) as rank
    FROM product_stats
    ORDER BY total_revenue DESC
LIMIT 10
```

### Пояснення:
- Використовується CTE (Common Table Expression) `product_stats` для попередньої обробки даних
- JOIN таблиць `product`, `category`, `cartitem`, `cart` та `Order` для отримання повної інформації
- Групування за продуктом для агрегації даних
- Фільтрація скасованих замовлень через `WHERE o.status != 'cancelled'`
- Обчислення метрик: кількість замовлень, загальна кількість проданих одиниць, загальний дохід, середня вартість замовлення
- Використання window function `ROW_NUMBER()` для ранжування продуктів
- Сортування за загальним доходом у спадному порядку
- Обмеження результату через `LIMIT` для отримання топ-10 продуктів (або інша кількість, якщо вказана)

### Реалізація:
Запит реалізований в методі `getMostSuccessfulProducts` класу `ProductService` (файл `src/services/product.service.js`). Метод приймає опціональні параметри:
- `min_revenue` - мінімальний дохід для фільтрації продуктів
- `limit` - максимальна кількість результатів
- `status` - фільтрація за статусом продукту
- `category_id` - фільтрація за категорією

### Приклад виводу:
| product_id | name | price | category_name | order_count | total_quantity_sold | total_revenue | avg_order_value | rank |
|------------|------|-------|---------------|-------------|---------------------|--------------|-----------------|------|
| 5 | Ноутбук Gaming | 25000.00 | Електроніка | 45 | 67 | 1675000.00 | 37222.22 | 1 |
| 12 | Смартфон | 15000.00 | Електроніка | 120 | 180 | 2700000.00 | 22500.00 | 2 |
| 8 | Навушники | 3000.00 | Аудіо | 200 | 250 | 750000.00 | 3750.00 | 3 |

### Оптимізація:
Запит оптимізований для роботи з великими обсягами даних завдяки:
- Використанню індексів на зовнішніх ключах (`product_id`, `category_id`, `cart_id`, `order_id`)
- Індексам на полі `status` в таблиці `Order`
- Використанню CTE для попередньої обробки та фільтрації даних
