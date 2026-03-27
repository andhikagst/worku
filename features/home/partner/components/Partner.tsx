import Image from "next/image";

import React from "react";
import { Circle } from "lucide-react";
import { partnerList } from "../data/partnerList";

const Partner = () => {
  return (
    <section className="flex flex-col items-center font-plus-jakarta-sans gap-16">
      <h1 className="md:text-h2 sm:text-3xl text-2xl text-blue-dark font-bold text-center">
        Learn from 30+ our partner companies
      </h1>
      <div
        className="relative overflow-hidden mx-auto self-center 
                w-full 
                max-w-75 sm:max-w-xl md:max-w-2xl lg:max-w-4xl"
      >
        <div className="flex w-max animate-marquee">
          {partnerList.map((item, index) => (
            <div key={index} className="flex items-center px-4 sm:px-10">
              <Image
                src={item.image}
                alt="..."
                // Atur lebar gambar yang berbeda untuk layar kecil jika perlu
                className="w-12 sm:w-16 md:w-24 hover:opacity-100 transition-opacity"
              />
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
