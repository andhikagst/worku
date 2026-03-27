"use client";

import { Button } from "@/shared/components/UI/button/Button";
import { User, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginPayload, loginSchema } from "../schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, isError, error, reset } = useLogin();

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
      onChange={() => {
        if (isError) reset();
      }}
      className="space-y-2 font-plus-jakarta-sans px-32"
    >
      <div className="space-y-0.5">
        <TextInput
          type="text"
          icon={User}
          placeholder="Username"
          containerClassName="border-[#616162]! rounded-2xl! text-body h-16"
          {...register("username")}
        />
        <p className="text-red-500 text-sm pl-2 min-h-5 text-start">
          {errors.username?.message}
        </p>
      </div>
      <div className="space-y-0.5">
        <TextInput
          type="password"
          icon={Lock}
          placeholder="Password"
          containerClassName="border-[#616162]! rounded-2xl! text-body h-16"
          {...register("password")}
        />
        <p className="text-red-500 text-sm pl-2 min-h-4 text-start">
          {errors.password?.message}
        </p>
      </div>
      <p className="text-body text-gray-400">
        Don&apos;t have an account?{" "}
        <span className="font-bold text-gray-600">
          <Link href="/">Sign Up</Link>
        </span>
      </p>
      <div className="flex justify-center mt-4">
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
      <p className="text-red-500 text-center text-sm min-h-5">
        {isError && (error as Error).message}
      </p>
    </form>
  );
};

export default LoginForm;
