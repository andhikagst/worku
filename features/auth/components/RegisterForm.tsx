"use client";

import { PrimaryButtonSmall } from "@/shared/components/UI/button/PrimaryButton";
import { User, Mail, Lock, Pen } from "lucide-react";
import { useForm } from "react-hook-form";
import { RegisterPayload, registerSchema } from "../schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/useRegister";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending, isError, error } = useRegister();

  const onSubmit = (data: RegisterPayload) => {
    mutate(data, {
      onSuccess: () => {
        router.push("/login");
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
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100 pr-4">
        <div className="p-5">
          <Pen size={24} />
        </div>
        <input
          type="text"
          placeholder="Name"
          className=" w-full text-[1.125rem]"
          {...register("name")}
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-sm pl-2">{errors.name.message}</p>
      )}
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100 pr-4">
        <div className="p-5">
          <Mail size={24} />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full text-[1.125rem]"
          {...register("email")}
        />
      </div>
      {errors.email && (
        <p className="text-red-500 text-sm pl-2">{errors.email.message}</p>
      )}
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100 pr-4">
        <div className="p-5">
          <User size={24} />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full text-[1.125rem]"
          {...register("username")}
        />
      </div>
      {errors.username && (
        <p className="text-red-500 text-sm pl-2">{errors.username.message}</p>
      )}
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100 pr-4">
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
        <PrimaryButtonSmall
          type="submit"
          disabled={isPending}
          className="px-12 py-2.5 w-fit"
        >
          {isPending ? "Loading..." : "Sign Up"}
        </PrimaryButtonSmall>
      </div>
      {isError && (
        <p className="text-red-500 text-center text-sm">
          {(error as Error).message}
        </p>
      )}
    </form>
  );
};

export default RegisterForm;
