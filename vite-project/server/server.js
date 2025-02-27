import { json } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  getAll,
  getOneById,
  filterByCategory,
} from "./controllers/controllers.js";

dotenv.config();

const app = express();
const PORT = process.env.VITE_PORT;

app.use(json());
app.use(cors());

app.get("/ricette", getAll);
app.get("/ricette/:id", getOneById);
app.get("/categoria/:categoria", filterByCategory);

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta http://localhost:${PORT}`);
});
