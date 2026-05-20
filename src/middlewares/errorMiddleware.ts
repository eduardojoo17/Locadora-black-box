import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "../helpers/apiError.js";
import type { ValidationError } from "class-validator";

export const errorMiddleware = (
  error: Error & Partial<ApiError> & ValidationError[],
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("ErrorMiddleware:", error);
  if (Array.isArray(error.errors) && error.errors[0]?.constraints) {
    const messages = error.errors
      .map((err: any) => Object.values(err.constraints))
      .flat();
    return res
      .status(400)
      .json({ message: "erro de validação", errors: messages });
  }

  const statusCode = error.statusCode ?? 500;
  const message = error.message ? error.message : "Erro interno do servidor";

  return res.status(statusCode).json({ message });
};
