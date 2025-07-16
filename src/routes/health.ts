import { Router, Request, Response } from 'express';
import { version } from '../../package.json';

const router = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Comprueba el estado de la aplicación
 *     description: Devuelve un objeto con status ok y la versión del proyecto.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Estado exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 version:
 *                   type: string
 *                   example: 1.0.0
 */
router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', version });
});

// TODO: Agregar más endpoints aquí cuando expandes el proyecto
// Ejemplo: router.get('/otro-endpoint', handler);

export default router;
