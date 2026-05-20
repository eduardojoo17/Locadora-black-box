import { Router, Request, Response, NextFunction } from "express";
import { AuthService } from "../services/AuthServices";

const router = Router();
const authService = new AuthService();

// Cria funcionario (só admin deveria acessar depois)
router.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const funcionario = await authService.register(req.body);
      res.status(201).json({
        id: funcionario.id,
        email: funcionario.email,
        role: funcionario.role,
      });
    } catch (error) {
      next(error);
    }
  }
);

// Login
router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, senha } = req.body;
      const result = await authService.login(email, senha);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

export const authRoutes = router;
