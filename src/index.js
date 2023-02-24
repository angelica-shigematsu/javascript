import express from 'express';
import { openDatabase } from './database.js';

const app = express();

app.use(express.json());

app.get('/api/vehicles', async (request, response) => {
  const db = await openDatabase();

  const data = await db.all(`
    SELECT * FROM vehicles;
  `);
  db.close();
  response.send(data);
})

app.post('/api/vehicles', async (request, response) => {
  const { model, label, observation, type, owner } = request.body;
  const db = await openDatabase();
  const data = await db.run(`
      INSERT INTO vehicles (model, label, observation, type, owner)
      VALUES(?, ?, ?, ?, ?)
  `, [model, label, observation, type, owner]);

  response.send(data);
}) 

app.put('/api/vehicles/:id', async (request, response) => {
  const { model, label, observation, type, owner } = request.body;
  const { id } = request.body;
  const db = await openDatabase();
  let data = null;
  const vehicle = await db.get(`
    SELECT * FROM vehicles WHERE id = ?
  `,[id]);
  if (vehicle) {
   data =  await db.run(`
    UPDATE vehicles
      SET model = ?,
          label = ?,
          observation = ?,
          type = ?,
          owner = ?
          where id = ?
  `, [model, label, observation, type, owner, id]);
  }
  db.close();
  response.send(data || {});
  return;
  
}) 

app.delete('/api/vehicles/:id', async (request, response) => {
  const { id } = request.params;

  const db = await openDatabase();

  const vehicle = await db.get(`
  SELECT * FROM vehicles WHERE id = ?
`,[id]);

if (vehicle) {
  await db.run(`
    DELETE FROM vehicles
      where id = ?
 `, [id]);
 }
 db.close();
 response.send("Removido com sucesso!");
})

app.listen(3000, () =>{
  console.log('Servidor funcionando');
})