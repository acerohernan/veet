export interface RTCService {
  createRoom: (roomId: string) => Promise<void>;
  createAccessToken: (
    roomId: string,
    participantId: string,
    participantName: string,
  ) => Promise<{ accessToken: string }>;
}
