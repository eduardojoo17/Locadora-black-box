import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const funcionario = req.funcionario;

  if (!funcionario || funcionario.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Acesso restrito a administradores" });
  }

  next();
};
