import type { Request, Response } from 'express';

import type { RoomService } from '../domain/services/room.service';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  async postCreateRoom(req: Request, res: Response): Promise<void> {
    await this.roomService.createRoom({ roomId: '23123' });

    res.sendStatus(200);
  }

  async getDemoCredentials(req: Request, res: Response): Promise<void> {
    res.sendStatus(200);
  }
}
