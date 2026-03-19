import Image from "next/image";
import logo from "@/public/navbar/logo.svg";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-normal h-40.5">
      <div className="h-full flex justify-between items-center pl-16.5 pr-43.75 font-plus-jakarta-sans">
        <Image src={logo} alt="..." fill className="object-cover" />
        <p className="text-200 text-white">
          Copyright © 2023 | All Rights Reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
