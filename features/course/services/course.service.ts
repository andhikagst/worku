import api from "@/lib/axios"

export interface CourseFromApi {
  id: string;
  name: string;
  cover_image: string;
  price: number;
}

interface CourseResponse {
  message: string;
  payload: CourseFromApi[];
}

export const getCourse = async (): Promise<CourseResponse> => {
  try {
    const res = await api.get("api/v1/courses/list/0/16")
    return res.data;
  } catch (error) {
    throw error;
  }
}