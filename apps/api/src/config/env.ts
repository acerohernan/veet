import z from "zod";
import { config } from "dotenv";

config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  PORT: z.preprocess(Number, z.number()),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.log(result.error);
  throw new Error(`Error at parsing env variables`);
}

export const env = result.data;
