import api from "@/lib/axios";
import axios, { AxiosError } from "axios";
import { CvAnalysisPayload } from "../schemas/cv-analysis.schema";

const handleAxiosError = (error: unknown, fallbackMessage: string): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;
    throw new Error(axiosError.response?.data?.message || fallbackMessage);
  }
  throw new Error(fallbackMessage);
};

export const uploadCv = async (file: File): Promise<{ file_id: string }> => {
  try {
    const formData = new FormData();
    formData.append("document", file);

    const response = await api.post("api/v1/ai/cv/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    
    return {file_id: response.data.payload.file_id}
  } catch (error) {
    handleAxiosError(error, "CV upload failed");
    throw error;
  }
};

export const analyzeCv = async (
  payload: CvAnalysisPayload & { file_id: string }
) => {
  try {
    const response = await api.post("api/v1/ai/cv/analyze", payload);
    return response.data;
  } catch (error) {
    handleAxiosError(error, "CV analysis failed");
  }
};