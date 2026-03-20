import React, { Children } from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "submit" | "reset" | "button"| undefined;
  disabled?: boolean | undefined;
  onClick?: () => void;
  className?: string;
}

export const PrimaryButtonLarge = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-300 font-bold px-14 py-7 bg-blue-dark text-white rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};

export const PrimaryButtonDefault = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-200 font-bold px-9 py-6 bg-blue-dark text-white rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};

export const PrimaryButtonSmall = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-100 font-bold px-6 py-4 bg-blue-dark text-white rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};
export const SecondaryButtonLarge = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-300 font-bold px-14 py-7 bg-white text-blue-dark border-3 border-blue-dark rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButtonDefault = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-200 font-bold px-9 py-6 bg-white text-blue-dark border-3 border-blue-dark rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};

export const SecondaryButtonSmall = ({ children, type, disabled, onClick, className }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`hover:bg-blue-dark-hover transition-all cursor-pointer w-fit font-plus-jakarta-sans text-100 font-bold px-6 py-4 bg-white text-blue-dark border-3 border-blue-dark rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};
