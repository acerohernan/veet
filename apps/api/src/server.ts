import cors from "cors";
import http from "http";
import helmet from "helmet";
import express from "express";

import { env } from "@/config/env";
import { logger } from "@/config/logger";

export class Server {
  httpServer: http.Server;

  constructor() {
    const app = express();

    app.use(cors({ origin: "*" }));
    app.use(helmet());
    app.use(express.json());
    // application/x-www-form-urlencoded body
    app.use(express.urlencoded({ extended: true }));

    this.httpServer = http.createServer(app);
  }

  run() {
    this.httpServer.listen(env.PORT, () => {
      logger.info(`[Server] application started successfully`, {
        log: env.LOG_LEVEL,
        env: env.NODE_ENV,
        port: env.PORT,
      });
    });
  }

  async stop() {}
}
