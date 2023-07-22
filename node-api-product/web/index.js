import { products, order }  from './mockProducts.js';
import { ListProductAlpha, 
          ListByPrice5To25,
          ListByPrice26To45,
          ListByPrice46ToMore
         } from './controllers/ListProductController.js';
import { AddProductCart } from './controllers/AddProductCartController.js';

import ListProductsCart from './controllers/ListProductsCartController.js'

 window.addEventListener("load", function() {
  section(products);
  menuHorinzontal();
  menuFilter();
});

window.addEventListener("click", function(event) {
  const option = event.target.id;

  let products = []

  let sortProducts = [];
  
  switch (option) {
    case "firstFilter":
      sortProducts = ListByPrice5To25(products)
      section(sortProducts)
      break;
    case "secondFilter":
      sortProducts = ListByPrice26To45(products)
      section(sortProducts)
      break;
    case "thirdFilter":
        sortProducts = ListByPrice46ToMore(products)
        section(sortProducts)
        break;
    case "iconeAlpha": 
      sortProducts = ListProductAlpha(products);
      section(sortProducts)
      break;
    case "iconeCart":
      products = ListProductsCart(order);
      section(products)
      break;
    case option: 
       AddProductCart(option);
       break;
  }
  sortProducts = []
});

const section = (allProducts) => {
  document.getElementById('product').innerHTML = null;

  allProducts.forEach((product)=> {
    document.getElementById('product').innerHTML +=
    `<section id="product">
    <form action="" method="Post">
      <img src="${product.photo}" id="imgProduct"alt="">

      <div class="card-title">
        <h2>${product.name}</h2>
        <p class="description">(${product.description})</p>
      </div>

      <div class="card-details">
        <p class="price">R$ ${product.price}</p>
        <button type="button" class="btn btn-entrar" id=${product.id}>Comprar</button>
      </div>
    </form>
  </section>
`;
})
}

const menuHorinzontal = () => {
  document.getElementById('menu-horinzontal').innerHTML +=
  `<div class="item">
    <img src="./assets/img/menu/Logo_Tegrafood.png" id="logo"alt="Logo do restaurante">
  </div>
  <ul>
    <li><a href="#" id="menu-lateral">Todos</a></li>
    <li><a href="#" id="menu-lateral">Pizza</a></li>
    <li><a href="#" id="menu-lateral">Pastel</a></li>
    <li><a href="#" id="menu-lateral">Açaí</a></li>
    <li><a href="#" id="menu-lateral">Bebidas</a></li>
  </ul>
</div>`
}

const menuFilter = () => {
  document.getElementById('menu-filter').innerHTML +=
  `<div class="header-menu">
  <a href="#" class="submenu">Produtos</a>
  <a href="#" class="submenu">Todos</a>
  </div>
  <div class="filter">
  <div class="dropdown">
    <div class="dropdown-content">
      <button class="btn-price btn-entrar" id="firstFilter">R$ 5 à R$25</button>
      <button class="btn-price btn-entrar" id="secondFilter">R$ 26 à R$45</button>
      <button class="btn-price btn-entrar" id="thirdFilter">R$ 46 ou mais</button>
    </div>
    <img src="./assets/img/menu/filter_alt.png" id="iconeFilter" alt=""></img>
  </div>
  <img src="./assets/img/menu/sort_by_alpha.png" id="iconeAlpha" alt="">
  </div>`
}





