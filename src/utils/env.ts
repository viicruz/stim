
import z from "zod";

//Zod Schema for the environment variables
const envSchema = z.object({
    VITE_API_KEY: z.string(),
});

//Parse the environment variables
const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error("Invalid environment variables", _env.error.format());

  throw Error("Invalid environment variables");
}


export const env = _env.data;