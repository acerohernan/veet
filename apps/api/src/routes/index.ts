import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { openapiSpecification } from '@/config/swagger';

import { v1Router } from './v1';

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
 *     description: Open API documentation
 */
router.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Routers
router.use('/v1', v1Router);
