import LoginForm from "@/features/auth/components/LoginForm";
import Image from "next/image";
import google from "@/public/auth/google.png";
import facebook from "@/public/auth/facebook.png";
import linkedin from "@/public/auth/linkedin.png";
import bg_login from "@/public/auth/bg_login.png";
import chat from "@/public/auth/chat.svg";

import React from "react";
import { Button } from "@/shared/components/UI/button/Button";

const LoginPage = () => {
  return (
    <main className="flex h-screen w-full font-plus-jakarta-sans pt-24">
      <div className="flex flex-col flex-1 justify-center items-center gap-5">
        <h1 className="text-[2.75rem] text-blue-dark font-bold">
          Sign in to WorkU
        </h1>
        <div className="flex gap-2.5">
          <Image src={google} alt="..." />
          <Image src={facebook} alt="..." />
          <Image src={linkedin} alt="..." />
        </div>
        <p className="text-[#797A7C] text-[1.125rem]">
          or use your email account
        </p>
        <LoginForm />
      </div>
      <div
        className="flex flex-1 justify-center items-center bg-cover bg-center flex-col relative"
        style={{ backgroundImage: `url(${bg_login.src})` }}
      >
        <div className="leading-none text-white drop-shadow-[rgba(0,0,0,0.50)] drop-shadow-md">
          <h1 className="text-[5rem] font-bold">Hey</h1>
          <h1 className="text-[5rem] font-bold">welcome</h1>
          <h1 className="text-[5rem] font-bold">back!</h1>
        </div>
        <Image
          className="absolute top-[25%] right-[28%]"
          src={chat}
          alt="..."
        />
      </div>
    </main>
  );
};

export default LoginPage;
