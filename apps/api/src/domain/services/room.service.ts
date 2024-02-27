import {
  CreateRoomSchema,
  type CreateRoomDTO,
  type CreateRoomResponse,
  type GetDemoRoomCredsResponse,
  type GetDemoRoomCredsDTO,
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

    await this.rtcService.createRoom(dto.roomId);

    const result = await this.rtcService.createAccessToken(
      dto.roomId,
      dto.participant.id,
      dto.participant.name,
    );

    return { roomId: dto.roomId, accessToken: result.accessToken };
  }

  async createDemoCredentials(
    dto: GetDemoRoomCredsDTO,
  ): Promise<GetDemoRoomCredsResponse> {
    const resp = await this.rtcService.createAccessToken(
      'demo',
      dto.participant.id,
      dto.participant.name,
    );
    return { accessToken: resp.accessToken };
  }
}
