import { validateEnvVariable } from '@domain/utils/validate-env-variable.util';
import { config } from 'dotenv';

config();

export const envConfig = {
  port: Number(process.env.PORT) || 3000,
  dbUrl: validateEnvVariable(String(process.env.DATABASE_URL), 'DATABASE_URL'),
  jwtSecret: validateEnvVariable(process.env.JWT_SECRET, 'JWT_SECRET'),
};
