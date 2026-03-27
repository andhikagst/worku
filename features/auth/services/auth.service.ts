import api from "@/lib/axios";
import { LoginPayload, RegisterPayload } from "../schemas/auth.schemas";
import axios, { AxiosError } from "axios";

const handleAxiosError = (error: unknown, fallbackMessage: string): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data?.message || fallbackMessage);
  }
  throw new Error(fallbackMessage);
};

export const registerUser = async (payload: RegisterPayload) => {
  try {
    const response = await api.post("/api/v1/users/register", payload);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Register failed");
    throw error;
  }
};

export const loginUser = async (payload: LoginPayload) => {
  try {
    const response = await api.post("/api/v1/users/login", payload);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "Login failed");
    throw error;
  }
};