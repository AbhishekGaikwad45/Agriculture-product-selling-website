<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <script src="./js/demo.js"></script>
    <style>
        .cart { margin-top: 20px; }
        .cart ul { list-style-type: none; }
    </style>
</head>
<body>

    <div>
        <h2>Product List</h2>
        <div>
            <p>Product 1 - $10</p>
            <button onclick="addToCart(`Product`, 10)">Add to Cart</button>
        </div>
        <div>
            <p>Product 2 - $20</p>
            <button onclick="addToCart('Product 2', 20)">Add to Cart</button>
        </div>
        <div>
            <p>Product 3 - $30</p>
            <button onclick="addToCart('Product 3', 30)">Add to Cart</button>
        </div>
    </div>

    <div class="cart">
        <h2>Shopping Cart</h2>
        <ul id="cart-items">
            <!-- Cart items will be listed here -->
        </ul>
        <p id="total-price">Total Price: $0</p>
    </div>

    <!-- <script src="script.js"></script> -->
</body>
</html>

// Initialize an empty array to store cart items
let cart = [];

// Function to add item to the cart
function addToCart(productName, productPrice) {
    // Create a product object
    const product = { name: productName, price: productPrice };
    
    // Add the product to the cart array
    cart.push(product);
    
    // Update the cart display
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the current list of cart items
    cartItemsContainer.innerHTML = '';
    
    // Add each item to the cart list
    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price;
    });
    
    // Update the total price
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}
