import { menuHorinzontal } from './index.js';
import { products, order } from './mockProducts.js'

window.addEventListener('load', () => {
  menuHorinzontal();
  orderCart(order);
});

const orderCart = (cart) => {
  let totalPriceByProduct = [];
  let product = []
  cart.forEach(productCart => {
    product = products.filter(data => data.id == productCart.productId)
    document.getElementById('cart').innerHTML += 
    `<form action="" method="Post">
      <input name="id" value=${product[0].id} hidden>
      <img src="${product[0].photo}" id="imgProduct"alt="">
      <div class="card-title">
        <h2>${product[0].name}</h2>
        <p class="description">(${product[0].description})</p>
      </div>

      <div class="card-details">
        <p class="price">R$ ${product[0].price}</p>
        <select>
          <option value="${productCart.quantity}" selected>${productCart.quantity}X</option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="3">3x</option>
          <option value="4">4x</option>
          <option value="5">5x</option>
          <option value="6">6x</option>
          <option value="7">7x</option>
          <option value="8">8x</option>
          <option value="9">9x</option>
          <option value="10">10x</option>
        </select>
      </div>
      <img src="./assets/img/cart/delete.png" id="iconeDelete" alt="">
    </form>
    `;
    totalPriceByProduct.push(product[0].price * productCart.quantity)
  })
  cardValueTotal(totalPrice(totalPriceByProduct));
}

const cardValueTotal = (total) => {
  document.getElementById('card-price-total').innerHTML = 
  `<div class="card-product-total">
    <p class="price-total" id="total">R$${total}</p>
  </div>
  <div class="card-product-total">
    <a href="#" class="link-calculate-frete">Calcular</a>
  </div>
  <div class="card-product-total">
    <p class="price-total">R${total}</p>
  </div>
  `
}

const totalPrice = (sumByProduct) => {
  return sumByProduct.reduce((price, amount) => price + amount).toFixed(2);
}

