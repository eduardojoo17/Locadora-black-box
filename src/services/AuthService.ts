import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../data-source.js";
import { Funcionario } from "../entity/Funcionario.js";
import { ConflictError, NotFoundError } from "../helpers/apiError.js";

export class AuthService {
  private funcRepository = AppDataSource.getRepository(Funcionario);

  registrar = async (dados: {
    nome: string;
    email: string;
    senha: string;
    role?: "admin" | "funcionario";
  }) => {
    const existe = await this.funcRepository.findOneBy({ email: dados.email });
    if (existe) throw new ConflictError("email já cadastrado");

    const hash = await bcrypt.hash(dados.senha, 4);
    const funcionario = this.funcRepository.create({ ...dados, senha: hash });
    return await this.funcRepository.save(funcionario);
  };

  logar = async (email: string, senha: string) => {
    const funcionario = await this.funcRepository.findOneBy({ email });
    if (!funcionario) throw new NotFoundError("Login ou senha incorretos");

    const senhaCorreta = await bcrypt.compare(senha, funcionario.senha);
    if (!senhaCorreta) throw new NotFoundError("Login ou senha invalidos");

    const token = jwt.sign(
      { id: funcionario.id, role: funcionario.role },
      process.env.JWT as string,
      { expiresIn: "8h" },
    );

    return { token };
  };
}
