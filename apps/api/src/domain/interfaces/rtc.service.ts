export interface RTCService {
  createRoom: (roomId: string) => Promise<{ accessToken: string }>;
}
