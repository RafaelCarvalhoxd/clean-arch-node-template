import express, { Express } from 'express';
import { setupRoutes } from '@presentation/routes/setupRoutes';
import { errorHandler } from '@presentation/middlewares/error.middleware';
import { envConfig } from '@infra/config/env/env.config';

const app: Express = express();

app.use(express.json());
app.use('/api', setupRoutes);
app.use(errorHandler);

app.listen(envConfig.port, () => {
  console.log(`Server is running at http://localhost:${envConfig.port}`);
});

export default app;
