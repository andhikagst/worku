import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContact } from "../services/profile.service";
import { UpdateContactPayload } from "../types/profile.types";

export const useUpdateContact = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: UpdateContactPayload) => updateContact(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user-info"] }),
  });
};