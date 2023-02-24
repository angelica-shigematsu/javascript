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
          vehicle_type = ?,
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

app.get('/api/activities', async ( request, response ) => {
  const db = await openDatabase();
  const vehicle = await db.all(`
    SELECT * FROM activities`);

    db.close();
    response.send(vehicle);
})
  
app.post('/api/activities/:id', async (request, response) => {
  const { id } = request.params;
  const checkin_at = new Date().getTime();
  const db = await openDatabase();

  const vehicle = await db.all(`
    SELECT * FROM vehicles 
        WHERE id = ?
  `, [id]);

  if (vehicle) {

    await db.run(`
      INSERT INTO activities (checkin_at, vehicle_id)
      VALUES(?, ?)
      `, [checkin_at, id]
    );
    db.close();
    response.send('Veículo registrado com sucesso');
    return;
  }

  response.send('Veículo não cadastrado no sisitema');
});

app.put('/api/activies/:id', async( request, response) => {
  const { id } = request.params;
  const db = await openDatabase();
  let price = 0;

  const checkout_at = new Date().getTime();
  const activities = await db.get(`
    SELECT * FROM activities WHERE id = ?
  `,[id]);
  
  const vehicleId = activities.vehicle_id;
  const checkin_at = activities.checkin_at;

  if (activities) {
    const vehicle = await db.get(`
      SELECT * FROM vehicles WHERE id = ?
    `,[vehicleId]);

    const typeVehicle = await db.get(`
      SELECT * FROM vehicles_types
       WHERE id= ?
    `,[vehicle.type]);

    const prices = await db.get(`
      SELECT * FROM prices
       WHERE id= ?
    `,[typeVehicle.price_id]);


    const diferencaHoras = (checkout_at - checkin_at)/ (1000 * 60 * 60);

    price = diferencaHoras * prices.price;

    const activities = await db.run(`
    UPDATE activities
      SET checkout_at = ?,
      price = ?
    WHERE vehicle_id = ?
  `, [checkout_at, price, vehicleId]);
    db.close();
    response.send(activities)
    return;
  }
  response.send("O checkin não foi feito");
  return;
})

app.delete('/api/activities/:id', async(request , response) => {
  const { id } = request.params;
  const db = await openDatabase();

  const activies = await db.get(`
    SELECT * FROM activities
    WHERE id = ?
  `,[id]);

  if (activies) {
    await db.run(`
    DELETE FROM activities 
      WHERE id=?
  `,[id]);
  response.send("Excluído com sucesso!");
  }
  response.send("Não existe essa atividade cadastrada!");
})

app.listen(3000, () =>{
  console.log('Servidor funcionando');
})