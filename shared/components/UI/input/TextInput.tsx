import { LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: LucideIcon;
  containerClassName?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, icon: Icon, className = "", containerClassName="", ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && <label className="block">{label}</label>}
        <div className={`flex items-center text-black border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162] ${containerClassName}`}>
          {Icon && (
            <div className="mr-3">
              <Icon size={24} className="text-[#616162]"/>
            </div>
          )}
          <input ref={ref} className={`bg-transparent text-body-sm outline-none w-full h-full ${className}`} {...props} />
        </div>
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
