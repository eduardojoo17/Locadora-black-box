import { AuthController } from "../controller/AuthController.js";
import { Router } from "express";

const router = Router();
const authController = new AuthController();

/**
 * @openapi
 * /api/auth/:
 *   get:
 *     summary: Lista todos os funcionários
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", authController.list);

/**
 * @openapi
 * /api/auth/registrar:
 *   post:
 *     summary: Registra um novo funcionário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, email, senha]
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 enum: [admin, funcionario]
 *                 example: funcionario
 *     responses:
 *       201:
 *         description: Funcionário registrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/registrar", authController.registrar);

/**
 * @openapi
 * /api/auth/logar:
 *   post:
 *     summary: Autentica um funcionário e retorna o token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, senha]
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               senha:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/logar", authController.logar);

export const authRoutes = router;
