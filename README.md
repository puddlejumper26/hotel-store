<h1 align="center">Hotel Restaurant SIM</h1>

# 1.0 Desc
- This is the Simulation of a hotel restaurant.
- There is also a simplified edition with VUE, please click [here](https://github.com/puddlejumper26/vue-demo/tree/master#vue-demo)
- The functions are not complete due to authentication, but the codes for the functions should be complete. Please check the following content and also code in the components.

## 1.1 How to run this APP
- `npm run json`
- now could check the data under `localhost:3500`
- `ng serve`
- now could check the content under `localhost:4200`

## 1.2 Final GIF Demo
![20201223_003827](https://user-images.githubusercontent.com/40550117/102943150-83732f00-44b7-11eb-9f98-b728c84e9f0f.gif)
## 1.3 Time table for this project
2020.12.16 | 12:30 - 12: 40 | Received the project file from Svenja, checked and asked whether using Angular is possible<br>
2020.12.17 | 10:26 | Received the replies from Svenja, Angular is possible<br>
2020.12.19 | 12:30 - 13:30 | Tried with Vue, and built a simpel local sample, with local CRUD functions - Please check [this](https://github.com/puddlejumper26/vue-demo/tree/master#vue-demo)<br>
2020.12.19 | 15:30 - 16:00 | Trying to install the files from api folder, run the npm install, but could not make it work don't know how to use this<br>
2020.12.19 | 21:30 - 03:00(12.20) | Used the JSON Server and data (please check data.js in the file) to build the app with Angular<br>
2020.12.21 | 23:00 - 24:00 | Added checkout component and order model, asked pass by solutions for JSON Server authentications on stackoverflower<br>
2020.12.22 | 23:30 - 0:30 | Added Order component for admin

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
- Products subpage
  - With a button on the left side for the navigation
  - A table with all dishes details (ID, Name, Category, Price)
  - Each item with edit and delete button
  - Could create new dish
  - When a dish is created or modified, the status is updated on the `Menu` page automatically
- Orders subpage
  - With a button on the left side for the navigation
  - A table with ordered dishes with details (Customer Name, Room/Table Number, Dish Name and Quantity)

### 3.3 Cart
- CartSummay component Displays on the top right conor of the home page
  - Composes by two parts:
  - `Your cart:` displays dishes number in the cart, when none displays empty
  - `Click CART` is a link navigates to the cart summary table
- CartDetail component is the table displays to the custome regarding the ordered details
  - A table displays all dishes added by clicking the `Add to cart` button
  - Each line of the dish could be removed
  - Each line of dish has a quantity number, which could be modified by clicking directly on the up/down arrow
  - It has two buttons on the botton
    - 'Continue Ordering' will navigate to the Menu page
    - 'Checkout' will navigate to the Checkout component

### 3.4 Checkout
- Checkout component Displays to the customer
  - It contains a form which has three places to fill in (Title, Last Name and Room/Talbe Number)
  - The form is tempalte driven form, so it is valided directly inside the template
  - It contains two button on the bottom
    - `Back` button will navigate back to last page
    - `Complete Order` button will close(or make it invisible) current form and display the Thanks info to the customer

# 4  Authentication Problem
- Due to lack of authenication of the token,  `Admin panel` - `Products`
  - `edit` could not be saved  with 401
  - `Create New Product` could not be created but only with empty content, with 401
  - The above empty content row could not be edited nor deleted
  - Code inside `authMiddleware.js` needs to be modified
- The same reason as above, `Admin panel` - `Orders`
  - Data could not be displayed
  - When the order was submitted in the checkout component, the status code is 204 (No Content)

# 5 Conclusion
- Need to know more about backend knowledge in order to handle the entire system
- Need to know more about the Authenticaition
- Vue is much lighter, I have huge interest to learn it
