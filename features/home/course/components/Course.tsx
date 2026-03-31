import CourseCard from "./CourseCard";
import { courseList } from "@/features/course/data/courseList";
import Link from "next/link";
import { Button } from "@/shared/components/UI/button/Button";

const Course = () => {
  return (
    <section className="flex flex-col items-center font-plus-jakarta-sans gap-16">
      <h1 className="text-display-3 text-blue-dark font-bold">
        Courses to Get You Started
      </h1>
      <div className="grid grid-cols-4 gap-10">
        {courseList.slice(0, 4).map((item) => {
          return <CourseCard key={item.id} data={item} />;
        })}
      </div>
      <Link href="/course">
        <Button variant="secondary" size="large" className="px-25 py-8 ring-1! font-normal drop-shadow-lg drop-shadow-gray-600 transition-all">
          Explore All Course
        </Button>
      </Link>
    </section>
  );
};

export default Course;
