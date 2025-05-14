import { Request, Response, Router } from 'express';

export const healthCheckRoute = Router();

healthCheckRoute.get('/', (_: Request, res: Response) => {
  try {
    res.status(200).json({ status: 'UP' });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ status: 'DOWN', error: err.message });
  }
});
