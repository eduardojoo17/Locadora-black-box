import { AuthController } from "../controller/AuthController.js";
import {Router, } from "express";

const router = Router();
const authController = new AuthController();

router.post("/",authController.registrar);
router.post("/",authController.logar);

export const authRoutes = router;
