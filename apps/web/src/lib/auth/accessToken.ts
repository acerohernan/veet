const tokenKey = "__token";

export const setAccessToken = (accessToken: string) => {
  sessionStorage.setItem(tokenKey, accessToken);
};

export const getAccessToken = (): string => {
  return sessionStorage.getItem(tokenKey) ?? "";
};
