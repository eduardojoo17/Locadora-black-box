import { error } from "node:console";
import { AppDataSource } from "../data-source.js";
import { Produtos } from "../entity/Produtos.js";

export class ProdutoService {
  private produtoRepository = AppDataSource.getRepository(Produtos);

  create = async (prod: Partial<Produtos>) => {
    const nProd = this.produtoRepository.create(prod);
    return await this.produtoRepository.save(nProd);
  };

  list = async () => {
    return await this.produtoRepository.find();
  };

  update = async (id: number, dados: Partial<Produtos>) => {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) {
      throw new Error("Produto não encontrado");
    }
    const produtoAtualizado = this.produtoRepository.merge(produto, dados);
    return await this.produtoRepository.save(produtoAtualizado);
  };

  delete = async (id: number) => {
    const produto = await this.produtoRepository.findOneBy({ id });
    if (!produto) throw new Error("produto não encontrado");
    return await this.produtoRepository.delete(id);
  };
}
