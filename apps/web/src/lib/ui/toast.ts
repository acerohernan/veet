import { toast as toastLib } from "react-hot-toast";

export const toast = {
  /** renders a success toast */
  success: (msg: string) => toastLib.success(msg, { position: "bottom-right" }),
  /** renders an error toast */
  error: (msg: string) => toastLib.error(msg, { position: "bottom-right" }),
  /** renders a warning toast */
  warning: (msg: string) => toastLib(msg, { icon: "⚠️", position: "bottom-right" }),
};
