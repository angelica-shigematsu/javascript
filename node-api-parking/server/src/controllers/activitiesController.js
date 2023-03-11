import { openDatabase } from "../database";

export const listActivivities = async ( request, response ) => {
  const db = await openDatabase();
  const vehicle = await db.all(`
    SELECT * FROM activities`);

    db.close();
    response.send(vehicle);
}

export const addCheckin = async (request, response) => {
  const { label } = request.body;

  const db = await openDatabase();

  const vehicle = await db.get(`
    SELECT * FROM vehicles 
        WHERE label = ?
  `, [label]);

  if (vehicle) {
    const checkin_at = (new Date()).getTime();
    await db.run(`
      INSERT INTO activities (checkin_at, vehicle_id)
      VALUES(?, ?)
      `, [checkin_at, vehicle.id]
    );
    db.close();
    response.send({
      vehicle_id: vehicle.id,
      checkin_at: checkin_at,
      message: `Veículo [${vehicle.label}] entrou no estacionamento`
    })
    return;
  }

  response.send('Veículo não cadastrado no sistema');
  return
}

export const addCheckout = async( request, response) => {
  const { label, price } = request.body;
  const db = await openDatabase();

  const checkout_at = new Date().getTime();
  
  const vehicle = await db.get(`
      SELECT * FROM vehicles 
        WHERE label = ?
    `,[label]);

  if (vehicle) {
    const activityOpen = await db.get(`
      SELECT *
        FROM activities
        WHERE vehicle_id = ? 
    `, [vehicle.id]);

  if(activityOpen) {
    const activities = await db.run(`
    UPDATE activities
      SET checkout_at = ?,
      price = ?
    WHERE id = ?
  `, [checkout_at, price, activityOpen.id]);
    db.close();
    response.send(activities)
    return;
    }
  }
  response.send("O checkin não foi feito");
  return;
}

export const removeActivity =  async(request , response) => {
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
}