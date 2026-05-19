import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserServices";

export class UserController {
  private userService = new UserService();

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.create(req.body);
      res.status(201).json(user);
    } catch (error: unknown) {
      next(error);
    }
  };

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.list();
      res.status(200).json(users);
    } catch (error: unknown) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const user = await this.userService.update(id, req.body);
      return res.status(200).json(user);
    } catch (error: unknown) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const result = await this.userService.delete(id);
      res.status(200).json(result);
    } catch (error: unknown) {
      next(error);
    }
  };
}
