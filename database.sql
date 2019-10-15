DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL auto_increment,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT NOT NULL default 0,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
    ("Mario Kart", "games", 29.99, 25),
    ("Super Smash Bros", "games", 29.99, 20),
    ("iMac", "computers", 2500.00, 10),
    ("MacBook Pro", "computers", 2000.00, 10),
    ("Playstation", "consoles", 300.00, 8),
    ("Game Cube", "consoles", 49.99, 9),
    ("Hoodie", "clothing", 39.99, 100),
    ("Shirt", "clothing", 25.00, 200),
    ("Mug", "drinkware", 15.00, 50),
    ("Cocktail Glasses", "drinkware", 60.00, 40);


CREATE TABLE departments (
    department_id INT NOT NULL auto_increment,
    department_name VARCHAR(50),
    over_head_costs DECIMAL(11,2) DEFAULT 10000,
    PRIMARY KEY (department_id)
);
