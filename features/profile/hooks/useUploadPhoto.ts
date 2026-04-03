import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfilePhoto } from "../services/profile.service";

export const useUploadPhoto = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (file: File) => uploadProfilePhoto(file),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["user-info"] }),
  });
};