import { HttpError } from './http.error';

export class InternalServerError extends HttpError {
  constructor(
    public readonly message: string,
    public readonly data?: unknown
  ) {
    super(500, message, data);
    this.name = 'InternalServerError';
  }
}
