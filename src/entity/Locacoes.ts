import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Produtos } from "./Produtos.js";
import { User } from "./User.js";

@Entity()
export class Locacoes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date", name: "data_locacao" })
  dataLocacao: string | Date;

  @Column({ type: "date", name: "data_devolucao_prevista" })
  dataDevolucaoPrevista: string | Date;

  @Column({ type: "date", name: "data_devolucao_real", nullable: true })
  dataDevolucaoReal: string | Date | null;

  @ManyToOne(() => Produtos, (produtos) => produtos.locacoes)
  @JoinColumn({ name: "produto_id" })
  produtos: Produtos;

  @ManyToOne(() => User, (usuario) => usuario.locacoes)
  @JoinColumn({ name: "cliente_id" })
  usuario: User;
}
