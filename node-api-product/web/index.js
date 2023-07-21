import products from './mockProducts.js';
import { ListProductAlphaComponent } from './controllers/ListProductController.js';

 window.addEventListener("load", function() {
  section(products);
   
});

window.addEventListener("click", function(event) {
  const option = event.target.id;
  
  switch (option) {
    case "iconeFilter":
      break;
    case "iconeAlpha": 
      const sortProducts = ListProductAlphaComponent(products);
      section(sortProducts)
      break;
  }

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





