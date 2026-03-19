import Image from "next/image";
import mentor_1 from "@/public/home/mentors/mentor_1.png"
import mentor_2 from "@/public/home/mentors/mentor_2.png"
import mentor_3 from "@/public/home/mentors/mentor_3.png"
import {ChevronLeft, ChevronRight} from 'lucide-react'
import React from "react";

const Mentor = () => {
  return (
    <section className="flex flex-col pl-20 overflow-hidden gap-10 font-plus-jakarta-sans">
      <div className="flex gap-16 w-fit">
        <div className="w-125  h-150 bg-green-normal rounded-4xl flex items-end justify-center">
          <Image src={mentor_1} alt="..." />
        </div>
        <div className="w-125 h-150 bg-green-normal rounded-4xl flex items-end justify-center">
          <Image src={mentor_2} alt="..." />
        </div>
        <div className="w-125 h-150 bg-green-normal rounded-4xl flex items-end justify-center">
          <Image src={mentor_3} alt="..." />
        </div>
      </div>
      <div className="flex pr-20 justify-between items-center">
        <div className="flex gap-35 items-center">
          <div className="text-h1 text-blue-dark font-extrabold">
            <h1>Meet our great</h1>
            <h1>mentor</h1>
          </div>
          <p className="text-300 leading-[1.3]">
            Our mentors are the bridge to your
            <br />
            professional readiness, guiding you
            <br />
            through every stage of the Competency &<br />
            Validation process.
          </p>
        </div>
        <div className="flex gap-4">
          <button>
            <ChevronLeft strokeWidth={1} size={48} color="#285164"/>
          </button>
          <button className="bg-blue-dark rounded-full p-2">
            <ChevronRight strokeWidth={1} size={48} color="#ffffff"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
