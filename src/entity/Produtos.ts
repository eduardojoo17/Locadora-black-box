import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column("int")
  preco_diaria!: number;
}
