import type { Request, Response } from 'express';

import type { RoomService } from '@/domain/services/room.service';

import { generateID } from '@/domain/utils/id';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  async postCreateRoom(req: Request, res: Response): Promise<void> {
    const resp = await this.roomService.createRoom({
      ...req.body,
      roomId: generateID(),
      participantId: generateID(),
    });
    res.status(201).send(resp);
  }

  async getDemoCredentials(req: Request, res: Response): Promise<void> {
    const resp = await this.roomService.getDemoCredentials({
      participantId: generateID(),
      participantName: String(req.query.participantName) ?? generateID(),
    });
    res.send(resp);
  }
}
