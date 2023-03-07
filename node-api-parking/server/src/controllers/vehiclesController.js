import { openDatabase } from "../database";

export const listVehicles = async (request, response) => {
  const db = await openDatabase();

  const data = await db.all(`
    SELECT * FROM vehicles;
  `);
  db.close();
  response.send(data);
}

export const createVehicle = async (request, response) => {
  const { model, label, observation, type, owner } = request.body;
  const db = await openDatabase();
  const data = await db.run(`
      INSERT INTO vehicles (model, label, observation, type, owner)
      VALUES(?, ?, ?, ?, ?)
  `, [model, label, observation, type, owner]);

  response.send(data);
}

export const alterVehicle = async (request, response) => {
  const { model, label, observation, type, owner } = request.body;
  const { id } = request.params;
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
}

export const removeVehicle = async (request, response) => {
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
}


