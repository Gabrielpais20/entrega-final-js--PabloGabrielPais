// document.addEventListener('DOMContentLoaded', () => {
//     const shopContainer = document.querySelector('.products');
//     const cartContainer = document.querySelector('.cart-products .card-items');
//     const totalContainer = document.querySelector('.price-total');
//     const countProduct = document.querySelector('.count-product');

//     let productsList = [
//         { id: 1, name: 'rexona power dry', price: 2000, image: 'rexona(comp).jpg' },
//         { id: 2, name: 'belo', price: 1850, image: 'belo-desodorante(comp).jpg' },
//         { id: 3, name: 'clinical strenght', price: 7850, image: 'clinical-strenght(comp).jpg' },
//         { id: 4, name: 'adidas', price: 9000, image: 'desodoranteadidas(comp).jpg' },
//         { id: 5, name: 'dove blanco', price: 2015, image: 'doveblanco(comp).jpg' },
//         { id: 6, name: 'native blanco', price: 15000, image: 'native-blanco(comp).jpg' },
//         { id: 7, name: 'salt', price: 10000, image: 'salt-desodorante (comp).jpg' },
//         { id: 8, name: 'vichy', price: 8000, image: 'vichy-desodorante(comp).jpg' }
//     ];

//     let cart = [];

//     function renderProducts() {
//         shopContainer.innerHTML = productsList.map(product => `
//             <div class="carts">
//                 <div>
//                     <img src="/multimedia/img/${product.image}" alt="${product.name}">
//                     <p><span>$</span>${product.price}</p>
//                 </div>
//                 <p class="title">${product.name}</p>
//                 <a href="#" data-id="${product.id}" class="btn-add-cart">add to cart</a>
//             </div>
//         `).join('');

//         document.querySelectorAll('.btn-add-cart').forEach(button => {
//             button.addEventListener('click', event => {
//                 event.preventDefault();
//                 addToCart(parseInt(button.getAttribute('data-id')));
//             });
//         });
//     }

//      function addToCart(id) {
//          const product = productsList.find(item => item.id === id);
//          const productInCart = cart.find(item => item.id === id);
//          if (productInCart) {
//              productInCart.quantity++;
//          } else {
//              cart.push({ ...product, quantity: 1 });
//          }
//          updateCart();
//      }

   
//      function removeFromCart(id) {
//          const productIndex = cart.findIndex(item => item.id === id);
//          if (productIndex !== -1) {
//              cart[productIndex].quantity--;
//              if (cart[productIndex].quantity === 0) {
//                  cart.splice(productIndex, 1);
//              }
//          }

//          updateCart();
//      }




//      function updateCart() {
//          cartContainer.innerHTML = cart.map(item => `
//              <div class="item">
//                  <img src="/multimedia/img/${item.image}" alt="${item.name}">
//                  <div class="item-content">
//                      <h5>${item.name}</h5>
//                      <h5 class="cart-price">$${item.price.toFixed(2)}</h5>
//                      <h6>Cantidad: ${item.quantity}</h6>
//                  </div>
//                  <span class="delete-product" data-id="${item.id}">X</span>
//              </div>
//          `).join('');

//          const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//          totalContainer.textContent = total.toFixed(2);

//          countProduct.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

//          document.querySelectorAll('.delete-product').forEach(button => {
//              button.addEventListener('click', () => {
//                  removeFromCart(parseInt(button.getAttribute('data-id')));
//              });
//          });
//      }

//      window.showCart = function() {
//          document.getElementById('products-id').classList.add('show-cart');
//      }

//      window.closeBtn = function() {
//          document.getElementById('products-id').classList.remove('show-cart');
//      }

//      renderProducts();
//  });






 document.addEventListener('DOMContentLoaded', () => {
    const shopContainer = document.querySelector('.products');
    const cartContainer = document.querySelector('.cart-products .card-items');
    const totalContainer = document.querySelector('.price-total');
    const countProduct = document.querySelector('.count-product');

    let productsList = [
        { id: 1, name: 'rexona power dry', price: 2000, image: 'rexona(comp).jpg' },
        { id: 2, name: 'belo', price: 1850, image: 'belo-desodorante(comp).jpg' },
        { id: 3, name: 'clinical strenght', price: 7850, image: 'clinical-strenght(comp).jpg' },
        { id: 4, name: 'adidas', price: 9000, image: 'desodoranteadidas(comp).jpg' },
        { id: 5, name: 'dove blanco', price: 2015, image: 'doveblanco(comp).jpg' },
        { id: 6, name: 'native blanco', price: 15000, image: 'native-blanco(comp).jpg' },
        { id: 7, name: 'salt', price: 10000, image: 'salt-desodorante(comp).jpg' },
        { id: 8, name: 'vichy', price: 8000, image: 'vichy-desodorante(comp).jpg' }
    ];

    let cart = JSON.parse(localStorage.getItem('cartDesodorantes')) || [];

    function renderProducts() {
        shopContainer.innerHTML = productsList.map(product => `
            <div class="carts">
                <div>
                    <img src="/multimedia/img/${product.image}" alt="${product.name}">
                    <p><span>$</span>${product.price}</p>
                </div>
                <p class="title">${product.name}</p>
                <a href="#" data-id="${product.id}" class="btn-add-cart">add to cart</a>
            </div>
        `).join('');

        document.querySelectorAll('.btn-add-cart').forEach(button => {
            button.addEventListener('click', event => {
                event.preventDefault();
                addToCart(parseInt(button.getAttribute('data-id')));
            });
        });
    }

    function addToCart(id) {
        const product = productsList.find(item => item.id === id);
        const productInCart = cart.find(item => item.id === id);
        if (productInCart) {
            productInCart.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }

    function removeFromCart(id) {
        const productIndex = cart.findIndex(item => item.id === id);
        if (productIndex !== -1) {
            cart[productIndex].quantity--;
            if (cart[productIndex].quantity === 0) {
                cart.splice(productIndex, 1);
            }
        }
        updateCart();
    }

    function updateCart() {
        cartContainer.innerHTML = cart.map(item => `
            <div class="item">
                <img src="/multimedia/img/${item.image}" alt="${item.name}">
                <div class="item-content">
                    <h5>${item.name}</h5>
                    <h5 class="cart-price">$${item.price.toFixed(2)}</h5>
                    <h6>Cantidad: ${item.quantity}</h6>
                </div>
                <span class="delete-product" data-id="${item.id}">X</span>
            </div>
        `).join('');

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        totalContainer.textContent = total.toFixed(2);

        countProduct.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

        document.querySelectorAll('.delete-product').forEach(button => {
            button.addEventListener('click', () => {
                removeFromCart(parseInt(button.getAttribute('data-id')));
            });
        });

        localStorage.setItem('cartDesodorantes', JSON.stringify(cart));
    }

    window.showCart = function() {
        document.getElementById('products-id').classList.add('show-cart');
    }

    window.closeBtn = function() {
        document.getElementById('products-id').classList.remove('show-cart');
    }

    renderProducts();
    updateCart();
});