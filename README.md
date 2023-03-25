# Anime-Shop E-Commerce Website

A simple yet functional e-commerce website for browsing and purchasing anime-related products.

[A link to the project] (javascript-assignment-eight.vercel.app)

## Project Description

This code creates an "Anime-shop" e-commerce website for users to browse and purchase anime-related products. The project contains two primary files, an `index.html` file for the structure and layout of the website, and a `script.js` file for handling the logic and interactivity of the website.

### Website Layout and Functionality

- A header section that contains the website logo and a navigation bar with links to different pages such as Home, Shop, and About. There is also a shopping cart icon in the navbar.
- A hero section that displays some promotional text and a button emphasizing the sustainability of the products.
- A feature section highlighting the website's features, such as free shipping, best price, newest products, and 24/7 support.
- A main content section that displays featured products along with a filter to search for specific products or filter by categories like Naruto or One Piece.
- A shopping cart sidebar that displays the selected products, their quantities, prices, and a total amount. Users can remove items from the cart or proceed to checkout. The sidebar can be opened and closed using the appropriate buttons.
- A footer section that contains contact and store information, such as address, phone number, opening hours, and days open.

### JavaScript Functionality

The `script.js` file handles various functionalities, such as:

- Fetching the product inventory data from a JSON file and rendering the products on the webpage.
- Adding and removing products from the shopping cart.
- Updating the cart and displaying the total amount of the cart items.
- Implementing the filter functionality for the featured products based on user input or category selection.
- Toggling the shopping cart sidebar to show or hide it.

## Technical Details and Comments

- If you click the shopping cart icon in the Navbar in the header, the cart will pop up. If you click it again, it will close.
- If the cart is empty, the message "the cart is empty" will show up. The moment you add items to the cart, it will disappear.
- You can remove items by pressing the "remove" button. If you have multiple times the same item in the cart, the remove button will reduce the amount by 1. If you only have 1 amount of a specific item in the cart, pressing the remove button will remove the item completely from the cart.
- You can close the cart by clicking the "close" button. There is a "check out" button, but that functionality has not been implemented, as it was not required.
- You can filter based on two ways: first, by typing the name of the anime you are looking for in the box "enter filtered text". The second way is by using the box beside it, which already has the filtered options available for you to select.
- You need to press the "Filter" button if you want the filter to work. It is important to note that you can only use 1 of the 2 filters option at a time.
- If you press the cart icon by the products, the cart will pop up, and the item will be added to the cart.

## Suggestions for 2.0 Version

- **User Authentication:** Implement a user registration and login system to allow users to create accounts, track their order history, and manage their profile information.
- **Checkout and Payment Integration:** Add a secure and reliable payment gateway integration (e.g., Stripe, PayPal) to allow users to complete their purchases seamlessly and securely.
- **Product Details Page:** Create a dedicated product details page for each product, displaying more information such as multiple images, videos, reviews, and detailed descriptions.
- **Reviews and Ratings:** Implement a system to allow users to rate and review products, and display these ratings and reviews on the product details page.
- **Product Categories and Subcategories:** Expand the product organization with categories and subcategories for better browsing and filtering experiences.
- **Advanced Filtering and Sorting:** Improve the filtering functionality by allowing users to filter by price, release date, popularity, etc., and add the ability to sort products based on these criteria.
- **Responsive Design:** Ensure that the website is fully responsive and looks good on all devices, including smartphones, tablets, and desktops.
- **Wishlist:** Allow users to add products to a wishlist that they can review and purchase later.
- **Related Products and Recommendations:** Implement a recommendation system that suggests related products or personalized recommendations based on user browsing and purchase history.