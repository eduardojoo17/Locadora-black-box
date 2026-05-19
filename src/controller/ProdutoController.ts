import { ProdutoService } from "../services/ProdutoServices.js";
import type { Response, Request, NextFunction } from "express";

export class ProdutoController {
  private produtoService = new ProdutoService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prod = await this.produtoService.create(req.body);
      return res.status(201).json(prod);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prod = await this.produtoService.list();
      return res.json(prod);
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "ID inválido" });
      }
      const produto = await this.produtoService.update(id, req.body);
      return res.status(200).json(produto);
    } catch (error: unknown) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.produtoService.delete(id);
      return res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  };
}
