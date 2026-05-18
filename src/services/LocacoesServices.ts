import { AppDataSource } from "../data-source.js";
import { Locacoes } from "../entity/Locacoes.js";
import { Produtos, Status } from "../entity/Produtos.js";

export class locacoesService {
  private locacoesRepository = AppDataSource.getRepository(Locacoes);
  private produtosRepository = AppDataSource.getRepository(Produtos);

  create = async (loc: Partial<Locacoes>) => {
    const produtoId = loc.produtos?.id;
    if (!produtoId) {
      throw new Error(
        "É necessario informar um produto para realizar a locação"
      );
    }
    const produto = await this.produtosRepository.findOneBy({ id: produtoId });
    if (!produto) throw new Error("Produto não encontrado");

    if (produto.status === Status.ALU) {
      throw new Error(
        `O produto "${produto.titulo}" já está alugado e não pode ser locado novamente`
      );
    }
    const nloc = this.locacoesRepository.create(loc);
    const locSalva = await this.locacoesRepository.save(nloc);

    await this.produtosRepository.update(produtoId, { status: Status.ALU });
    return locSalva;
  };

  list = async () => {
    return await this.locacoesRepository.find({
      relations: { produtos: true },
    });
  };

  update = async (id: number, dados: Partial<Locacoes>) => {
    const loc = await this.locacoesRepository.findOne({
      where: { id },
      relations: { produtos: true },
    });
    if (!loc) throw new Error("locação não encontrada");

    if (dados.dataDevolucaoReal && loc.produtos) {
      await this.produtosRepository.update(loc.produtos.id, {
        status: Status.DISP,
      });
    }

    this.locacoesRepository.merge(loc, dados);
    return await this.locacoesRepository.save(loc);
  };
}
