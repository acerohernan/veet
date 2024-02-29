import Router from 'express-promise-router';

import { authMiddleware, roomController } from '@/controllers';

export const v1Router = Router();

/**
 * @swagger
 * /room:
 *   get:
 *     summary: Create a room
 *     description: Create a new custom room
 *     responses:
 *      200:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *            roomId:
 *             type: string
 *            accessToken:
 *             type: string
 */
v1Router.post(
  '/room',
  async (req, res) => await roomController.postCreateRoom(req, res),
);

/**
 * @swagger
 * /room/demo:
 *   get:
 *     summary: Give access for demo room
 *     description: Give access token for accesing demo room
 *     responses:
 *      200:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *            accessToken:
 *             type: string
 */
v1Router.get(
  '/room/demo',
  async (req, res) => await roomController.getDemoAccessToken(req, res),
);

/**
 * @swagger
 * /room/invite:
 *   get:
 *     summary: Create access token for a new participant in the same room
 *     description: Create access token for a new participant in the same room
 *     responses:
 *      200:
 *       content:
 *         application/json:
 *          schema:
 *           type: object
 *           properties:
 *            guestAccessToken:
 *             type: string
 */
v1Router.get(
  '/room/invite',
  async (req, res, next) => await authMiddleware.run(req, res, next),
  async (req, res) => await roomController.getGuestAccessToken(req, res),
);
