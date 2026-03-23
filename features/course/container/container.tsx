import React from "react";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Practicioner from "../components/Practicioner";

const CourseContainer = () => {
  return (
    <main className="w-full mt-25.25">
      <Hero />
      <Courses />
      <Practicioner />
    </main>
  );
};

export default CourseContainer;
