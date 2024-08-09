const products = [
    {
        "id": 1,
        "name": "Laptop Stand",
        "price": 25.99,
        "description": "Ergonomic laptop stand to improve posture and cooling.",
        "imageUrl": "https://images.unsplash.com/photo-1505209487757-5114235191e5?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "quantity": 5
    },
    {
        "id": 2,
        "name": "Mobile Stand",
        "price": 15.99,
        "description": "Adjustable mobile stand for desk use.",
        "imageUrl": "https://www.portronics.com/cdn/shop/products/Modesk-1.jpg?v=1647446052",
        "quantity": 5
    },
    {
        "id": 3,
        "name": "Selfie Stick",
        "price": 12.99,
        "description": "Extendable selfie stick with Bluetooth connectivity.",
        "imageUrl": "data:image/jpeg;base64,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",
        "quantity": 3
    },
    {
        "id": 4,
        "name": "Laptop Cleaner",
        "price": 9.99,
        "description": "Laptop and mobile cleaner with microfiber cloth.",
        "imageUrl": "https://m.media-amazon.com/images/I/41LMZTO4H9L._AC_.jpg",
        "quantity": 2
    },
    {
        "id": 5,
        "name": "Mobile Cleaner",
        "price": 7.99,
        "description": "Portable cleaning kit for mobile devices.",
        "imageUrl": "https://m.media-amazon.com/images/I/71QpuL8rCYL.jpg",
        "quantity": 2
    }
];

// fetch('product.json')
//     .then(response => response.json())
//     .then(data => {
//         displayProducts(data);
//     })
//     .catch(error => {
//         console.error('Error fetching products:', error);
//     });


// Load and display products
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

displayProducts(products);

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(({ product, quantity }) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - ₹${product.price.toFixed(2)} x ${quantity}</p>
            <button onclick="increaseQuantity(${product.id})">+</button>
            <button onclick="decreaseQuantity(${product.id})">-</button>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += product.price * quantity;
    });

    const cartTotalContainer = document.getElementById('cart-total');
    cartTotalContainer.innerHTML = `Total: ₹${total.toFixed(2)}`;
}
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(({ product, quantity }) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${product.name} - ₹${product.price.toFixed(2)} x ${quantity}</p>
            <button onclick="increaseQuantity(${product.id})">+</button>
            <button onclick="decreaseQuantity(${product.id})">-</button>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += product.price * quantity;
    });

    const cartTotalContainer = document.getElementById('cart-total');
    cartTotalContainer.innerHTML = `Total: ₹${total.toFixed(2)}`;
}
function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity++;
        updateCartDisplay();
    }
}

function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.product.id === productId);
    if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.product.id !== productId);
    }
    updateCartDisplay();
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartDisplay();
}
