import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../services/profile.service";

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo,
  });
};