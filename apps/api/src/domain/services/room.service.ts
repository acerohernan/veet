import {
  CreateRoomSchema,
  type CreateRoomDTO,
  type CreateRoomResponse,
} from '../schemas/room.schemas';
import type { RTCService } from '../interfaces/rtc.service';

import { parseZodError } from '../utils/zod';
import { BadRequestError } from '../errors/http';

export class RoomService {
  constructor(private readonly rtcService: RTCService) {}

  async createRoom(dto: CreateRoomDTO): Promise<CreateRoomResponse> {
    const validation = CreateRoomSchema.safeParse(dto);

    if (!validation.success)
      throw new BadRequestError(parseZodError(validation.error));

    const result = await this.rtcService.createRoom(dto.roomId);

    return { roomId: dto.roomId, accessToken: result.accessToken };
  }
}
