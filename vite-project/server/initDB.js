import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL } = process.env;

const db = pgPromise()(DATABASE_URL);

export const setupDb = async () => {
  await db.none(`DROP TABLE IF EXISTS ricette;
        CREATE TABLE ricette(
        id SERIAL NOT NULL PRIMARY KEY,
        titolo TEXT NOT NULL,
        ingredienti TEXT[] NOT NULL,
        categoria TEXT NOT NULL
        )`);

  console.log("Tabella creata correttamente");
};

export default db;
