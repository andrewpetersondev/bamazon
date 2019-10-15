# bamazon

## Step By Step Instructions

1. Open terminal and navigate to bamazon folder

2. Start MySQL Server

3. In terminal enter, node bamazonCustomer.js

4. type in an item_id

5. type in a number for the quantity of the item you want

Expected Output if an item is in stock

[Expected Output](assets/expected-usage.png)
[Not Enough Inventory](assets/not-enough-inventory.png)

### Challenge #2: Manager View (Next Level)

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
