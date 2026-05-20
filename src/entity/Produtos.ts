import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Locacoes } from "./Locacoes.js";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export enum Status {
  DISP = "disponivel",
  ALU = "alugado",
}

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @IsNotEmpty({ message: "O título é obrigatório" })
  @IsString({ message: "O título deve ser uma string" })
  titulo!: string;

  @Column("varchar")
  @IsNotEmpty({ message: "A categoria é obrigatória" })
  @IsString({ message: "A categoria deve ser uma string" })
  categoria!: string;

  @Column({ type: "enum", enum: Status, default: Status.DISP })
  status!: Status;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  @IsNotEmpty({ message: "O preço diário é obrigatório" })
  preco_diaria!: number;

  @OneToMany(() => Locacoes, (locacao) => locacao.produtos)
  locacoes: Locacoes[];
}
