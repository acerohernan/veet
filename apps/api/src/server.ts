import cors from "cors";
import http from "http";
import helmet from "helmet";
import express from "express";

import { env } from "./config/env";
import { logger } from "./config/logger";

export class Server {
  httpServer: http.Server;

  constructor() {
    const app = express();

    app.use(cors({ origin: "*" }));
    app.use(helmet());

    this.httpServer = http.createServer(app);
  }

  run() {
    this.httpServer.listen(env.PORT, () => {
      logger.info(`Application started successfully`, {
        log: env.LOG_LEVEL,
        env: env.NODE_ENV,
        port: env.PORT,
      });
    });
  }

  async stop() {}
}
