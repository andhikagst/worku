"use client";

import { User, Mail, Lock } from "lucide-react";

const RegisterForm = () => {
  return (
    <form
      action=""
      onSubmit={() => console.log("form submitted")}
      className="space-y-6 font-plus-jakarta-sans"
    >
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100">
        <div className="p-5">
          <User size={24}/>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className=" w-full text-[1.125rem]"
        />
      </div>
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100">
         <div className="p-5">
          <Mail size={24}/>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full text-[1.125rem]"
        />
      </div>
      <div className="flex items-center bg-green-light-active border border-[#616162] text-[#616162] rounded-2xl max-w-100 min-w-100">
         <div className="p-5">
          <Lock size={24}/>
        </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full text-[1.125rem]"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
