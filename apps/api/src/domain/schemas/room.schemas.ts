import z from 'zod';

// create room
export const CreateRoomSchema = z.object({
  roomId: z.string(),
});

export type CreateRoomDTO = z.infer<typeof CreateRoomSchema>;
export interface CreateRoomResponse {
  accessToken: string;
  roomId: string;
}

// get demo room credentials
export interface GetDemoRoomCredentials {
  accessToken: string;
}
