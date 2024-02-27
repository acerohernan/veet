export const captureError = (error: unknown) => {
  if (process.env.NODE_ENV !== "development") return;
  console.error(error);
};
