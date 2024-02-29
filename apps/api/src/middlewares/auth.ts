import type { Request, Response, NextFunction } from 'express';

import type { RTCJWTClaims, RTCService } from '@/domain/interfaces/rtc.service';

import type { IMiddleware } from './types';

export interface AuthMiddlewareLocals {
  rtcClaims?: RTCJWTClaims;
}

export class AuthMiddleware implements IMiddleware {
  constructor(private readonly rtcService: RTCService) {}

  async run(
    req: Request,
    res: Response<any, Record<string, any>>,
    next: NextFunction,
  ): Promise<void> {
    if (!req.headers.authorization) {
      res.sendStatus(401);
      return;
    }

    const accessToken = req.headers.authorization.replace('Bearer ', '');

    if (!accessToken) {
      res.sendStatus(401);
      return;
    }

    const resp = await this.rtcService.validateAccessToken(accessToken);

    if (!resp.isValid || !resp.claims) {
      res.sendStatus(401);
      return;
    }

    res.locals.rtcClaims = resp.claims;
    next();
  }
}
