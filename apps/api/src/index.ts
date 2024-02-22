import cors from "cors";
import express from "express";
import helmet from "helmet";

import { env } from "./config/env";
import { logger } from "./config/logger";

const app = express();

// allow cors from any origin, the service will be public
app.use(cors({ origin: "*" }));
app.use(helmet());

app.listen(env.PORT, () => {
  logger.info(
    `Application running on port: ${env.PORT} in ${env.NODE_ENV} mode and with ${env.LOG_LEVEL} log level.`
  );
});
