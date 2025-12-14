# Документація схеми бази даних

## Опис таблиць

### Таблиця: `User`

**Призначення**: Зберігає інформацію про облікові записи користувачів системи.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| user_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор користувача |
| first_name | VARCHAR(50) | NOT NULL | Ім'я користувача |
| last_name | VARCHAR(50) | NOT NULL | Прізвище користувача |
| email | VARCHAR(100) | UNIQUE, NOT NULL | Електронна пошта користувача (унікальна) |
| password_hash | VARCHAR(255) | NOT NULL | Хешований пароль |
| phone | VARCHAR(20) | NULL | Номер телефону |
| role | ENUM(rols) | DEFAULT 'customer' | Роль користувача (customer, admin, manager, support) |
| is_active | BOOLEAN | DEFAULT true | Чи активний обліковий запис |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення облікового запису |
| updated_at | TIMESTAMP(6) | DEFAULT NOW() | Час останнього оновлення |

**Індекси**:
- `idx_user_role` на `role` (для фільтрації за роллю)
- `idx_user_is_active` на `is_active` (для фільтрації активних користувачів)
- `idx_user_created_at` на `created_at` (для сортування за датою реєстрації)
- `idx_user_role_is_active` на `(role, is_active)` (композитний індекс для комбінованих запитів)

**Зв'язки**:
- One-to-many з `Order` (користувач може мати багато замовлень)
- One-to-many з `address` (користувач може мати багато адрес)
- One-to-many з `cart` (користувач може мати багато кошиків)
- One-to-many з `review` (користувач може залишити багато відгуків)
- One-to-many з `wishlist` (користувач може мати багато елементів у списку бажань)

---

### Таблиця: `address`

**Призначення**: Зберігає адреси доставки користувачів.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| address_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор адреси |
| user_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор користувача |
| street | VARCHAR(100) | NOT NULL | Вулиця та номер будинку |
| postal_code | VARCHAR(20) | FOREIGN KEY, NOT NULL | Поштовий індекс |
| is_default | BOOLEAN | DEFAULT false | Чи є адреса адресою за замовчуванням |

**Індекси**:
- `idx_address_user_id` на `user_id` (для швидкого пошуку адрес користувача)
- `idx_address_is_default` на `is_default` (для пошуку адрес за замовчуванням)
- `idx_address_user_id_is_default` на `(user_id, is_default)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `User` (багато адрес належать одному користувачу, CASCADE DELETE)
- Many-to-one з `PostalRegion` (багато адрес належать одному поштовому регіону)
- One-to-many з `Order` (адреса може використовуватися в багатьох замовленнях)

---

### Таблиця: `PostalRegion`

**Призначення**: Зберігає інформацію про поштові регіони (міста та країни).

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| postal_code | VARCHAR(20) | PRIMARY KEY | Поштовий індекс (використовується як первинний ключ) |
| city | VARCHAR(50) | NOT NULL | Назва міста |
| country | VARCHAR(50) | NOT NULL | Назва країни |

**Індекси**:
- `idx_postal_region_city` на `city` (для пошуку за містом)
- `idx_postal_region_country` на `country` (для пошуку за країною)
- `idx_postal_region_city_country` на `(city, country)` (композитний індекс)

**Зв'язки**:
- One-to-many з `address` (один поштовий регіон може мати багато адрес)

---

### Таблиця: `product`

**Призначення**: Зберігає інформацію про товари в каталозі.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| product_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор продукту |
| category_id | INT | FOREIGN KEY, NULL | Ідентифікатор категорії |
| name | VARCHAR(100) | NOT NULL | Назва продукту |
| description | VARCHAR(500) | NULL | Опис продукту |
| price | DECIMAL(10,2) | NOT NULL | Ціна продукту |
| stock | INT | DEFAULT 0 | Кількість товару на складі |
| status | ENUM(product_statuses) | DEFAULT 'active' | Статус продукту (active, hidden, out_of_stock) |
| image_url | VARCHAR(255) | NULL | URL зображення продукту |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення запису |
| updated_at | TIMESTAMP(6) | DEFAULT NOW() | Час останнього оновлення |
| discount_rule_id | INT | FOREIGN KEY, NULL | Ідентифікатор правила знижки |

**Індекси**:
- `idx_product_category_id` на `category_id` (для фільтрації за категорією)
- `idx_product_status` на `status` (для фільтрації за статусом)
- `idx_product_created_at` на `created_at` (для сортування за датою)
- `idx_product_price` на `price` (для сортування та фільтрації за ціною)
- `idx_product_stock` на `stock` (для пошуку товарів за наявністю)
- `idx_product_category_id_status` на `(category_id, status)` (композитний індекс)
- `idx_product_status_created_at` на `(status, created_at)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `category` (багато продуктів належать одній категорії)
- Many-to-one з `DiscountRule` (багато продуктів можуть мати одне правило знижки)
- One-to-many з `cartitem` (продукт може бути в багатьох кошиках)
- One-to-many з `review` (продукт може мати багато відгуків)
- One-to-many з `wishlist` (продукт може бути в багатьох списках бажань)

