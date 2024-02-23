export interface WebRTCService {
  createRoom: (roomId: string) => Promise<{ accessToken: string }>;
}
