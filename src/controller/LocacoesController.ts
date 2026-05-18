import { Response, Request, NextFunction } from "express";
import { locacoesService } from "../services/LocacoesServices.js";

export class LocacoesController {
  private locacoesService = new locacoesService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prod = await this.locacoesService.create(req.body);
      return res.status(201).json(prod);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prod = await this.locacoesService.list();
      return res.json(prod);
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const produto = await this.locacoesService.update(id!, req.body);
      return res.status(200).json(produto);
    } catch (error: unknown) {
      next(error);
    }
  };
}
