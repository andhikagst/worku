import React, { Children } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full shadow-[rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
