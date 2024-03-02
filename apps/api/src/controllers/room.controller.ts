import type { Request, Response } from 'express';

import { generateID } from '@/domain/utils/id';
import type { RoomService } from '@/domain/services/room.service';

import type { AuthMiddlewareLocals } from '@/middlewares/auth';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  async postCreateRoom(req: Request, res: Response): Promise<void> {
    const participantId = generateID();

    const resp = await this.roomService.createRoom({
      roomId: generateID(),
      participantId,
      participantName: req.body.participantName,
    });
    res.status(201).send(resp);
  }

  async getDemoAccessToken(req: Request, res: Response): Promise<void> {
    const participantId = generateID();

    const resp = await this.roomService.getDemoCredentials({
      participantId,
      participantName: req.query.participantName as string,
    });
    res.send(resp);
  }

  async getGuestAccessToken(
    req: Request,
    res: Response<any, AuthMiddlewareLocals>,
  ): Promise<void> {
    const { rtcClaims } = res.locals;

    if (!rtcClaims) {
      res.sendStatus(401);
      return;
    }

    const result = await this.roomService.getGuestCredentials({
      participantName: req.query.participantName as string,
      roomId: rtcClaims.roomId,
    });

    res.send(result);
  }
}
