import { HttpError } from './http.error';

export class BadRequestError extends HttpError {
  constructor(
    public readonly message: string,
    public readonly data?: unknown
  ) {
    super(400, message, data);
    this.name = 'BadRequest';
  }
}
