import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "../schemas/auth.schemas";
import { registerUser } from "../services/auth.service";

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: RegisterPayload) => registerUser(payload),
  });
};
