import { RoomService } from './room.service';

const roomService = new RoomService();

describe('RoomService', () => {
  beforeAll(() => {});
  afterAll(() => {});
  describe('createRoom', () => {
    it('should return a roomId and accessToken', () => {
      const result = roomService.createRoom();
      expect(result.roomId).toBeDefined();
      expect(result.accessToken).toBeDefined();
    });
  });
});