---

### Таблиця: `category`

**Призначення**: Зберігає категорії товарів з підтримкою ієрархії.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| category_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор категорії |
| name | VARCHAR(100) | NOT NULL | Назва категорії |
| description | VARCHAR(255) | NULL | Опис категорії |
| parent_id | INT | FOREIGN KEY, NULL | Ідентифікатор батьківської категорії (для ієрархії) |

**Індекси**:
- `idx_category_parent_id` на `parent_id` (для пошуку підкатегорій)
- `idx_category_name` на `name` (для пошуку за назвою)

**Зв'язки**:
- Self-referential many-to-one (категорія може мати батьківську категорію)
- One-to-many з `product` (категорія може містити багато продуктів)

---

### Таблиця: `cart`

**Призначення**: Зберігає кошики покупок користувачів.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| cart_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор кошика |
| user_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор користувача |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення кошика |
| is_active | BOOLEAN | DEFAULT true | Чи є кошик активним |

**Індекси**:
- `idx_cart_user_id` на `user_id` (для пошуку кошиків користувача)
- `idx_cart_is_active` на `is_active` (для фільтрації активних кошиків)
- `idx_cart_created_at` на `created_at` (для сортування за датою)
- `idx_cart_user_id_is_active` на `(user_id, is_active)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `User` (багато кошиків належать одному користувачу, CASCADE DELETE)
- One-to-many з `cartitem` (кошик містить багато елементів)
- One-to-many з `Order` (кошик може бути використаний для створення замовлення)

---

### Таблиця: `cartitem`

**Призначення**: Зберігає елементи кошика (товари та їх кількість).

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| cart_item_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор елемента кошика |
| cart_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор кошика |
| product_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор продукту |
| quantity | INT | NOT NULL | Кількість товару |
| added_at | TIMESTAMP(6) | DEFAULT NOW() | Час додавання товару до кошика |

**Індекси**:
- `idx_cartitem_cart_id` на `cart_id` (для пошуку елементів кошика)
- `idx_cartitem_product_id` на `product_id` (для пошуку за продуктом)
- `idx_cartitem_added_at` на `added_at` (для сортування за датою додавання)
- `idx_cartitem_cart_id_product_id` на `(cart_id, product_id)` (композитний індекс, унікальність)

**Зв'язки**:
- Many-to-one з `cart` (багато елементів належать одному кошику, CASCADE DELETE)
- Many-to-one з `product` (багато елементів посилаються на один продукт, CASCADE DELETE)

---

### Таблиця: `Order`

**Призначення**: Зберігає інформацію про замовлення користувачів.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| order_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор замовлення |
| user_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор користувача |
| address_id | INT | FOREIGN KEY, NULL | Ідентифікатор адреси доставки |
| cart_id | INT | FOREIGN KEY, NULL | Ідентифікатор кошика |
| total_amount | DECIMAL(10,2) | NOT NULL | Загальна сума замовлення |
| status | ENUM(order_statuses) | DEFAULT 'pending' | Статус замовлення (pending, paid, shipped, delivered, cancelled) |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення замовлення |
| shipped_at | TIMESTAMP(6) | NULL | Час відправлення |
| delivered_at | TIMESTAMP(6) | NULL | Час доставки |
| applied_discount_id | INT | FOREIGN KEY, NULL | Ідентифікатор застосованого правила знижки |

**Індекси**:
- `idx_order_user_id` на `user_id` (для пошуку замовлень користувача)
- `idx_order_status` на `status` (для фільтрації за статусом)
- `idx_order_created_at` на `created_at` (для сортування за датою)
- `idx_order_user_id_status` на `(user_id, status)` (композитний індекс)
- `idx_order_status_created_at` на `(status, created_at)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `User` (багато замовлень належать одному користувачу, CASCADE DELETE)
- Many-to-one з `address` (багато замовлень можуть використовувати одну адресу)
- Many-to-one з `cart` (замовлення може бути створене з кошика)
- Many-to-one з `DiscountRule` (замовлення може мати застосовану знижку)
- One-to-one з `delivery` (кожне замовлення може мати одну доставку)
- One-to-many з `payment` (замовлення може мати багато платежів)

---

### Таблиця: `delivery`

**Призначення**: Зберігає інформацію про доставку замовлень.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| delivery_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор доставки |
| order_id | INT | FOREIGN KEY, UNIQUE, NOT NULL | Ідентифікатор замовлення (унікальний) |
| courier | VARCHAR(50) | NULL | Назва служби доставки |
| tracking_number | VARCHAR(100) | NULL | Номер відстеження посилки |
| status | ENUM(delivery_statuses) | DEFAULT 'preparing' | Статус доставки (preparing, in_transit, delivered, returned) |
| updated_at | TIMESTAMP(6) | DEFAULT NOW() | Час останнього оновлення |

