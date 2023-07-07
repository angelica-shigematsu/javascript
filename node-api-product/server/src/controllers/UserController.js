import { openDatabase } from "../database";
import { validatorDataUser } from "../validators/validationUser"

const createUser = async (request, response) => {
  const { fullName, email, password, repeatPassword, level } = request.body;

  const db = await openDatabase();

  if (validatorDataUser(fullName, email, password, level)) return response.status(400).send(`Value empty or invalid type`);

  if (password != repeatPassword) return response.status(400).send(`Password is not match`);

  const user = await db.get(`
    SELECT * FROM user
    WHERE email = ?
    `,[email]);

  if (user) return response.status(400).send(`Already exist ${ email }`);

  const data = await db.run(`
    INSERT INTO user (fullName, email, password, level)
    VALUES(?,?,?,?)
    `, [fullName, email, password, level]);

    return response.status(201).send(data);
}

export default createUser
