import { NextFunction,  Request, Response } from "express";
import { AuthService } from "../services/AuthService.js";

 
export class AuthController {
    private authService = new AuthService();
registrar = async(req: Request, res: Response, next: NextFunction) => {
    try {
      const funcionario = await this.authService.registrar(req.body);
      res.status(201).json({
        id: funcionario.id,
        email: funcionario.email,
        role: funcionario.role,
      });
    } catch (error) {
      next(error);
    }
    };
    
    logar = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, senha } = req.body;
            const result = await this.authService.logar(email, senha);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    };
}