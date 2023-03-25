




document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.pro-container');
  let productsData = [];
  let cart = [];

  fetch('inventory.json')
    .then(response => response.json())
    .then(products => {
      productsData = products;
      renderProducts(productsData);
    })
    .catch(error => console.error(error));

  function renderProducts(products) {
    container.innerHTML = '';

    products.forEach((product, index) => {
      const html = `
        <div class="pro"> 
          <img src="${product.image}" alt="">
          <div class="description">
            <span>${product.title}</span>
            <h5>${product.description}</h5>
            <div class="star">
              ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
            </div>
            <h4>$${product.price}</h4>
          </div>
          <button class="add-to-cart" data-index="${index}"><i class="fa fa-shopping-basket" aria-hidden="true" ></i></button>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', html);
    });

    // Add the event listener for each "Add to Cart" button
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        const product = productsData[index];
        const existingCartItem = cart.find(item => item.description === product.description);
        
        if (existingCartItem) {
          existingCartItem.quantity++;
        } else {
          product.quantity = 1;
          cart.push(product);
        }
        
        updateCart(); // Update the cart when a product is added
        toggleCartSidebar2(); // Open the cart sidebar
        showCartContainer(); 
      });
    });
    
  }

  function updateCart() {
    const cartItemsSidebar = document.getElementById('cart-items-sidebar');
    const cartTotalSidebar = document.getElementById('cart-total-price');
    let cartHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      cartHTML += `
        <div class="cart-item">
          <div class="cart-item-description">${item.description}</div>
          <div class="cart-item-price-quantity">$${item.price} x ${item.quantity}</div>
          <button class="remove-from-cart" data-index="${index}">Remove</button>
        </div>
      `;
      total += item.price * item.quantity;
    });
  
    cartItemsSidebar.innerHTML = cartHTML;
    cartTotalSidebar.innerHTML = `$${total.toFixed(2)}`;
  
    if (cart.length === 0) {
      document.getElementById('cart-total-container').style.display = 'none';
      document.getElementById('cart-empty-message-sidebar').style.display = 'block';
    } else {
      document.getElementById('cart-total-container').style.display = 'block';
      document.getElementById('cart-empty-message-sidebar').style.display = 'none';
    }
  
    // Add event listener for each "Remove" button
    const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
    removeFromCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        removeCartItem(index);
      });
    });
  }
  
  function removeCartItem(index) {
    const itemToRemove = cart[index];
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity--;
    } else {
      cart.splice(index, 1);
    }
    updateCart();
  }
  
  
  
  
  
  
  

  function toggleCartSidebar() {
    const cartSidebar = document.getElementById('cart-sidebar');
    cartSidebar.classList.toggle('open');
    updateCart();
  }
  
  function toggleCartSidebar2() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (!cartSidebar.classList.contains('open')) {
      cartSidebar.classList.add('open');
      showCartContainer();
    }
  }

  const filterButton = document.getElementById('filter-button');
  const filterInput = document.getElementById('filter-input');
  const filterSelect = document.getElementById('filter-select');

  filterInput.addEventListener('input', () => {
    if (filterInput.value.trim() !== '') {
      filterSelect.disabled = true;
    } else {
      filterSelect.disabled = false;
    }
  });

  filterSelect.addEventListener('change', () => {
    if (filterSelect.value !== 'all') {
      filterInput.disabled = true;
    } else {
      filterInput.disabled = false;
    }
  });

  filterButton.addEventListener('click', () => {
    const filterText = filterInput.value.trim().toLowerCase();
    const filterOption = filterSelect.value.toLowerCase();

    let filteredProducts = productsData;

    if (filterOption !== 'all') {
      filteredProducts = productsData.filter(product =>
        product.description.toLowerCase().includes(filterOption)
      );
    }

    filteredProducts = filteredProducts.filter(product =>
      product.description.toLowerCase().includes(filterText)
    );

    renderProducts(filteredProducts);
  });

  function showCartContainer() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'block';
    updateCart(); // Add this line to update the cart when showing the cart container
  }
  
  
  document.getElementById('cart-icon').addEventListener('click', () => {
    toggleCartSidebar();
  });
  
  document.getElementById('close-cart-sidebar').addEventListener('click', () => {
    toggleCartSidebar();
  });
});

document.getElementById('checkout-button').addEventListener('click', () => {
  alert('Checkout functionality is not implemented yet!');
});

const removeCartItemButtons = document.querySelectorAll('.remove-cart-item');
removeCartItemButtons.forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    removeCartItem(index);
  });
});