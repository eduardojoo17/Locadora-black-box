import "reflect-metadata";
import { DataSource, type DataSourceOptions } from "typeorm";
import { User } from "./entity/User";
import { Produtos } from "./entity/Produtos";
import { Locacoes } from "./entity/Locacoes";
import { Funcionario } from "./entity/Funcionario";

const options: DataSourceOptions = {
  type: (process.env.DB_TYPE as "postgres") || "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Produtos, Locacoes, Funcionario],
  migrations: [],
  subscribers: [],
};

export const AppDataSource = new DataSource(options);
