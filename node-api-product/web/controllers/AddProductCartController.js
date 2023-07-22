import { products, order }from '../mockProducts.js';

const AddProductCart = (productId) => {
  const product = products.find(product => product.id == productId)
  
  order.push(product);
  
  return order;
}

export {
  AddProductCart
}