import products from './mockProducts.js';
import { ListProductAlpha, 
          ListByPrice5To25,
          ListByPrice26To45,
          ListByPrice46ToMore
         } from './controllers/ListProductController.js';

 window.addEventListener("load", function() {
  section(products);
   
});

window.addEventListener("click", function(event) {
  const option = event.target.id;

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
        <button type="button" class="btn btn-entrar">Comprar</button>
      </div>
    </form>
  </section>
`;
})
}





