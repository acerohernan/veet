import swaggerUi from 'swagger-ui-express';
import Router from 'express-promise-router';
import type { Response, Request, NextFunction } from 'express';

import { openapiSpecification } from '@/config/swagger';

import { HttpError } from '@/domain/errors/http';

import { v1Router } from './v1';

export const router = Router();

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

// Error handler
router.use(
  (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof HttpError) {
      res.status(err.code).send(err.message);
    } else {
      res.sendStatus(500);
    }
  },
);
