import { AccessToken, RoomServiceClient } from 'livekit-server-sdk';

import { env } from '@/config/env';

import type { RTCService } from '@/domain/interfaces/rtc.service';

export class LivekitRTCService implements RTCService {
  roomClient: RoomServiceClient;

  constructor() {
    this.roomClient = new RoomServiceClient(
      env.LIVEKIT_URL,
      env.LIVEKIT_API_KEY,
      env.LIVEKIT_API_SECRET,
    );
  }

  async createRoom(roomId: string): Promise<void> {
    await this.roomClient.createRoom({ name: roomId });
  }

  async createAccessToken(
    roomId: string,
    participantId: string,
    participantName: string,
  ): Promise<{ accessToken: string }> {
    const token = new AccessToken(env.LIVEKIT_API_KEY, env.LIVEKIT_API_SECRET, {
      identity: participantId,
      name: participantName,
    });

    token.addGrant({ room: roomId });

    return { accessToken: await token.toJwt() };
  }
}
