/* eslint-disable */
import { NextFunction, Request, Response } from 'express';
import { HttpError } from '@domain/errors/http.error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof HttpError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
