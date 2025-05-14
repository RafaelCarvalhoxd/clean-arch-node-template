// import { Router } from 'express';
// import { healthCheckRoute } from './health/health-check.route';

import { Router } from 'express';
import { authRoutes } from './auth/auth.route';
import { healthCheckRoute } from './health/health-check.route';

export const setupRoutes = Router();

setupRoutes.use('/health', healthCheckRoute);
setupRoutes.use('/auth', authRoutes);

export default setupRoutes;
