import { AppDataSource } from "../data-source.js";
import { Cliente } from "../entity/Cliente.js";
import { validate } from "class-validator";
import { BadRequestError, NotFoundError } from "../helpers/apiError.js";

export class ClienteService {
  private clienteRepository = AppDataSource.getRepository(Cliente);

  create = async (cliente: Partial<Cliente>) => {
    const ncliente = this.clienteRepository.create(cliente);
    const errors = await validate(ncliente);
    if (errors.length > 0) {
      throw new BadRequestError("Falha de validação", errors);
    }

    return await this.clienteRepository.save(ncliente);
  };

  list = async () => {
    return await this.clienteRepository.find();
  };

  update = async (id: number, dados: Partial<Cliente>) => {
    const cliente = await this.clienteRepository.findOneBy({ id });
    if (!cliente) throw new NotFoundError("cliente não encontrado");
    const clienteAtualizado = this.clienteRepository.merge(cliente, dados);
    const errors = await validate(cliente);
    if (errors.length > 0) {
      throw new BadRequestError("Falha de validação", errors);
    }
    return await this.clienteRepository.save(clienteAtualizado);
  };

  delete = async (id: number) => {
    const cliente = await this.clienteRepository.findOneBy({ id });

    if (!cliente) throw new NotFoundError("cliente não encontrado");
    await this.clienteRepository.delete(id);
    return { message: "Cliente deletado com sucesso" };
  };
}
