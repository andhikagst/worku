import React from "react";
import Image from "next/image";
import CourseCard from "./card/CourseCard";
import { courseList } from "./data/courseList";
import Link from "next/link";
import PrimaryButton from "../UI/button/PrimaryButton";

const Course = () => {
  return (
    <section className="w-full flex flex-col items-center py-23 font-plus-jakarta-sans gap-16">
      <h1 className="text-h2 text-blue-dark font-bold">
        Courses to Get You Started
      </h1>
      <div className="flex gap-10">
        {courseList.map((item) => {
          return <CourseCard key={item.id} data={item} />;
        })}
      </div>
      <Link href="/course">
        <PrimaryButton className="px-24 py-8 text-body1 text-white bg-blue-dark">
          Explore All Course
        </PrimaryButton>
      </Link>
    </section>
  );
};

export default Course;
