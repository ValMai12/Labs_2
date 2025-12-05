## Опис

Цей проєкт демонструє використання Prisma для керування міграціями бази даних в системі електронної комерції. Реалізовано п'ять міграцій, які послідовно вдосконалюють структуру бази даних.

## Конфігурація prisma.config.ts

```typescript
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

## Реалізовані міграції

### Міграція 1: Початкова схема бази даних

**Назва міграції:** `20251203210715_init_baseline`

**Опис:** Створення базової структури бази даних для інтернет-магазину

**Створені таблиці:**
- `User` - користувачі системи
- `address` - адреси доставки (з полями `country`, `city`, `street`, `postal_code`)
- `product` - товари (з полем `discount_percent`)
- `cart` та `cartitem` - кошик покупок
- `Order` - замовлення (обов'язкові поля `address_id` та `cart_id`)
- `payment` та `delivery` - оплата та доставка
- `category` - категорії товарів
- `review` та `wishlist` - відгуки та список бажань

**Створені enum типи:**
- `rols` - ролі користувачів
- `order_statuses` - статуси замовлень
- `product_statuses` - статуси товарів
- `delivery_statuses` - статуси доставки
- `payment_statuses` - статуси оплати
- `methods` - методи оплати

---

### Міграція 2: Додавання моделі поштових регіонів

**Назва міграції:** `20251203210752_add_postal_region_model`

**Мета:** Нормалізація даних адреси шляхом виділення інформації про поштові регіони в окрему таблицю.

**SQL міграції:**

```sql
-- CreateTable
CREATE TABLE "PostalRegion" (
    "postal_code" VARCHAR(20) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "country" VARCHAR(50) NOT NULL,

    CONSTRAINT "PostalRegion_pkey" PRIMARY KEY ("postal_code")
);
```

**Опис змін:**
- Створена таблиця `PostalRegion` для зберігання інформації про міста та країни
- Первинний ключ: `postal_code`
- Поля: місто (`city`) та країна (`country`)

**Переваги:**
- Уникнення дублювання даних про міста та країни
- Забезпечення цілісності даних адреси
- Спрощення пошуку адрес за регіонами

---

### Міграція 3: Оновлення моделі адреси

**Назва міграції:** `20251203210823_update_address_use_postal_region`

**Мета:** Інтеграція таблиці `address` з новою таблицею `PostalRegion`.

**SQL міграції:**

```sql
-- AlterTable
ALTER TABLE "address" DROP COLUMN "city",
DROP COLUMN "country",
ALTER COLUMN "postal_code" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_postal_code_fkey" FOREIGN KEY ("postal_code") REFERENCES "PostalRegion"("postal_code") ON DELETE RESTRICT ON UPDATE NO ACTION;
```

**Виконані зміни:**
1. Видалено колонки `city` та `country` з таблиці `address`
2. Поле `postal_code` стало обов'язковим (NOT NULL)
3. Додано зовнішній ключ на таблицю `PostalRegion`

**Результат:**
- Адреса тепер отримує інформацію про місто та країну через зв'язок з `PostalRegion`
- Зменшено надмірність даних

---

### Міграція 4: Створення моделі правил знижок

**Назва міграції:** `20251203210845_add_discount_rule_model`

**Мета:** Впровадження гнучкої системи знижок з підтримкою різних типів та термінів дії.

**SQL міграції:**

```sql
-- CreateEnum
CREATE TYPE "discount_types" AS ENUM ('percent', 'fixed');

