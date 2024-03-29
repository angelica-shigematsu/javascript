import { products }  from './mockProducts.js';
import { ListProductAlpha, 
          ListByPrice5To25,
          ListByPrice26To45,
          ListByPrice46ToMore,
          FilterByDrink,
          FilterByPizza,
          FilterByPastel,
          FilterByAcai
         } from './controllers/ListProductController.js';
import { AddProductCart } from './controllers/AddProductCartController.js';

 window.addEventListener("load", function() {
  section(products);
  menuLateral();
  menuHorinzontal();
});
let filter = products;
//menu laterial
window.addEventListener("click", function(event) {
  const optionMenu = event.target.childNodes[0].data;

  switch (optionMenu) {
    case "Todos":
      section(products)
      break;
    case "Pizza": 
      filter = FilterByPizza(products)
      section(filter)
      break;
    case "Pastel": 
      filter = FilterByPastel(products)
      section(filter)
      break;
    case "Açaí": 
      filter = FilterByAcai(products)
      section(filter)
      break;
    case "Bebidas": 
      filter = FilterByDrink(products)
      section(filter)
      break;
  }
});

//menu com filtro de preço e alfabético
window.addEventListener("click", function(event) {
  const option = event.target.id;

  let sortProducts = [];
  
  switch (option) {
    case "firstFilter":
      sortProducts = ListByPrice5To25(filter)
      section(sortProducts)
      break;
    case "secondFilter":
      sortProducts = ListByPrice26To45(filter)
      section(sortProducts)
      break;
    case "thirdFilter":
        sortProducts = ListByPrice46ToMore(filter)
        section(sortProducts)
        break;
    case "iconeAlpha": 
      sortProducts = ListProductAlpha(filter);
      section(sortProducts)
      break;
    case option: 
      AddProductCart(option);
       break;
  }
  sortProducts = []
});

const section = (allProducts) => {
  document.getElementById('product').innerHTML = "";

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

const menuLateral = () => {
  document.getElementById('menu-lateral').innerHTML +=
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

const menuHorinzontal = () => {
  document.getElementById('menu-horinzontal').innerHTML += `
    <a href="cart.html" id="iconeCart"><img src="./assets/img/menu/shopping_cart.png"  id="iconeCart" alt="Carrinho de compra"></a>
    <img src="./assets/img/menu/notifications.png" id="iconeNotification" alt="Notificação">
    <img src="./assets/img/menu/Perfil.png" id="iconePerfil"alt="Imagem do perfil">
  `
}

export { menuHorinzontal }



