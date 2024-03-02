import { authHeaders, axiosInstance } from "../config";

import { APIResponse } from "../types";

import { parseAxiosError } from "../utils";

export const createRoom = async (
  participantName: string,
): Promise<APIResponse<{ accessToken: string; roomId: string }>> => {
  try {
    const res = await axiosInstance.post("/room", { participantName });
    return {
      statusCode: 200,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};

export const getDemoCredentials = async (participantName: string): Promise<APIResponse<{ accessToken: string }>> => {
  try {
    const query = new URLSearchParams();
    query.append("participantName", participantName);
    const res = await axiosInstance.get("/room/demo?" + query.toString());
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};

export const getGuestCredentials = async (
  participantName: string,
): Promise<APIResponse<{ guestAccessToken: string }>> => {
  try {
    const query = new URLSearchParams();
    query.append("participantName", participantName);
    const res = await axiosInstance.get("/room/invite?" + query.toString(), { headers: authHeaders() });
    return {
      statusCode: res.status,
      data: res.data,
    };
  } catch (err) {
    return parseAxiosError(err);
  }
};
