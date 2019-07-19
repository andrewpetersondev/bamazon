# bamazon

## Step By Step Instructions

1. Open terminal and navigate to bamazon folder

2. Start MySQL Server

3.

```
node bamazonCustomer.js
```

4. type in an item_id
5. type in a number for the quantity of the item you want

Expected Output if an item is in stock

[Expected Output](assets/expected-usage.png)
[Not Enough Inventory](assets/not-enough-inventory.png)

### Challenge #1: Customer View (Minimum Requirement) 

- [x] Create a MySQL Database called bamazon.
- [x] Then create a Table inside of that database called products.
- [x] The products table should have each of the following columns:

- [x] item_id (unique id for each product)
- [x] product_name (Name of product)
- [x] department_name
- [x] price (cost to customer)
- [x] stock_quantity (how much of the product is available in stores)
- [x] Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
- [x] Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
- [x] The app should then prompt users with two messages.
- [x] The first should ask them the ID of the product they would like to buy.
- [x] he second message should ask how many units of the product they would like to buy.
- [x] Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
- [x] If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
- [x] However, if your store does have enough of the product, you should fulfill the customer's order.
- [x] This means updating the SQL database to reflect the remaining quantity.
- [x] Once the update goes through, show the customer the total cost of their purchase.
- [x] If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

### Challenge #2: Manager View (Next Level)

- [x] Create a new Node application called bamazonManager.js. Running this application will:
- [x] List a set of menu options:
- [x] View Products for Sale
- [x] View Low Inventory
- [x] Add to Inventory
- [x] Add New Product
- [] If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
- [] If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
- [] If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
- [] If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.
- [] If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.

### Challenge #3: Supervisor View (Final Level)

- [] Create a new MySQL table called departments. Your table should include the following columns:
- [] department_id
- [] department_name
- [] over_head_costs (A dummy number you set for each department)
- [] Modify the products table so that there's a product_sales column, and modify your bamazonCustomer.js app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.
- [] Make sure your app still updates the inventory listed in the products column.
- [] Create another Node app called bamazonSupervisor.js. Running this application will list a set of menu options:
- [] View Product Sales by Department
Create New Department
- [] When a supervisor selects View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.
- [] department_id
- [] department_name
- [] over_head_costs
- [] product_sales
- [] total_profit
- [] The total_profit column should be calculated on the fly using the difference between over_head_costs and product_sales. total_profit should not be stored in any database. You should use a custom alias.
- [] If you can't get the table to display properly after a few hours, then feel free to go back and just add total_profit to the departments table.

## Sources

This project may have code from class activities, office hours notes, or from seeking help from TAs and teachers.
