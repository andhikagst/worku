import React, { forwardRef } from "react";

export interface Option {
  value: string;
  label: string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  placeholder?: string;
}

export const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    { label, options, placeholder = "-- Select --", className = "", ...props },
    ref,
  ) => {
    return (
      <div className="space-y-1">
        <label className="block">{label}</label>
        <div className="">
          <select
            ref={ref}
              className={`w-full outline-none appearance-none text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162] ${className}`}
              defaultValue=""
            {...props}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((data) => (
              <option key={data.value} value={data.value}>
                {data.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  },
);

SelectInput.displayName = "SelectInput";
