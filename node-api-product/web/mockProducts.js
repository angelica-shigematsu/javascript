const products = [
  {
    id: 1,
    name: "Torta de Leite Ninho",
    description: "Massa de Baunilha; Creme de ninho Tradicional; Morango; Chantilly",
    type: "torta",
    price: 20.60,
    photo: './assets/img/products/torta.png'
  },
  {
    id: 2,
    name: "Pizza Marguerita",
    description: "Muçarela, tomate, majericão , orégano",
    type: "pizza",
    price: 50.60,
    photo: './assets/img/products/pizza.png'
  },
]

const order = [
  {
    productId: 1,
    quantity: 3
  },
  {
    productId: 2,
    quantity: 1
  }
]

export { 
  products, 
  order}