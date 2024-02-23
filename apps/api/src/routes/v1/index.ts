import express from 'express';

import { roomController } from '@/controllers';

export const v1Router = express.Router();

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
v1Router.post('/room', (req, res) => roomController.postCreateRoom(req, res));

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
v1Router.get('/room/demo', (req, res) =>
  roomController.getDemoCredentials(req, res),
);
