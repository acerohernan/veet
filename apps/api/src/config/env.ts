import z from "zod";
import { config } from "dotenv";

import { logger } from "./logger";
import { LOG_LEVEL } from "./types";

config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  PORT: z.preprocess(Number, z.number()),
  LOG_LEVEL: z.nativeEnum(LOG_LEVEL),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  logger.error(
    "ERRORS: ",
    result.error.issues.map((i) => `${i.path}: ${i.message}.`)
  );
  throw new Error(`Error at parsing env variables`);
}

export const env = result.data;
