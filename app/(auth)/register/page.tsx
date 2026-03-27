import Image from "next/image";
import google from "@/public/auth/google.png";
import facebook from "@/public/auth/facebook.png";
import linkedin from "@/public/auth/linkedin.png";
import bg_login from "@/public/auth/bg_login.png";
import outline_quote from "@/public/auth/outline_quote.svg";

import RegisterForm from "@/features/auth/components/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="flex h-screen w-full font-plus-jakarta-sans">
      <div
        className="flex flex-1 justify-center items-center bg-cover bg-center flex-col relative h-full"
        style={{ backgroundImage: `url(${bg_login.src})` }}
      >
        <div className="leading-none text-white drop-shadow-[rgba(0,0,0,0.50)] drop-shadow-md">
          <h1 className="text-[5rem] font-bold">Let&apos;s Make it</h1>
          <h1 className="text-[5rem] font-bold">Happen</h1>
          <h1 className="text-[5rem] font-bold">Together!</h1>
        </div>
        <Image
          className="absolute top-[6%] left-[35%]"
          src={outline_quote}
          alt="..."
        />
      </div>
      <div className="flex flex-col flex-1 justify-center text-center gap-5">
        <h1 className="text-[2.75rem] text-blue-dark font-bold">
          Create account
        </h1>
        <div className="flex gap-2.5 justify-center">
          <Image src={google} alt="..." />
          <Image src={facebook} alt="..." />
          <Image src={linkedin} alt="..." />
        </div>
        <p className="text-[#797A7C] text-[1.125rem]">
          or use your email for registration
        </p>
        <div className="px-32">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
