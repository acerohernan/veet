export class RoomService {
  createRoom(): { roomId: string; accessToken: string } {
    return { accessToken: 'token', roomId: 'demo_room' };
  }
}
