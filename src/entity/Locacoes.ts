import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Produtos } from "./Produtos.js";
import { Cliente } from "./Cliente.js";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

@Entity()
export class Locacoes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date", name: "data_locacao" })
  @IsNotEmpty({ message: "A data de locação é obrigatória." })
  @IsDateString({}, { message: "A data de locação deve ser uma data válida." })
  dataLocacao: string | Date;

  @Column({ type: "date", name: "data_devolucao_prevista" })
  @IsNotEmpty({ message: "A data de devolução prevista é obrigatória." })
  @IsDateString(
    {},
    { message: "A data de devolução prevista deve ser uma data válida." },
  )
  dataDevolucaoPrevista: string | Date;

  @Column({ type: "date", name: "data_devolucao_real", nullable: true })
  @IsDateString(
    {},
    { message: "A data de devolução real deve ser uma data válida." },
  )
  dataDevolucaoReal: string | Date | null;

  @ManyToOne(() => Produtos, (produtos) => produtos.locacoes)
  @JoinColumn({ name: "produto_id" })
  @IsNotEmpty({ message: "O produto é obrigatório." })
  @IsString({ message: "O produto deve ser uma string." })
  produtos: Produtos;

  @ManyToOne(() => Cliente, (cliente) => cliente.locacoes)
  @JoinColumn({ name: "cliente_id" })
  cliente: Cliente;
}
