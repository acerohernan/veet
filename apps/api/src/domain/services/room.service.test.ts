import { LivekitRTCService } from '@/infrastructure/livekit/livekit.rtc.service';
import { RoomService } from './room.service';

const rtcService = new LivekitRTCService();
const roomService = new RoomService(rtcService);

describe('RoomService', () => {
  beforeAll(() => {});
  afterAll(() => {});
  describe('createRoom', () => {
    it('should return a roomId and accessToken', async () => {
      const result = await roomService.createRoom({ roomId: 'room123' });
      expect(result.roomId).toBeDefined();
      expect(result.accessToken).toBeDefined();
    });
  });
});
