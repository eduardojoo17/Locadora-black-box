import { AppDataSource } from '../data-source';
import { User } from '../entity/User';

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
    await this.userRepository.update(id, dados);
    return await this.userRepository.findOneBy({ id });
    };

  delete = async (id: number) => {
    await this.userRepository.delete(id);
    return { message: 'Usuário deletado com sucesso' };
    };
} 