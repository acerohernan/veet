import type { Request, Response, NextFunction } from 'express';

export interface IMiddleware {
  run: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
