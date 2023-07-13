import { openDatabase } from "../database";
import { validatorData } from "../validators/validationProduct"

const createProduct = async (request, response) => {
  const { name, description, category, price, photo } = request.body;

  const db = await openDatabase();

  if(validatorData(name, description, price, category, photo)) return response.status(400).send(`Value empty or invalid type`);

  const product = await db.get(`
    SELECT * FROM food
    WHERE name = ?
    `,[name]);

  if (product) return response.status(403).send(`Already exist ${name}`);

  const data = await db.run(`
    INSERT INTO food (name, description, category, price, photo)
    VALUES(?,?,?,?,?)
    `, [name, description, category, price, photo]);

    return response.status(201).send(data);
}

const listProducts = async (request, response) => {
  const db = await openDatabase();

  const data = await db.all(`
    SELECT * FROM food
    ORDER BY name
  `)
  db.close();
  response.status(200).send(data);
}

const listByProduct = async (request, response) => {
  const { name } = request.query
  const db = await openDatabase();

  const product = await db.all(`
    SELECT * FROM food
    WHERE name
    LIKE '%${name}%'`);

  if (!product) response.status(400).send(`Not exists ${name} registered`);
  db.close();

  response.status(200).send(product)
}

const updateProduct = async (request, response) => {
  const { id } = request.params;
  const { name, description, category, price, photo } = request.body;

  const db = await openDatabase();

  if(validatorData(name, description, price, category, photo)) return response.status(400).send(`Value empty or invalid type`);

   await db.run(`
      UPDATE food 
        SET name = ?, 
        description = ?, 
        price = ?, 
        category = ?, 
        photo = ?
      WHERE id = ?
   `, [name, description, price, category, photo, id]);
    
   response.status(200).send(`${name} updated successfully`);
}

const removeProduct = async (request, response) => {
  const { id } = request.params;

  const db = await openDatabase();

  const product = db.get(`
    SELECT * FROM food
    WHERE id = '${id}'
  `)

  if (!product) response.status(403).send(`Food does not exists`);

  await db.run(`
    DELETE FROM food
    WHERE id = '${id}'
  `)

  response.status(200).send(`Removed food ${id}`);
}

export { 
  createProduct, 
  listProducts,
  listByProduct,
  updateProduct,
  removeProduct
}