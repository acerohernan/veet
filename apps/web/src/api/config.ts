import { getAccessToken } from "@/lib/auth/accessToken";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 3000, // 3 seconds
});

export const authHeaders = () => ({
  Authorization: `Bearer ${getAccessToken()}`,
});
