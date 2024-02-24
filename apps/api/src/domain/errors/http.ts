export abstract class HttpError extends Error {
  constructor(
    readonly message: string,
    readonly code: number,
  ) {
    super(message);
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(message, 400);
  }
}
export class InternalServerError extends HttpError {
  constructor(message: string) {
    super(message, 500);
  }
}
