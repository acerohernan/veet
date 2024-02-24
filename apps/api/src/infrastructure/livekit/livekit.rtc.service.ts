import type { RTCService } from '@/domain/interfaces/rtc.service';

export class LivekitRTCService implements RTCService {
  async createRoom(roomId: string): Promise<{ accessToken: string }> {
    return { accessToken: '' };
  }
}
