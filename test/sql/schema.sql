CREATE DATABASE IF NOT EXISTS restaurant CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE restaurant;

-- Danh mục
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

-- Món ăn
CREATE TABLE IF NOT EXISTS menu_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NULL,
  name VARCHAR(120) NOT NULL,
  price INT NOT NULL,
  is_active TINYINT DEFAULT 1,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Bàn
CREATE TABLE IF NOT EXISTS tables (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  is_open TINYINT DEFAULT 1
);

-- Map code QR -> table_id (QR cố định)
CREATE TABLE IF NOT EXISTS table_tokens (
  table_id INT PRIMARY KEY,
  code VARCHAR(64) UNIQUE NOT NULL,
  is_active TINYINT DEFAULT 1,
  FOREIGN KEY (table_id) REFERENCES tables(id)
);

-- Đơn hàng
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  table_id INT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending', -- pending/confirmed/paid/cancelled
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (table_id) REFERENCES tables(id)
);

-- Dòng món trong đơn
CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  item_id INT NOT NULL,
  qty INT NOT NULL,
  price INT NOT NULL, -- snapshot giá
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (item_id) REFERENCES menu_items(id)
);

-- Dữ liệu mẫu
INSERT INTO categories(name) VALUES ('Món chính'), ('Đồ uống'), ('Tráng miệng');

INSERT INTO menu_items(category_id, name, price) VALUES
(1,'Cơm gà',45000),
(1,'Bún bò',50000),
(2,'Trà chanh',15000),
(2,'Cà phê sữa',25000),
(3,'Kem dừa',30000);

INSERT INTO tables(name,is_open) VALUES ('Bàn 1',1),('Bàn 2',1),('Bàn 3',1);

-- Code QR cố định cho 3 bàn (tuỳ bạn đổi mã)
INSERT INTO table_tokens(table_id, code, is_active) VALUES
(1,'A1B2C3',1),
(2,'D4E5F6',1),
(3,'G7H8I9',1);
