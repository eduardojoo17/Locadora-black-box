import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";
import { produtoRoutes } from "./routes/produtoRoutes.js";
import { clienteRoutes } from "./routes/clienteRoutes.js";
import { locacoesRoutes } from "./routes/locacoesRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { authRoutes } from "./routes/authRoutes.js";
import { verificar } from "./middlewares/authMiddleware.js";
import { somenteAdmin } from "./middlewares/authMiddleware.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/produto", verificar, produtoRoutes);
app.use("/api/cliente", verificar, clienteRoutes);
app.use("/api/locacoes", verificar, locacoesRoutes);
app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));
