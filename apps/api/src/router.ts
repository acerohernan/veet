import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { openapiSpecification } from './config/swagger';

export const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health check
 *     description: For making sure the service is still running
 */
router.get('/', (_, res) => res.sendStatus(200));

/**
 * @swagger
 * /docs:
 *   get:
 *     summary: Open API docs
 *     description: Endpoints documentation
 */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
