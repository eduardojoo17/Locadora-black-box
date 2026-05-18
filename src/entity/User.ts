import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Locacoes } from "./Locacoes";
// import { IsNotEmpty, IsString } from 'class-validator'; vamos adicionar a validação de campos obrigatórios

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  // @IsNotEmpty({ message: 'O nome é obrigatório' })
  //@IsString({ message: 'O nome deve ser uma string' })
  name!: string;

  @Column("varchar")
  cpf!: string;

  @Column("varchar")
  contato!: string;

  @Column("varchar")
  endereco!: string;

  @OneToMany(() => Locacoes, (locacao) => locacao.usuario)
  locacoes: Locacoes[];
}
