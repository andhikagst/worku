"use client";

import { Button } from "@/shared/components/UI/button/Button";
import { User, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginPayload, loginSchema } from "../schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, isError, error } = useLogin();

  const onSubmit = (data: LoginPayload) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/home");
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 font-plus-jakarta-sans"
    >
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100">
        <div className="p-5">
          <User size={24} />
        </div>
        <input
          type="text"
          placeholder="Username"
          className=" w-full text-[1.125rem]"
          {...register("username")}
        />
      </div>
      {errors.username && (
        <p className="text-red-500 text-sm pl-2">{errors.username.message}</p>
      )}
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100">
        <div className="p-5">
          <Lock size={24} />
        </div>
        <input
          type="password"
          placeholder="Password"
          className="w-full text-[1.125rem]"
          {...register("password")}
        />
      </div>
      {errors.password && (
        <p className="text-red-500 text-sm pl-2">{errors.password.message}</p>
      )}
      <div className="flex justify-center">
        <Button
          variant="primary"
          size="small"
          type="submit"
          disabled={isPending}
          className="px-12 py-2.5 w-fit"
        >
          {isPending ? "Loading..." : "Sign In"}
        </Button>
      </div>
      {isError && (
        <p className="text-red-500 text-center text-sm">
          {(error as Error).message}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
