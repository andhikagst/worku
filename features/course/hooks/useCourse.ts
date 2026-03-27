import { useQuery } from "@tanstack/react-query"
import { getCourse } from "../services/course.service"

export const useCourse = () => {
  return useQuery({
    queryKey: ["courses", "list"],
    queryFn: getCourse
  })
}