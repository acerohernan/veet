import type { Request, Response } from 'express';

import type { RoomService } from '../domain/services/room.service';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  postCreateRoom(req: Request, res: Response): void {
    this.roomService.createRoom();

    res.sendStatus(200);
  }

  getDemoCredentials(req: Request, res: Response): void {
    res.sendStatus(200);
  }
}
