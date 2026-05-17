import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produtos } from './Produtos';
// import { IsNotEmpty, IsString } from 'class-validator'; vamos adicionar a validação de campos obrigatórios


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
 // @IsNotEmpty({ message: 'O nome é obrigatório' })
 //@IsString({ message: 'O nome deve ser uma string' })
 name: string;
    
  @Column()
  cpf: string;
  
  @Column() 
  contato: string;
  
  @Column() 
  endereco: string;
  
  @OneToMany(() => Produtos, (produto) => produto.id)
  produtos: Produtos[]  ; 
}