import z from 'zod';
import { config } from 'dotenv';

import { logger } from './logger';
import { LOG_LEVEL } from './types';

config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.preprocess(Number, z.number()),
  LOG_LEVEL: z.nativeEnum(LOG_LEVEL),
  LIVEKIT_API_KEY: z.string(),
  LIVEKIT_API_SECRET: z.string(),
  LIVEKIT_URL: z.string(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  logger.error(
    'ERRORS: ',
    result.error.issues.map((i) => `${i.path}: ${i.message}.`),
  );
  throw new Error('Error at parsing env variables');
}

export const env = result.data;
