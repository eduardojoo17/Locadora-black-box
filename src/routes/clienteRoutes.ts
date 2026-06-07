import { Router } from "express";
import { ClienteController } from "../controller/ClienteController.js";
import { somenteAdmin } from "../middlewares/authMiddleware.js";

const router = Router();
const clienteController = new ClienteController();

/**
 * @openapi
 * /api/cliente/:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", clienteController.list);

/**
 * @openapi
 * /api/cliente/:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, cpf, contato, endereco]
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Maria Oliveira
 *               cpf:
 *                 type: string
 *                 example: "123.456.789-09"
 *               contato:
 *                 type: string
 *                 example: "(24) 99999-0000"
 *               endereco:
 *                 type: string
 *                 example: Rua das Flores, 123
 *     responses:
 *       201:
 *         description: Cliente cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post("/", clienteController.create);

/**
 * @openapi
 * /api/cliente/{id}:
 *   patch:
 *     summary: Atualiza um cliente existente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               cpf:
 *                 type: string
 *               contato:
 *                 type: string
 *               endereco:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       404:
 *         description: Cliente não encontrado
 */
router.patch("/:id", clienteController.update);

/**
 * @openapi
 * /api/cliente/{id}:
 *   delete:
 *     summary: Remove um cliente (somente admin)
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Cliente removido com sucesso
 *       403:
 *         description: Acesso negado — somente admin
 *       404:
 *         description: Cliente não encontrado
 */
router.delete("/:id", somenteAdmin, clienteController.delete);

export const clienteRoutes = router;
