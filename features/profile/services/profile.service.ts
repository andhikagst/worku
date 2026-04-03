import api from "@/lib/axios";
import axios, { AxiosError } from "axios";
import {
  UpdateDetailPayload,
  UpdateContactPayload,
} from "../types/profile.types";

const handleAxiosError = (error: unknown, fallback: string): never => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError<{ message: string }>;
    throw new Error(e.response?.data?.message || fallback);
  }
  throw new Error(fallback);
};

export const getUserInfo = async () => {
  try {
    const res = await api.get("/api/v1/users/info/");
    return res.data.payload;
  } catch (e) {
    handleAxiosError(e, "Failed to get user info");
  }
};

export const uploadProfilePhoto = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("picture", file);
    const res = await api.post("/api/v1/users/profile/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (e) {
    handleAxiosError(e, "Failed to upload photo");
  }
};

export const updateDetail = async (payload: UpdateDetailPayload) => {
  try {
    const res = await api.patch("/api/v1/users/info/detail", payload);
    return res.data;
  } catch (e) {
    handleAxiosError(e, "Failed to update detail");
  }
};

export const updateContact = async (payload: UpdateContactPayload) => {
  try {
    const res = await api.patch("/api/v1/users/info/contact", payload);
    return res.data;
  } catch (e) {
    handleAxiosError(e, "Failed to update contact");
  }
};
