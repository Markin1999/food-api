import { json } from "express";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAll } from "./controllers/controllers.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(json());
app.use(cors());

app.get("/", getAll);

app.listen(PORT, () => {
  console.log(`Server in ascolto alla porta hhtp://localhost:${PORT}`);
});
