import React from "react";

// 1. Extend bawaan HTML, lalu tambahkan props variant dan size
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "large" | "default" | "small" | "smaller";
}

export const Button = ({
  children,
  variant = "primary", 
  size = "default",    
  className = "",
  ...props             
}: ButtonProps) => {

  const baseClasses =
    "transition-all cursor-pointer w-fit font-plus-jakarta-sans font-bold rounded-full shadow-[rgba(0,0,0,0.25)] disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-blue-dark text-white hover:bg-blue-dark-hover",
    secondary:
      "bg-white text-blue-dark border-3 border-blue-dark hover:bg-blue-dark-hover hover:text-white", 
  };

  const sizeClasses = {
    large: "text-300 px-14 py-7",
    default: "text-200 px-9 py-6",
    small: "text-100 px-6 py-4",
    smaller: "text-100 px-4.5 py-3.5",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};