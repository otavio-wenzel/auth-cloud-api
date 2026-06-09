const express = require('express');
const controller = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Maria Silva
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Usuário já existe
 */
router.post('/register', controller.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza login e retorna um JWT
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Email ou senha inválidos
 */
router.post('/login', controller.login);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Retorna os dados do usuário autenticado
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil retornado com sucesso
 *       401:
 *         description: Token inválido ou ausente
 */
router.get(
  '/profile',
  authMiddleware,
  controller.profile
);

router.put(
  '/change-password',
  authMiddleware,
  controller.changePassword
);

module.exports = router;