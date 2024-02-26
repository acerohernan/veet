import z from 'zod';

// create room
export const CreateRoomSchema = z.object({
  roomId: z.string(),
  participantId: z.string(),
  participantName: z.string(),
});

export type CreateRoomDTO = z.infer<typeof CreateRoomSchema>;
export interface CreateRoomResponse {
  accessToken: string;
  roomId: string;
}

// get demo room credentials
export const GetDemoRoomCredsSchema = z.object({
  participantId: z.string(),
  participantName: z.string(),
});

export type GetDemoRoomCredsDTO = z.infer<typeof GetDemoRoomCredsSchema>;

export interface GetDemoRoomCredsResponse {
  accessToken: string;
}
