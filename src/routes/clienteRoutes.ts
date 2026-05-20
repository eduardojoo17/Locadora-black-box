import { Router } from "express";
import { ClienteController } from "../controller/ClienteController.js";
import { somenteAdmin } from "../middlewares/authMiddleware.js";
const router = Router();
const clienteController = new ClienteController();

router.post("/", clienteController.create);
router.get("/", clienteController.list);
router.patch("/:id", clienteController.update);
router.delete("/:id", somenteAdmin, clienteController.delete);

export const clienteRoutes = router;
