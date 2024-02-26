import {
  CreateRoomSchema,
  type CreateRoomDTO,
  type CreateRoomResponse,
  type GetDemoRoomCredsResponse,
  type GetDemoRoomCredsDTO,
  GetDemoRoomCredsSchema,
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

  async getDemoCredentials(
    dto: GetDemoRoomCredsDTO,
  ): Promise<GetDemoRoomCredsResponse> {
    const validation = GetDemoRoomCredsSchema.safeParse(dto);

    if (!validation.success)
      throw new BadRequestError(parseZodError(validation.error));

    const resp = await this.rtcService.createAccessToken(
      'demo',
      dto.participantId,
      dto.participantName,
    );
    return { accessToken: resp.accessToken };
  }
}
