import React from "react";
import { filterList } from "../data/filterList";
import {
  PrimaryButtonDefault,
  PrimaryButtonLarge,
  PrimaryButtonSmall,
  SecondaryButtonSmall,
} from "@/shared/components/UI/button/PrimaryButton";
import { courseList } from "../data/courseList";
import CourseCard from "@/features/home/course/components/CourseCard";

const Courses = () => {
  return (
    <section className="py-37 font-plus-jakarta-sans">
      <div className="px-20 flex flex-col gap-11.5">
        <div className="flex justify-between text-white">
          {filterList.map((data) => {
            return data.label === "All" ? (
              <button
                key={data.id}
                className="text-h3 bg-green-normal px-16 py-2 rounded-full"
              >
                {data.label}
              </button>
            ) : (
              <button
                key={data.id}
                className="text-h3 px-10 py-2 rounded-full text-green-normal border-2 border-green-normal"
              >
                {data.label}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-10">
          {courseList.map((data) => {
            return (
              <CourseCard
                className="border-2 border-green-normal"
                key={data.id}
                data={data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
