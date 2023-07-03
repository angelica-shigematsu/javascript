import { openDatabase } from "../database";
import isEmpty from "../validators/validationEmptyField"

const createProduct = async (request, response) => {
  const { description, price, ingredients, type } = request.body;

  const db = await openDatabase();

  if(isEmpty(description, price, type)) return response.send(`Field empty`)

  const product = await db.get(`
    SELECT * FROM products
    WHERE description = '${description}'`
    )
  if (product) return response.send(`Already exist ${description}`)

  const data = await db.run(`
    INSERT INTO products (description, price, ingredients, type)
    VALUES(?,?,?,?)
    `, [description, price, ingredients, type]);

    return response.send(data)
}

const listProducts = async (request, response) => {
  const db = await openDatabase();

  const data = await db.all(`
    SELECT * FROM products
  `)
  db.close();
  response.send(data);
}

const listByProduct = async (request, response) => {
  const { description } = request.body;
  const db = await openDatabase();

  const product = await db.all(`
    SELECT * FROM products
    WHERE description
    LIKE '%${description}%'`)

  if (!product) response.send(`Not exists ${description} registered`)
  db.close();

  response.send(product)
}

export { 
  createProduct, 
  listProducts,
  listByProduct
}