declare global {
  namespace Express {
    interface Request {
      funcionario?: {
        id: number;
        role: "admin" | "funcionario";
      };
    }
  }
}
export {};
