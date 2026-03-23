import { PrimaryButtonDefault } from "@/shared/components/UI/button/PrimaryButton";
import Image from "next/image";
import business_man from "@/public/course/young-businessman-removebg-preview 1.png";
import React from "react";

const PracticionerCard = () => {
  return (
    <div className="relative h-fit w-full">
      <div className="bg-blue-normal absolute w-full h-[80%] bottom-0 z-0 rounded-[40px]" />
      <div className="absolute text-white rounded-4xl z-2 top-[20%] left-0">
        <div className="py-21 px-18 flex flex-col gap-5">
          <h1 className="font-bold text-h1">Alvin Triartanto</h1>
          <h2 className="font-medium text-h3">Data Scientist | Gojek</h2>
          <PrimaryButtonDefault className="text-h3 font-normal bg-blue-dark-hover">
            See Syllabus
          </PrimaryButtonDefault>
        </div>
      </div>
      <div className="relative z-1 w-full">
        <Image src={business_man} alt="..." className="w-full h-auto object-cover object-bottom" />
      </div>
    </div>
  );
};

export default PracticionerCard;