-- CreateTable
CREATE TABLE "DiscountRule" (
    "discount_rule_id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "type" "discount_types" NOT NULL,
    "value" DECIMAL(10,2) NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_to" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN DEFAULT true,

    CONSTRAINT "DiscountRule_pkey" PRIMARY KEY ("discount_rule_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscountRule_code_key" ON "DiscountRule"("code");
```

**Структура таблиці:**
- `discount_rule_id` - унікальний ідентифікатор
- `code` - промокод
- `type` - тип знижки (відсоток або фіксована сума)
- `value` - значення знижки
- `valid_from` та `valid_to` - період дії
- `is_active` - статус активності

**Можливості:**
- Створення промокодів з різними типами знижок
- Управління термінами дії акцій
- Можливість тимчасового вимкнення знижок

---

### Міграція 5: Інтеграція знижок у товари

**Назва міграції:** `20251203210915_update_product_add_discount_rule`

**Мета:** Заміна простого відсотка знижки на посилання до повноцінних правил знижок.

**SQL міграції:**

```sql
-- AlterTable
ALTER TABLE "product" DROP COLUMN "discount_percent",
ADD COLUMN     "discount_rule_id" INTEGER;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_discount_rule_id_fkey" FOREIGN KEY ("discount_rule_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;
```

**Виконані зміни:**
1. Видалено поле `discount_percent`
2. Додано зовнішній ключ `discount_rule_id`
3. При видаленні правила знижки поле стає NULL

**Переваги нового підходу:**
- Товар може використовувати складні правила знижок
- Централізоване управління знижками
- Можливість застосування одного правила до багатьох товарів
- Відстеження термінів дії знижок

---

### Міграція 6: Розширення функціональності замовлень

**Назва міграції:** `20251203210948_update_order_add_discount`

**Мета:** Додавання можливості застосування знижок до замовлень та гнучкості структури.

**SQL міграції:**

```sql
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "applied_discount_id" INTEGER,
ALTER COLUMN "address_id" DROP NOT NULL,
ALTER COLUMN "cart_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_applied_discount_id_fkey" FOREIGN KEY ("applied_discount_id") REFERENCES "DiscountRule"("discount_rule_id") ON DELETE SET NULL ON UPDATE NO ACTION;
```

**Внесені зміни:**
1. Додано поле `applied_discount_id` для збереження інформації про застосовану знижку
2. Поля `address_id` та `cart_id` стали необов'язковими
3. Додано зовнішній ключ на таблицю `DiscountRule`

**Практичне застосування:**
- Можливість застосування промокодів при оформленні замовлення
- Збереження історії використаних знижок
- Підтримка замовлень без кошика (пряма покупка)
- Можливість замовлення без адреси (електронні товари)

---

**Основні тести:**

1. **Перевірка моделі PostalRegion**
   - Існування таблиці
   - Наявність записів
   - Структура даних

2. **Перевірка зв'язку Address ↔ PostalRegion**
   - Працездатність зовнішнього ключа
   - Відсутність старих полів `city` та `country`
   - Отримання даних через зв'язок

3. **Перевірка моделі DiscountRule**
   - Існування таблиці
   - Різні типи знижок (percent/fixed)
   - Перевірка термінів дії

4. **Перевірка зв'язку Product ↔ DiscountRule**
   - Працездатність зовнішнього ключа
   - Відсутність поля `discount_percent`
   - Розрахунок знижок

5. **Перевірка оновленої моделі Order**
   - Поле `applied_discount_id`
   - Необов'язковість `address_id` та `cart_id`
   - Застосування знижок

6. **Комплексні запити**
   - Запити з множинними зв'язками
   - Статистика використання знижок
   - Аналіз поштових регіонів

### Результати тестування

```
🚀 Starting Migration Tests...

======================================================================
  MIGRATION TESTING - STRUCTURAL CHANGES VERIFICATION
  Testing without clearing existing data
======================================================================


PostalRegion table exists
Found 21 postal region(s)
Sample data:
  - 01001: Kyiv, Ukraine
  - 79000: Lviv, Ukraine
  - 65000: Odesa, Ukraine

Found 21 address(es)
Verifying foreign key relationship:
  - Address: Khreshchatyk 1
    Postal Code: 01001
    Location: Kyiv, Ukraine
  - Address: Rynok Square 10
    Postal Code: 79000
    Location: Lviv, Ukraine
  - Address: 5th Avenue 101
    Postal Code: 10001
    Location: New York, USA
   Confirmed: city and country columns removed from Address

DiscountRule table exists
Found 21 discount rule(s)
Sample data:
  - Code: WELCOME10
    Type: percent, Value: 10
    Valid: 01.01.2023 - 31.12.2030
    Active: true
  - Code: SUMMER2024
    Type: percent, Value: 20
    Valid: 01.06.2024 - 31.08.2024
    Active: true
  - Code: BLACKFRIDAY
    Type: percent, Value: 50
    Valid: 20.11.2024 - 30.11.2024
    Active: true

Product table correctly references DiscountRule
Found 21 product(s)
Products with discount: 5
Products without discount: 16

Products with discount rules:
  - Samsung Galaxy S24 ($1000)
    Discount: SUMMER2024 (percent: 20)
    Final Price: $800.00 (20% off)
  - AirPods Pro 2 ($250)
    Discount: WELCOME10 (percent: 10)
    Final Price: $225.00 (10% off)
  - Summer Dress ($50)
    Discount: SUMMER2024 (percent: 20)
    Final Price: $40.00 (20% off)

   Confirmed: discount_percent column removed from Product

Order table structure updated successfully
Found 21 order(s)

Orders with applied discount: 4
Orders without address: 0 (nullable field working)
Orders without cart: 19 (nullable field working)

Orders with applied discounts:
  - Order #2
    Total: $1450
    Status: pending
    Discount: WELCOME10 (percent: 10)
  - Order #3
    Total: $100
    Status: paid
    Discount: SUMMER2024 (percent: 20)
  - Order #7
    Total: $100
    Status: delivered
    Discount: STUDENT (percent: 10)

   Confirmed: applied_discount_id column added to Order

Complex query with all migration changes successful

Sample order with full details:
Order #1
  Customer: John Doe
  Shipping: 5th Avenue 101
  Location: New York, USA
  Items:
    - Nokia 3310 x5

Discount usage tracking works correctly

Discount Rules Usage:
  - WELCOME10:
    Applied to 1 product(s)
    Used in 1 order(s)
  - SUMMER2024:
    Applied to 2 product(s)
    Used in 1 order(s)
  ...

PostalRegion usage tracking works correctly

Postal Regions Usage:
  - 01001 (Kyiv, Ukraine):
    Used by 6 address(es)
  - 79000 (Lviv, Ukraine):
    Used by 1 address(es)
  - 65000 (Odesa, Ukraine):
  ...

======================================================================
Migration tests completed!
======================================================================
```

## Висновки

У ході виконання лабораторної роботи було успішно реалізовано шість міграцій бази даних з використанням Prisma ORM:

1. **Нормалізація даних flhtcb** - виділення поштових регіонів в окрему таблицю покращило структуру даних та забезпечило цілісність інформації про локації.

2. **Гнучка система знижок** - впровадження моделі `DiscountRule` дозволило створити централізовану систему управління знижками з підтримкою різних типів (відсоток/фіксована сума) та термінів дії.

3. **Покращення моделі товарів** - заміна простого відсотка знижки на посилання до правил знижок надає більшу гнучкість в управлінні цінами та акціями.

4. **Розширення функціональності замовлень** - додавання можливості застосування знижок та зроблення деяких полів необов'язковими покращує адаптивність системи до різних бізнес-сценаріїв.

5. **Автоматизоване тестування** - створений скрипт тестування дозволяє швидко перевірити працездатність всіх міграцій на реальних даних.

Всі міграції виконані успішно, структура бази даних є логічною та масштабованою.
