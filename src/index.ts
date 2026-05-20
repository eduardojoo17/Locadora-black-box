import express from "express";
import type { Application } from "express";
import { AppDataSource } from "./data-source.js";
import { produtoRoutes } from "./routes/ProdutoRoutes.js";
import { UserRoutes } from "./routes/UserRoutes.js";
import { locacoesRoutes } from "./routes/locacoesRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/produto", produtoRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/locacoes", locacoesRoutes);
app.use(errorMiddleware);


AppDataSource.initialize()
  .then(() => {
    console.log("Banco conectado!");
    app.listen(process.env.PORT, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("Erro ao conectar no banco: ", error));
