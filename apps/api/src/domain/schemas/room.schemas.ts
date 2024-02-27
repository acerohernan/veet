import z from 'zod';

// create room
export const CreateRoomSchema = z.object({
  roomId: z.string(),
  participant: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export type CreateRoomDTO = z.infer<typeof CreateRoomSchema>;
export interface CreateRoomResponse {
  accessToken: string;
  roomId: string;
}

// get demo room credentials
export const GetDemoRoomCredsSchema = z.object({
  participant: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

export type GetDemoRoomCredsDTO = z.infer<typeof GetDemoRoomCredsSchema>;

export interface GetDemoRoomCredsResponse {
  accessToken: string;
}
