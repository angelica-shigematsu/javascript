import products from './mockProducts.js';

 window.addEventListener("load", function() {

    products.forEach((product)=> {
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
});

