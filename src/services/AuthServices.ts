import { AppDataSource } from "../data-source";
import { Funcionario } from "../entity/Funcionario";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  private funcRepository = AppDataSource.getRepository(Funcionario);

  register = async (dados: Partial<Funcionario>) => {
    const existe = await this.funcRepository.findOneBy({ email: dados.email });
    if (existe) throw new Error("Email já cadastrado");

    const hash = await bcrypt.hash(dados.senha, 6);
    const funcionario = this.funcRepository.create({ ...dados, senha: hash });
    return await this.funcRepository.save(funcionario);
  };

  login = async (email: string, senha: string) => {
    const funcionario = await this.funcRepository.findOneBy({ email });
    if (!funcionario) throw new Error("email ou senha invalidas");

    const senhaCorreta = await bcrypt.compare(senha, funcionario.senha);
    if (!senhaCorreta) throw new Error("email ou senha invalidas");

    const token = jwt.sign(
      { id: funcionario.id, role: funcionario.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "8h" }
    );

    return { token };
  };
}