**Індекси**:
- `idx_delivery_status` на `status` (для фільтрації за статусом доставки)
- `idx_delivery_order_id_status` на `(order_id, status)` (композитний індекс)

**Зв'язки**:
- One-to-one з `Order` (кожна доставка належить одному замовленню, CASCADE DELETE)

---

### Таблиця: `payment`

**Призначення**: Зберігає інформацію про платежі за замовлення.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| payment_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор платежу |
| order_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор замовлення |
| method | ENUM(methods) | NOT NULL | Метод оплати (card, paypal, cash_on_delivery) |
| amount | DECIMAL(10,2) | NOT NULL | Сума платежу |
| status | ENUM(payment_statuses) | DEFAULT 'pending' | Статус платежу (pending, success, failed, refunded) |
| transaction_id | VARCHAR(100) | NULL | Ідентифікатор транзакції від платіжної системи |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення платежу |

**Індекси**:
- `idx_payment_order_id` на `order_id` (для пошуку платежів замовлення)
- `idx_payment_status` на `status` (для фільтрації за статусом)
- `idx_payment_method` на `method` (для фільтрації за методом оплати)
- `idx_payment_created_at` на `created_at` (для сортування за датою)
- `idx_payment_order_id_status` на `(order_id, status)` (композитний індекс)
- `idx_payment_status_method` на `(status, method)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `Order` (багато платежів можуть належати одному замовленню, CASCADE DELETE)

---

### Таблиця: `review`

**Призначення**: Зберігає відгуки та оцінки користувачів на продукти.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| review_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор відгуку |
| user_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор користувача |
| product_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор продукту |
| rating | INT | NULL | Оцінка (зазвичай 1-5) |
| comment | VARCHAR(500) | NULL | Текстовий коментар |
| created_at | TIMESTAMP(6) | DEFAULT NOW() | Час створення відгуку |
| is_approved | BOOLEAN | DEFAULT false | Чи схвалений відгук модератором |

**Індекси**:
- `idx_review_user_id` на `user_id` (для пошуку відгуків користувача)
- `idx_review_product_id` на `product_id` (для пошуку відгуків продукту)
- `idx_review_is_approved` на `is_approved` (для фільтрації схвалених відгуків)
- `idx_review_created_at` на `created_at` (для сортування за датою)
- `idx_review_user_id_product_id` на `(user_id, product_id)` (композитний індекс)
- `idx_review_product_id_is_approved` на `(product_id, is_approved)` (композитний індекс)

**Зв'язки**:
- Many-to-one з `User` (багато відгуків належать одному користувачу, CASCADE DELETE)
- Many-to-one з `product` (багато відгуків належать одному продукту, CASCADE DELETE)

---

### Таблиця: `wishlist`

**Призначення**: Зберігає список бажань користувачів (товари, які користувач хоче придбати).

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| wishlist_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор запису |
| user_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор користувача |
| product_id | INT | FOREIGN KEY, NOT NULL | Ідентифікатор продукту |
| added_at | TIMESTAMP(6) | DEFAULT NOW() | Час додавання до списку бажань |

**Індекси**:
- `idx_wishlist_user_id` на `user_id` (для пошуку списку бажань користувача)
- `idx_wishlist_product_id` на `product_id` (для пошуку за продуктом)
- `idx_wishlist_added_at` на `added_at` (для сортування за датою)
- Унікальний індекс на `(user_id, product_id)` (один продукт може бути доданий один раз)

**Зв'язки**:
- Many-to-one з `User` (багато записів належать одному користувачу, CASCADE DELETE)
- Many-to-one з `product` (багато записів посилаються на один продукт, CASCADE DELETE)

---

### Таблиця: `DiscountRule`

**Призначення**: Зберігає правила знижок та промокодів.

**Колонки**:

| Колонка | Тип | Обмеження | Опис |
|---------|-----|-----------|------|
| discount_rule_id | INT | PRIMARY KEY, AUTO_INCREMENT | Унікальний ідентифікатор правила знижки |
| code | VARCHAR(50) | UNIQUE, NOT NULL | Код знижки (унікальний) |
| type | ENUM(discount_types) | NOT NULL | Тип знижки (percent, fixed) |
| value | DECIMAL(10,2) | NOT NULL | Значення знижки (відсоток або фіксована сума) |
| valid_from | TIMESTAMP | NOT NULL | Початок дії знижки |
| valid_to | TIMESTAMP | NOT NULL | Кінець дії знижки |
| is_active | BOOLEAN | DEFAULT true | Чи активне правило знижки |

**Індекси**:
- `idx_discount_rule_is_active` на `is_active` (для фільтрації активних знижок)
- `idx_discount_rule_type` на `type` (для фільтрації за типом)
- `idx_discount_rule_valid_from` на `valid_from` (для пошуку за датою початку)
- `idx_discount_rule_is_active_valid_from` на `(is_active, valid_from)` (композитний індекс)

**Зв'язки**:
- One-to-many з `Order` (одне правило знижки може бути застосоване до багатьох замовлень)
- One-to-many з `product` (одне правило знижки може бути застосоване до багатьох продуктів)

---

## Рішення щодо дизайну

### Чому обрано таку структуру схеми

1. **Нормалізація даних**: Схема дотримується принципів нормалізації до 3NF (третьої нормальної форми), що забезпечує мінімізацію дублювання даних та цілісність інформації.

2. **Розділення відповідальності**: Кожна таблиця відповідає за конкретну сутність предметної області, що спрощує підтримку та розширення системи.

3. **Гнучкість**: Використання опціональних полів (NULL) дозволяє системі працювати з неповними даними, що важливо для поступового заповнення інформації (наприклад, адреса доставки може бути додана пізніше).

4. **Підтримка ієрархії категорій**: Self-referential зв'язок в таблиці `category` дозволяє створювати багаторівневу ієрархію категорій без додаткових таблиць.

5. **Відстеження часу**: Використання полів `created_at`, `updated_at`, `shipped_at`, `delivered_at` дозволяє повноцінно відстежувати життєвий цикл сутностей.

### Рівень нормалізації

Схема досягає **3NF (третьої нормальної форми)**:

- **1NF**: Всі таблиці мають атомарні значення, немає повторюваних груп
- **2NF**: Всі неключові атрибути повністю залежать від первинного ключа
- **3NF**: Всі неключові атрибути не залежать транзитивно від первинного ключа

**Приклади нормалізації**:
- Адреси винесені в окрему таблицю `address` з посиланням на `PostalRegion` для уникнення дублювання інформації про міста
- Елементи кошика винесені в окрему таблицю `cartitem` для підтримки багатьох товарів в одному кошику
- Доставка та платежі винесені в окремі таблиці для підтримки історії та множинних платежів

### Компроміси

1. **Денормалізація для продуктивності**: 
   - Поле `total_amount` в таблиці `Order` зберігає загальну суму, хоча її можна обчислити з елементів кошика. Це компроміс між нормалізацією та швидкістю запитів.

2. **Опціональні зв'язки**:
   - `address_id` та `cart_id` в таблиці `Order` є опціональними, оскільки замовлення може бути створене безпосередньо з продуктів (через endpoint `/orders/with-products`), а не з кошика.

3. **Відсутність soft delete**:
   - Замість soft delete використовується CASCADE DELETE для деяких зв'язків. Це спрощує схему, але унеможливлює відновлення видалених даних без резервних копій.

### Стратегія індексування

Індекси створені на основі аналізу частотних запитів API:

1. **Індекси для зовнішніх ключів**: Всі зовнішні ключі мають індекси для швидкого пошуку пов'язаних записів (наприклад, `idx_order_user_id`).

2. **Індекси для фільтрації**: Поля, що часто використовуються в WHERE умовах, мають індекси:
   - `status` в таблицях `Order`, `product`, `delivery`, `payment`
   - `is_active` в таблицях `User`, `cart`, `DiscountRule`
   - `role` в таблиці `User`

3. **Індекси для сортування**: Поля, що використовуються для сортування, мають індекси:
   - `created_at` в більшості таблиць
   - `price` в таблиці `product`

4. **Композитні індекси**: Створені для оптимізації комбінованих запитів:
   - `(user_id, status)` в таблиці `Order` - для пошуку замовлень користувача з певним статусом
   - `(category_id, status)` в таблиці `product` - для фільтрації продуктів за категорією та статусом
   - `(user_id, is_active)` в таблиці `cart` - для пошуку активних кошиків користувача

5. **Унікальні індекси**: 
   - `(user_id, product_id)` в таблиці `wishlist` - запобігає дублюванню записів
   - `email` в таблиці `User` - забезпечує унікальність електронної пошти
   - `code` в таблиці `DiscountRule` - забезпечує унікальність коду знижки

6. **Відсутні індекси на текстових полях**: 
   - Поля типу `name`, `description` не мають індексів, оскільки повнотекстовий пошук не реалізований. Для майбутнього розширення можна додати GIN індекси для PostgreSQL full-text search.

### Висновки

Схема бази даних спроектована з урахуванням балансу між нормалізацією, продуктивністю та гнучкістю. Використання індексів оптимізовано для реальних сценаріїв використання API, що забезпечує швидкий пошук та фільтрацію даних. Структура дозволяє легко розширювати функціональність без значних змін в існуючій схемі.

