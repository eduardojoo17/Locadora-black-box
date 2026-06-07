import { Router } from "express";
import { LocacoesController } from "../controller/LocacoesController.js";

const router = Router();
const locacoesController = new LocacoesController();

/**
 * @openapi
 * /api/locacoes/:
 *   get:
 *     summary: Lista todas as locações
 *     tags: [Locações]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", locacoesController.list);

/**
 * @openapi
 * /api/locacoes/:
 *   post:
 *     summary: Registra uma nova locação
 *     tags: [Locações]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [dataLocacao, dataDevolucaoPrevista, produto_id, cliente_id]
 *             properties:
 *               dataLocacao:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-07"
 *               dataDevolucaoPrevista:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-10"
 *               produto_id:
 *                 type: integer
 *                 example: 1
 *               cliente_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Locação registrada e produto marcado como alugado
 *       400:
 *         description: Produto indisponível ou dados inválidos
 *       404:
 *         description: Produto ou cliente não encontrado
 */
router.post("/", locacoesController.create);

/**
 * @openapi
 * /api/locacoes/{id}:
 *   patch:
 *     summary: Atualiza uma locação — usado para registrar devolução
 *     tags: [Locações]
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
 *               dataDevolucaoReal:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-09"
 *     responses:
 *       200:
 *         description: Locação atualizada e produto marcado como disponível
 *       404:
 *         description: Locação não encontrada
 */
router.patch("/:id", locacoesController.update);

export const locacoesRoutes = router;
