import React, { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label htmlFor="input1" className="block">
          {label}
        </label>
        <input
          ref={ref}
          className={`w-full outline-none text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162] ${className}`}
          {...props}
        />
      </div>
    );
  },
);

TextInput.displayName = "TextInput"
