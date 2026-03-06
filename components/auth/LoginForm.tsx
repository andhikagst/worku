"use client";

import Link from "next/link";
import { LoginButton } from "../button";

const LoginForm = () => {
  return (
    <form
      action=""
      onSubmit={() => console.log("form submitted")}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@email.com"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            Email Error
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-500 mt-2">
            Password error
          </span>
        </div>
      </div>
      <LoginButton />
      <p className="text-sm font-light text-gray-500">
        Don&apos;t have an account yet?
        <Link href="/register">
          <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">
            Sign Up
          </span>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
