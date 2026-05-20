import "reflect-metadata";
import { DataSource, type DataSourceOptions } from "typeorm";
import { Cliente } from "./entity/Cliente.js";
import { Produtos } from "./entity/Produtos.js";
import { Locacoes } from "./entity/Locacoes.js";
import { Funcionario } from "./entity/Funcionario.js";

const options: DataSourceOptions = {
  type: (process.env.DB_TYPE as "postgres") || "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Cliente, Produtos, Locacoes, Funcionario],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
