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
    res.send(resp);
  }

  async getDemoCredentials(req: Request, res: Response): Promise<void> {
    const resp = await this.roomService.createDemoCredentials(
      req.body as GetDemoRoomCredsDTO,
    );
    res.send(resp);
  }
}
