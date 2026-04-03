import api from "@/lib/axios";
import axios, { AxiosError } from "axios";
import { CourseCategory, Course } from "../types/course.types";

const handleAxiosError = (error: unknown, fallback: string): never => {
  if (axios.isAxiosError(error)) {
    const e = error as AxiosError<{ message: string }>;
    throw new Error(e.response?.data?.message || fallback);
  }
  throw new Error(fallback);
};

export const getCourseCategories = async (): Promise<CourseCategory[]> => {
  try {
    const res = await api.get("/api/v1/courses/category");
    return res.data.payload;
  } catch (e) { handleAxiosError(e, "Failed to fetch categories"); throw e}
};

export const getCoursesByCategory = async (categoryId: string): Promise<Course[]> => {
  try {
    const res = await api.get(`/api/v1/courses/list/0/16/${categoryId}`);
    return res.data.payload;
  } catch (e) { handleAxiosError(e, "Failed to fetch courses"); throw e; }
};