import {treeifyError, z} from "zod"

const envSchema = z.object({
  PORT: z.coerce.number().default(8000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

export type envType = z.infer<typeof envSchema>

const _env = envSchema.safeParse(process.env);

if(!_env.success){
  console.error("Variables d'environnement invalides ", treeifyError(_env.error));
  process.exit(1);
}

export const env = _env.data