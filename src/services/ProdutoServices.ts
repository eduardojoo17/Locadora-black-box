import { AppDataSource } from "../data-source";
import { Produtos } from "../entity/Produtos";

export class ProdutoService {
  private produtoRepository = AppDataSource.getRepository(Produtos);

  create = async (prod: Partial<Produtos>) => {
    const nProd = this.produtoRepository.create(prod);
    return await this.produtoRepository.save(nProd);
  };

  list = async () => {
    return await this.produtoRepository.find();
  };
  update = async (id: number, dados: Partial<Produtos>) => {};
}
