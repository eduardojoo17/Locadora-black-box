import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController.js";
import { somenteAdmin } from "../middlewares/authMiddleware.js";

const router = Router();
const produtoController = new ProdutoController();

/**
 * @openapi
 * /api/produto/:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", produtoController.list);

/**
 * @openapi
 * /api/produto/:
 *   post:
 *     summary: Cadastra um novo produto
 *     tags: [Produto]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [titulo, categoria, preco_diaria]
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: De Volta Para o Futuro
 *               categoria:
 *                 type: string
 *                 example: Filme
 *               preco_diaria:
 *                 type: number
 *                 example: 9.90
 *     responses:
 *       201:
 *         description: Produto cadastrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", produtoController.create);

/**
 * @openapi
 * /api/produto/{id}:
 *   patch:
 *     summary: Atualiza um produto existente
 *     tags: [Produto]
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
 *               titulo:
 *                 type: string
 *               categoria:
 *                 type: string
 *               preco_diaria:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 */
router.patch("/:id", produtoController.update);

/**
 * @openapi
 * /api/produto/{id}:
 *   delete:
 *     summary: Remove um produto (somente admin)
 *     tags: [Produto]
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
 *         description: Produto removido com sucesso
 *       403:
 *         description: Acesso negado — somente admin
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Produto está alugado e não pode ser removido
 */
router.delete("/:id", somenteAdmin, produtoController.delete);

export const produtoRoutes = router;
