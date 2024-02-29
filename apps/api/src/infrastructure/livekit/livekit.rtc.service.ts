import * as jose from 'jose';
import {
  AccessToken,
  RoomServiceClient,
  type ClaimGrants,
} from 'livekit-server-sdk';

import { env } from '@/config/env';

import type { RTCJWTClaims, RTCService } from '@/domain/interfaces/rtc.service';

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

  async createAccessToken({
    roomId,
    participantId,
    participantName,
  }: {
    roomId: string;
    participantId: string;
    participantName: string;
  }): Promise<{ accessToken: string }> {
    const token = new AccessToken(env.LIVEKIT_API_KEY, env.LIVEKIT_API_SECRET, {
      identity: participantId,
      name: participantName,
    });

    token.addGrant({
      room: roomId,
      canPublish: true,
      canPublishData: true,
      canSubscribe: true,
      roomJoin: true,
      canUpdateOwnMetadata: true,
    });

    return { accessToken: token.toJwt() };
  }

  async validateAccessToken(
    accessToken: string,
  ): Promise<{ isValid: boolean; claims?: RTCJWTClaims }> {
    // verify that is a valid token
    const secret = new TextEncoder().encode(env.LIVEKIT_API_SECRET);

    try {
      const result = await jose.jwtVerify<ClaimGrants>(accessToken, secret, {
        issuer: env.LIVEKIT_API_KEY,
      });

      if (!result.payload) return { isValid: false };

      const { video, sub: participantId } = result.payload;

      if (!video?.room || !participantId) return { isValid: false };

      return {
        isValid: true,
        claims: {
          roomId: video.room,
          participantId,
        },
      };
    } catch {
      return { isValid: false };
    }
  }
}
