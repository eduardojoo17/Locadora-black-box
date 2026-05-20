import { NextFunction, Request, Response } from "express";
import { ClienteService } from "../services/ClienteServices.js";

export class ClienteController {
  private clienteService = new ClienteService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cliente = await this.clienteService.create(req.body);
      res.status(201).json(cliente);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cliente = await this.clienteService.list();
      res.status(200).json(cliente);
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const cliente = await this.clienteService.update(id, req.body);
      return res.status(200).json(cliente);
    } catch (error: unknown) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const result = await this.clienteService.delete(id);
      res.status(200).json(result);
    } catch (error: unknown) {
      next(error);
    }
  };
}
