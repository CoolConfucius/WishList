# Product Wish List

### What is it for? 

##### The Product Wish List lets you keep track of items that you want to buy but not immediately, or items you're considering to buy. You can:
  - Get an organized view of your list
  - Add items to your list
  - View showpages with details of your items
  - Remove items from your list
  - Update items on your list 
  - Get a grand total price of your list 

### Extra Features
  - Show page displays an image if url is provided
  - Filter by name and category 
  - Filter by price, greater than and less than
  - Sort by name, category, date to purchase by, and date added 
  - Total changes along with sorting and filtering 
  - Reverse the sort order by clicking the buttons while holding shift 
  - Remove all items with just a button click 

### Testing Feature 
While in the index page, click on the spade, club, heart, or diamond to instantly add a product with already defined keys. 


### Heroku
Now deployed on: 
https://tranquil-lake-86813.herokuapp.com/

### On Code
Implemented using Mongo DB, Express generator, Bootstrap, Jade, and JQuery. 

## Routes
Handled by routes/index.js and routes/products.js . 

routes/index.js is mainly responsible for fetching the complete product wish list and rendering it (views/index.jade).  It also handles the filtering and sorting. The bonus test feature is also handled here. 

routes/products.js handles various crud operations and renderings. It renders the add product form and the showpage. It handles adding products, deleting products, updating products, and deleting all products. 

## Views 
views/index.jade serves as the view of the Product Wish List main page. The page mainly serves to present all products of the wish list, but can also filter and sorth. Rendered by and gets its products from routes/index.js. Uses public/js/main.js. 

views/addProduct.jade serves as the view of the add product form. Rendered by routes/products.js. Uses public/js/addProduct.js. 

views/showpage.jade serves as the view of the show page of a specific product. The page shows additional information of the selected product as well as provide an edit form used to update the product. Rendered by and gets its product details from routes/products.js. Uses public/js/showpage.js. 

## Frontend Javascript 
Thanks to Jade, jQuery dom manipulation is sigficantly minimized. Populating data is handled server side. 

Inside public/js: addProduct.js, main.js, and showpage.js mainly handle ajax calls. 

## Model and Schema
models/product.js defines the schema and serves as the model of the product document in this full stack app. 