CREATE TYPE rols AS ENUM('customer', 'admin', 'manager', 'support');
CREATE TABLE IF NOT EXISTS "User" (
    user_id        SERIAL PRIMARY KEY,
    first_name     VARCHAR(50) NOT NULL,
    last_name      VARCHAR(50) NOT NULL,
    email          VARCHAR(100) UNIQUE NOT NULL,
    password_hash  VARCHAR(255) NOT NULL,
    phone          VARCHAR(20),
    role           rols DEFAULT 'customer',
    is_active      BOOLEAN DEFAULT TRUE,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Address (
    address_id   SERIAL PRIMARY KEY,
    user_id      INT NOT NULL,
    country      VARCHAR(50) NOT NULL,
    city         VARCHAR(50) NOT NULL,
    street       VARCHAR(100) NOT NULL,
    postal_code  VARCHAR(20),
    is_default   BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES "User"(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Category (
    category_id  SERIAL PRIMARY KEY,
    name         VARCHAR(100) NOT NULL,
    description  VARCHAR(255),
    parent_id    INT,
    FOREIGN KEY (parent_id) REFERENCES Category(category_id) ON DELETE SET NULL
);

CREATE TYPE product_statuses AS ENUM('active', 'hidden', 'out_of_stock');
CREATE TABLE IF NOT EXISTS Product (
    product_id        SERIAL PRIMARY KEY,
    category_id       INT,
    name              VARCHAR(100) NOT NULL,
    description       VARCHAR(500),
    price             DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    discount_percent  DECIMAL(5,2) DEFAULT 0.00 CHECK (discount_percent >= 0 AND discount_percent <= 100),
    stock             INT DEFAULT 0 CHECK (stock >= 0),
    status            product_statuses DEFAULT 'active',
    image_url         VARCHAR(255),
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS Cart (
    cart_id     SERIAL PRIMARY KEY,
    user_id     INT NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active   BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES "User"(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS CartItem (
    cart_item_id  SERIAL PRIMARY KEY,
    cart_id       INT NOT NULL,
    product_id    INT NOT NULL,
    quantity      INT NOT NULL CHECK (quantity > 0),
    added_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES Cart(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE
);

CREATE TYPE order_statuses AS ENUM('pending','paid','shipped','delivered','cancelled');
CREATE TABLE IF NOT EXISTS "Order" (
    order_id      SERIAL PRIMARY KEY,
    user_id       INT NOT NULL,
    address_id    INT NOT NULL,
    cart_id       INT NOT NULL,
    total_amount  DECIMAL(10,2) NOT NULL CHECK (total_amount >= 0),
    status        order_statuses DEFAULT 'pending',
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    shipped_at    TIMESTAMP,
    delivered_at  TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "User"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (address_id) REFERENCES Address(address_id) ON DELETE SET NULL,
    FOREIGN KEY (cart_id) REFERENCES Cart(cart_id) ON DELETE SET NULL
);

CREATE TYPE methods AS ENUM('card','paypal','cash_on_delivery');
CREATE TYPE payment_statuses AS ENUM('pending','success','failed','refunded');
CREATE TABLE IF NOT EXISTS Payment (
    payment_id      SERIAL PRIMARY KEY,
    order_id        INT NOT NULL,
    method          methods NOT NULL,
    amount          DECIMAL(10,2) NOT NULL CHECK (amount >= 0),
    status          payment_statuses DEFAULT 'pending',
    transaction_id  VARCHAR(100),
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES "Order"(order_id) ON DELETE CASCADE
);

CREATE TYPE delivery_statuses AS ENUM('preparing','in_transit','delivered','returned');
CREATE TABLE IF NOT EXISTS Delivery (
    delivery_id     SERIAL PRIMARY KEY,
    order_id        INT NOT NULL UNIQUE,
    courier         VARCHAR(50),
    tracking_number VARCHAR(100),
    status          delivery_statuses DEFAULT 'preparing',
    updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES "Order"(order_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Review (
    review_id   SERIAL PRIMARY KEY,
    user_id     INT NOT NULL,
    product_id  INT NOT NULL,
    rating      INT CHECK (rating BETWEEN 1 AND 5),
    comment     VARCHAR(500),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES "User"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Wishlist (
    wishlist_id  SERIAL PRIMARY KEY,
    user_id      INT NOT NULL,
    product_id   INT NOT NULL,
    added_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, product_id),
    FOREIGN KEY (user_id) REFERENCES "User"(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE CASCADE
);

CREATE TYPE types AS ENUM('percent','fixed');
CREATE TABLE IF NOT EXISTS Discount (
    discount_id  SERIAL PRIMARY KEY,
    code         VARCHAR(50) UNIQUE NOT NULL,
    type         types NOT NULL,
    value        DECIMAL(10,2) NOT NULL CHECK (value >= 0),
    valid_from   TIMESTAMP NOT NULL,
    valid_to     TIMESTAMP NOT NULL,
    is_active    BOOLEAN DEFAULT TRUE,
    product_id   INT,
    order_id     INT,
    FOREIGN KEY (product_id) REFERENCES Product(product_id) ON DELETE SET NULL,
    FOREIGN KEY (order_id) REFERENCES "Order"(order_id) ON DELETE SET NULL
);
