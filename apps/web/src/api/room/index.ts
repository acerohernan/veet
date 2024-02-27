import { axiosInstance } from "../config";

import { APIResponse, Participant } from "../types";

import { parseAxiosError } from "../utils";

export const createRoom = async (
  participant: Participant,
): Promise<APIResponse<{ accessToken: string; roomId: string }>> => {
  try {
    const res = await axiosInstance.post("/room", { participantName: participant.name });
    return {
      statusCode: 200,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};

export const getDemoCredentials = async (participant: Participant): Promise<APIResponse<{ accessToken: string }>> => {
  try {
    const query = new URLSearchParams();
    query.append("participantName", participant.name);
    const res = await axiosInstance.get("/room/demo?" + query.toString());
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};
