import { AuthService } from "../services/AuthService.js";
import { Router, Request, Response, NextFunction } from "express";

const router = Router();
const authService = new AuthService();

router.post(
  "/registrar",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const funcionario = await authService.registrar(req.body);
      res.status(201).json({
        id: funcionario.id,
        email: funcionario.email,
        role: funcionario.role,
      });
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/logar",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, senha } = req.body;
      const result = await authService.logar(email, senha);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
);

export const authRoutes = router;
