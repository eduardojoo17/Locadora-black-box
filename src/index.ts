import "reflect-metadata";
import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";
import { produtoRoutes } from "./routes/ProdutoRoutes.js";
import { UserRoutes } from "./routes/UserRoutes.js";
import { locacoesRoutes } from "./routes/locacoesRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";
import { authMiddleware } from "./midlleware/authMiddleware.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// rotas públicas
app.use("/api/auth", authRoutes);

// rotas protegidas (qualquer funcionario logado)
app.use("/api/user", authMiddleware, UserRoutes);
app.use("/api/locacoes", authMiddleware, locacoesRoutes);
app.use("/api/produto", authMiddleware, produtoRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));
