import { AxiosError } from "axios";

import { APIResponse } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseAxiosError = (error: unknown): APIResponse<any> => {
  let statusCode = 500;

  if (error instanceof AxiosError && error.response) {
    statusCode = error.response.status;
  }

  return { statusCode };
};
