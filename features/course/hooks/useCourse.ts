import { useQuery } from "@tanstack/react-query";
import { getCourseCategories, getCoursesByCategory } from "../services/course.service";

export const useCourseCategories = () => {
  return useQuery({
    queryKey: ["course-categories"],
    queryFn: getCourseCategories,
  });
};

export const useCoursesByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["courses", categoryId],
    queryFn: () => getCoursesByCategory(categoryId),
    enabled: !!categoryId,
  });
};