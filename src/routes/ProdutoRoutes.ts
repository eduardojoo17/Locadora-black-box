import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController.js";
import { adminMiddleware } from "../midlleware/adminMiddleware.js";
const router = Router();

const produtoController = new ProdutoController();

router.get("/", produtoController.list);
router.post("/", produtoController.create);
router.delete("/:id", adminMiddleware, produtoController.delete);
router.patch("/:id", produtoController.update);

export const produtoRoutes = router;
