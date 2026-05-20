import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Funcionario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar" })
  nome!: string;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "varchar" })
  senha!: string;

  @Column({ type: "varchar", default: "funcionario" })
  role!: "admin" | "funcionario";
}
