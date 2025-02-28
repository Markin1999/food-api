import db from "../initDB.js";

export const getAll = async (req, res) => {
  try {
    const ricette = await db.many(`SELECT * FROM ricette`);
    return res.status(200).json(ricette);
  } catch (error) {
    return res.status(500).json({ message: "errore nella richiesta", error });
  }
};

export const getOneById = async (req, res) => {
  const { id } = req.params;
  try {
    const ricetta = await db.oneOrNone(`SELECT * FROM ricette WHERE id=$1`, id);
    return res.status(201).json(ricetta);
  } catch (error) {
    return res.status(500).json({ message: "errore nella richiesta", error });
  }
};

export const filterByCategory = async (req, res) => {
  const { categoria } = req.params;
  try {
    if (categoria === "all") {
      const category = await db.many(`SELECT * FROM ricette`);
      return res.status(201).json(category);
    }
    const category = await db.many(
      `SELECT * FROM ricette WHERE categoria=$1`,
      categoria
    );
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: "errore nella richiesta", error });
  }
};
