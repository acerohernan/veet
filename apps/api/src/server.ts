import cors from 'cors';
import http from 'http';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';

import { env } from '@/config/env';
import { logger } from '@/config/logger';

import { router } from './router';

export class Server {
  httpServer: http.Server;

  constructor() {
    const app = express();

    app.use(cors({ origin: '*' }));
    app.use(helmet());
    app.use(express.json());
    // application/x-www-form-urlencoded body
    app.use(express.urlencoded({ extended: true }));
    // http logging
    app.use(
      morgan(':method :url :status :res[content-length] - :response-time ms'),
    );

    app.use(router);

    this.httpServer = http.createServer(app);
  }

  run(): void {
    this.httpServer.listen(env.PORT, () => {
      logger.info(`[Server] application started successfully`, {
        log: env.LOG_LEVEL,
        env: env.NODE_ENV,
        port: env.PORT,
      });
    });
  }

  async stop(): Promise<void> {}
}
