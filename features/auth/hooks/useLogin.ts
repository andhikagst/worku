import { useMutation } from "@tanstack/react-query";
import { LoginPayload } from "../schemas/auth.schemas";
import { signIn } from "next-auth/react";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const result = await signIn("credentials", {
        ...payload,
        redirect: false,
      });

      if (result?.error) {
        throw new Error("Wrong username or password");
      }

      return result;
    },
  });
};
