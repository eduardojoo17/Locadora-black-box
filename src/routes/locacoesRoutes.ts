import { Router } from "express";
import { LocacoesController } from "../controller/LocacoesController.js";
const router = Router();

const locacoesController = new LocacoesController();

router.get("/", locacoesController.list);
router.post("/", locacoesController.create);
router.patch("/:id", locacoesController.update);

export const locacoesRoutes = router;
