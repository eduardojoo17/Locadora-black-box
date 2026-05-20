import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController.js";
import { somenteAdmin } from "../middlewares/authMiddleware.js";

const router = Router();

const produtoController = new ProdutoController();

router.get("/", produtoController.list);
router.post("/", produtoController.create);
router.delete("/:id", somenteAdmin, produtoController.delete);
router.patch("/:id", produtoController.update);

export const produtoRoutes = router;
