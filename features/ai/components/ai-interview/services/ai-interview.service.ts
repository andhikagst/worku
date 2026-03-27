import api from "@/lib/axios";
import axios, { AxiosError } from "axios";
import { SessionSetupPayload } from "../schemas/ai-interview.schema";

const handleAxiosError = (error: unknown, fallbackMessage: string): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data?.message || fallbackMessage);
  }
  throw new Error(fallbackMessage);
};

export const startInterview = async (
  payload: SessionSetupPayload & { input: string }
) => {
  try {
    const response = await api.post("api/v1/ai/interview/new", {
      job_role: payload.job_role,
      interview_type: payload.interview_type,
      difficulty: payload.difficulty,
      input: payload.input,
    });
    return response.data.payload as {
      previous_response_id: string;
      response: string;
    };
  } catch (error) {
    handleAxiosError(error, "Failed to start interview session");
    throw error;
  }
};

export const continueInterview = async (payload: {
  previous_response_id: string;
  input: string;
}) => {
  try {
    const response = await api.post("api/v1/ai/interview", payload);
    return response.data.payload as {
      previous_response_id: string;
      response: string;
    };
  } catch (error) {
    handleAxiosError(error, "Failed to continue interview session");
    throw error;
  }
};