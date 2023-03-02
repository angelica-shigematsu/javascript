export const listActivivities = async ( request, response ) => {
  const db = await openDatabase();
  const vehicle = await db.all(`
    SELECT * FROM activities`);

    db.close();
    response.send(vehicle);
}

export const createActivities = async (request, response) => {
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
}

export const addCheckin = async( request, response) => {
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