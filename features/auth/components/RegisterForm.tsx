"use client";

import { Button } from "@/shared/components/UI/button/Button";
import { User, Mail, Lock, Pen } from "lucide-react";
import { useForm } from "react-hook-form";
import { RegisterPayload, registerSchema } from "../schemas/auth.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../hooks/useRegister";
import { useRouter } from "next/navigation";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import Link from "next/link";

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
      className="space-y-2 font-plus-jakarta-sans"
    >
      <div className="space-y-1">
        <TextInput
          type="text"
          icon={Pen}
          placeholder="Name"
          containerClassName="border-[#616162]! rounded-2xl! text-body h-16"
          {...register("name")}
        />
        <p className="text-red-500 text-sm pl-2 min-h-5 text-start">
          {errors.name?.message}
        </p>
      </div>
      <div>
        <TextInput
          type="email"
          icon={Mail}
          placeholder="Email"
          containerClassName="border-[#616162]! rounded-2xl! text-body h-16"
          {...register("email")}
        />
        <p className="text-red-500 text-sm pl-2 min-h-5 text-start">
          {errors.email?.message}
        </p>
      </div>
      <div>
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
      <div>
        <TextInput
          type="password"
          icon={Lock}
          placeholder="Password"
          containerClassName="border-[#616162]! rounded-2xl! text-body h-16"
          {...register("password")}
        />
        <p className="text-red-500 text-sm pl-2 min-h-5 text-start">
          {errors.password?.message}
        </p>
      </div>
       <p className="text-body text-gray-400">
        Already have an account?{" "}
        <span className="font-bold text-gray-600">
          <Link href="/">Sign In</Link>
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
          {isPending ? "Loading..." : "Sign Up"}
        </Button>
      </div>
      <p className="text-red-500 text-center text-sm min-h-5">
        {isError && (error as Error).message}
      </p>
    </form>
  );
};

export default RegisterForm;
