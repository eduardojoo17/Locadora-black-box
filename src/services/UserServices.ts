import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { validate } from "class-validator";
import { BadRequestError, NotFoundError } from "../helpers/apiError";
import e from "express";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);
  
  create = async (user: Partial<User>) => {
    const nUser = this.userRepository.create(user);
    const errors = await validate(nUser);
    if (errors.length > 0) {
      throw new BadRequestError("Falha de validação", errors);
    }

    return await this.userRepository.save(nUser);
  };

  list = async () => {
    return await this.userRepository.find();
  };

  update = async (id: number, dados: Partial<User>) => {
    const nUser = await this.userRepository.findOneBy({ id });
    const errors = await validate(nUser);
    if (errors.length > 0) {
          throw new BadRequestError("Falha de validação", errors);
        }
    
    if (!nUser) throw new Error("nUser não encontrado");
    const usuarioAtualizado = this.userRepository.merge(nUser, dados);
    
    return await this.userRepository.save(usuarioAtualizado);
  };

  delete = async (id: number) => {
    const nUser = await this.userRepository.findOneBy({ id });
    
    if (!nUser) throw new NotFoundError("User não encontrado");
    await this.userRepository.delete(id);
    return { message: "Usuário deletado com sucesso" };
  };
}
