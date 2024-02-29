export interface RTCJWTClaims {
  roomId: string;
  participantId: string;
}

export interface RTCService {
  createRoom: (roomId: string) => Promise<void>;
  createAccessToken: (params: {
    roomId: string;
    participantId: string;
    participantName: string;
  }) => Promise<{ accessToken: string }>;
  validateAccessToken: (accessToken: string) => Promise<{
    isValid: boolean;
    claims?: RTCJWTClaims;
  }>;
}
