import React from "react";
import Image from "next/image";
import CourseCard from "./card/CourseCard";
import { courseList } from "./data/courseList";
import Link from "next/link";
import { PrimaryButtonDefault } from "../UI/button/PrimaryButton";

const Course = () => {
  return (
    <section className="w-full flex flex-col items-center py-23 font-plus-jakarta-sans gap-16">
      <h1 className="text-display-3 text-blue-dark font-bold">
        Courses to Get You Started
      </h1>
      <div className="flex gap-10">
        {courseList.map((item) => {
          return <CourseCard key={item.id} data={item} />;
        })}
      </div>
      <Link href="/course">
        <PrimaryButtonDefault>
          Explore All Course
        </PrimaryButtonDefault>
      </Link>
    </section>
  );
};

export default Course;
