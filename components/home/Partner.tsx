import Image from "next/image";
import shopee from "@/public/home/partners/shopee.png";
import blibli from "@/public/home/partners/blibli.png";
import unilever from "@/public/home/partners/unilever.png";
import xiaomi from "@/public/home/partners/xiaomi.png";
import grab from "@/public/home/partners/grab.png";
import gojek from "@/public/home/partners/gojek.png";
import React from "react";
import { Circle } from 'lucide-react';

const Partner = () => {
  return (
    <section className="w-full flex flex-col items-center py-23 font-plus-jakarta-sans gap-16">
      <h1 className="text-h3 text-blue-dark font-bold">
        Learn from 30+ our partner companies
      </h1>
      <div className="flex gap-30">
        <Image src={shopee} alt="..." />
        <Image src={blibli} alt="..." />
        <Image src={unilever} alt="..." />
        <Image src={xiaomi} alt="..." />
        <Image src={grab} alt="..." />
        <Image src={gojek} alt="..." />
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
