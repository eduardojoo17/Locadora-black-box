import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));
