import winston from "winston";

import { env } from "./env";
import { LOG_LEVEL } from "./types";

export const logger = winston.createLogger({
  level: env.LOG_LEVEL,
  format: winston.format.json(),
  defaultMeta: { service: "api-service" },
  transports: [new winston.transports.Console({ level: LOG_LEVEL.DEBUG })],
});
