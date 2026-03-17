import Image from "next/image";

import React from "react";
import { Circle } from 'lucide-react';
import { partnerList } from "./data/partnerList";

const Partner = () => {
  return (
    <section className="w-full flex flex-col items-center py-23 font-plus-jakarta-sans gap-16">
      <h1 className="text-h2 text-blue-dark font-bold">
        Learn from 30+ our partner companies
      </h1>
<div className="relative overflow-hidden max-w-4xl mx-auto">
  <div className="flex w-max animate-marquee">
    {partnerList.map((item, index) => (
      <div key={index} className="flex items-center px-10">
      <Image src={item.image} alt="..." className="hover:opacity-100 transition-opacity" />
      </div>
    ))}
  </div>
</div>
      <div className="flex gap-5">
        <Circle color="#DEE1E4" fill="#DEE1E4" size={14} />
        <Circle color="#DEE1E4" fill="#DEE1E4" size={14} />
        <Circle color="#DEE1E4" fill="#DEE1E4" size={14} />
      </div>
    </section>
  );
};

export default Partner;
