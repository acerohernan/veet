export type APIResponse<T> = {
  data?: T;
  statusCode: number;
};

export interface Participant {
  name: string;
}
