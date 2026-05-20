import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Locacoes } from "./Locacoes.js";
import { IsNotEmpty, IsString } from "class-validator";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @IsString({ message: "O nome deve ser uma string" })
  nome!: string;

  @Column("varchar")
  @IsNotEmpty({ message: "O CPF é obrigatório" })
  @IsString({ message: "O CPF deve ser uma string" })
  cpf!: string;

  @Column("varchar")
  @IsNotEmpty({ message: "O contato é obrigatório" })
  @IsString({ message: "O contato deve ser uma string" })
  contato!: string;

  @Column("varchar")
  @IsNotEmpty({ message: "O endereço é obrigatório" })
  @IsString({ message: "O endereço deve ser uma string" })
  endereco!: string;

  @OneToMany(() => Locacoes, (locacao) => locacao.cliente)
  locacoes: Locacoes[];
}
