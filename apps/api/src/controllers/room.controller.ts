import type { Request, Response } from 'express';

import type { RoomService } from '@/domain/services/room.service';

import type {
  CreateRoomDTO,
  GetDemoRoomCredsDTO,
} from '@/domain/schemas/room.schemas';

export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  async postCreateRoom(req: Request, res: Response): Promise<void> {
    const resp = await this.roomService.createRoom(req.body as CreateRoomDTO);
    res.status(201).send(resp);
  }

  async getDemoCredentials(req: Request, res: Response): Promise<void> {
    const resp = await this.roomService.getDemoCredentials(
      req.query as GetDemoRoomCredsDTO,
    );
    res.send(resp);
  }
}
