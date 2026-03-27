import axios from "axios";
import { getSession } from "next-auth/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  if(typeof window !== undefined) {
    try {
      const session = await getSession();
      if (session?.user?.accessToken) {
        config.headers.Authorization = `Bearer ${session.user.accessToken}`;
      }
      return config;
    } catch (error) {
      console.error(error);
    }
  }
  return config;
});

export default api;
