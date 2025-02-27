import db from "../initDB.js";

export const getAll = async (req, res) => {
  const ricette = await db.many(`SELECT * FROM ricette`);
  return res.status(200).json(ricette);
};
