import { AppDataSource } from "../data-source.js";
import { Produtos, Status } from "../entity/Produtos.js";
import { ConflictError, NotFoundError } from "../helpers/apiError.js";
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
      throw new NotFoundError("Produto não encontrado");
    }
    const produtoAtualizado = this.produtoRepository.merge(produto, dados);
    return await this.produtoRepository.save(produtoAtualizado);
  };

  delete = async (id: number) => {
    const produtoId = await this.produtoRepository.findOneBy({ id });
    
    if (!produtoId) throw new NotFoundError("produto não encontrado");
    if (produtoId.status === Status.ALU) {
      throw new ConflictError("Produto alugado, não pode ser deletado");
    }
    await this.produtoRepository.delete(id);
    return { message: "Produto deletado com sucesso" };
    
  };

}
