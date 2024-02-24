import type { ZodError } from 'zod';

/**
 *  Converts zod validation error to an string message
 * @example `Validation errors: roomId: Required, roomName: Required`
 * @param error ZodError
 * @returns string
 */
export const parseZodError = (error: ZodError): string => {
  return `Validation errors: ${error.issues.map((iss) => `${iss.path}: ${iss.message}`).join(', ')}`;
};
