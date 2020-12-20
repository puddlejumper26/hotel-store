<h1 align="center">Hotel Restaurant SIM</h1>

# 1.0 Desc
This is the Simulation of a hotel restaurant.

# 2.0 Tech Stack & IDE
- Angular 10, TS, Bootstrap
- JSON-Server
- VS Code

# 3.0 Functions

### 3.1 Menu
- Display to the customer
- A table with Dish Name, Description, Category(lunch, breakfast, etc), price
- Each dish should be able to add to the cart by clicking the `Add to cart` button
- Left buttons could sort the dishes based on the category

### 3.2 Admin
- Display to the hotel employee
- A table with dises details
- Each item with edit and delete button
- Could create new dish
- When a dish is created or modified, the status is updated on the `Menu` page automatically

### 3.3 Cart
- Displays on the top right conor of the home page
- Composes by two parts:
  - `Your cart:` displays dishes number in the cart, when none displays empty
  - `Click CART` is a link navigates to the cart summary table


# 4.0 Problems

### 4.1 Authentication
- Due to lack of authenication of the token, insdie the `Admin panel`the funciton of
  - `edit` could not be saved  with 401
  - `Create New Product` could not be created but only with empty content, with 401
  - The above empty content row could not be edited nor deleted
  - Code inside `authMiddleware.js` needs to be modified
