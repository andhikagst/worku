import api from "@/lib/axios";
import axios, { AxiosError } from "axios";

const handleAxiosError = (error: unknown, fallback: string): never => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError<{ message: string }>;
    throw new Error(e.response?.data?.message || fallback);
  }
  throw new Error(fallback);
};

export const createOrder = async (duration_days: number) => {
  try {
    const res = await api.post("/api/v1/orders", { duration_days });
    return res.data.payload as {
      id: string;
      user_id: string;
      duration_days: number;
      status: string;
      created_at: string;
    };
  } catch (e) {
    handleAxiosError(e, "Failed to create order");
  }
};

export const createSnapPayment = async (order_id: string) => {
  try {
    const res = await api.post("/api/v1/payments/snap", { order_id });
    return res.data.payload as {
      token: string;
      redirect_url: string;
    };
  } catch (e) {
    handleAxiosError(e, "Failed to create payment");
  }
};