"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { mentorList } from "../data/mentorList";

const Mentor = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setIsAtStart(scrollLeft <= 1);
    setIsAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 1);
  };

  useEffect(() => {
    handleScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 1000;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col px-16 gap-10 font-plus-jakarta-sans">
      <div
        className="flex gap-16 overflow-x-scroll hide-scrollbar scroll-smooth"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {mentorList.map((data) => {
          return (
            <div
              key={data.id}
              className=" relative group min-w-116 min-h-148.5 bg-green-normal rounded-4xl flex items-end justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-t from-gray-600 to-green-normal translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Image
                src={data.image}
                alt={data.alt}
                className="relative z-10 group-hover:scale-110 transition-all duration-300 origin-top"
              />
            </div>
          );
        })}
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
          <button
            className={`rounded-full p-2 cursor-pointer transition-all duration-300 ${
              !isAtStart ? "bg-blue-dark" : "bg-transparent hover:bg-gray-100"
            }`}
            onClick={() => scroll("left")}
          >
            <ChevronLeft
              strokeWidth={1}
              size={48}
              color={!isAtStart ? "#ffffff" : "#285164"}
            />
          </button>
          <button
            className={`rounded-full p-2 cursor-pointer transition-all duration-300 ${
              !isAtEnd ? "bg-blue-dark" : "bg-transparent hover:bg-gray-100"
            }`}
            onClick={() => scroll("right")}
          >
            <ChevronRight
              strokeWidth={1}
              size={48}
              color={!isAtEnd ? "#ffffff" : "#285164"}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
