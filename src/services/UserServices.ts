import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  create = async (user: Partial<User>) => {
    const nUser = this.userRepository.create(user);
    return await this.userRepository.save(nUser);
  };

  list = async () => {
    return await this.userRepository.find();
  };

  update = async (id: number, dados: Partial<User>) => {
    const usuario = await this.userRepository.findOneBy({ id });
    if (!usuario) throw new Error("usuario não encontrado");
    const usuarioAtualizado = this.userRepository.merge(usuario, dados);
    return await this.userRepository.save(usuarioAtualizado);
  };

  delete = async (id: number) => {
    const usuario = await this.userRepository.findOneBy({ id });
    if (!usuario) throw new Error("usuario não encontrado");
    await this.userRepository.delete(id);
    return { message: "Usuário deletado com sucesso" };
  };
}
