export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data?: unknown
  ) {
    super(message);
    this.name = 'HttpError';
  }

  toJSON() {
    return {
      message: this.message,
      data: this.data,
    };
  }
}
