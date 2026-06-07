import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @IsString({ message: "O nome deve ser uma string" })
  nome!: string;

  @Column({ type: "varchar", unique: true })
  @IsEmail({}, { message: "O e-mail não é válido" })
  email!: string;

  @Column({ type: "varchar" })
  @IsNotEmpty({ message: "A senha é obrigatória" })
  senha!: string;

  @Column({ type: "varchar", default: "funcionario" })
  role!: "admin" | "funcionario";
}
