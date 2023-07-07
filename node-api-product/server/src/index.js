import express from 'express';
import { createProduct, 
        listByProduct, 
        listProducts, 
        removeProduct, 
        updateProduct 
      } from './controllers/ProductController';
import createUser from './controllers/UserController';

const app = express();

app.use(express.json());

app.post('/api/products', createProduct )

app.get('/api/products', listProducts)

app.get('/api/product', listByProduct)

app.put('/api/product/:id', updateProduct)

app.delete('/api/product/:id', removeProduct)

app.post('/api/users', createUser)

app.listen(6050, () => {
  console.log('Server working')
})