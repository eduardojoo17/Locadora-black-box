import { UserService } from "../services/UserServices";

export class UserController { 
  private userService = new UserService();

  create = async (req: any, res: any) => { 
    try { 
      const user = await this.userService.create(req.body); //
      res.status(201).json(user); 
    } catch (error) {
      res.status(400).json({ error: 'Erro ao criar usuário' });
    }
  };

  list = async (req: any, res: any) => {
    try {
      const users = await this.userService.list();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao listar usuários' });
    }
  };

  update = async (req: any, res: any) => {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.update(id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao atualizar usuário' });
    }
  };

  delete = async (req: any, res: any) => {
    try {
      const id = parseInt(req.params.id);
      const result = await this.userService.delete(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: 'Erro ao deletar usuário' });
    }
  };
}