import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDetail } from "../services/profile.service";
import { UpdateDetailPayload } from "../types/profile.types";

export const useUpdateDetail = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateDetailPayload) => updateDetail(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user-info"] }),
  });
};
