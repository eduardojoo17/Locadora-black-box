import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Locacoes } from "./Locacoes.js";

export enum Status {
  DISP = "disponivel",
  ALU = "alugado",
}

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  titulo!: string;

  @Column("varchar")
  categoria!: string;

  @Column({ type: "enum", enum: Status, default: Status.DISP })
  status!: Status;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  preco_diaria!: number;

  @OneToMany(() => Locacoes, (locacao) => locacao.produtos)
  locacoes: Locacoes[];
}
