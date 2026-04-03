"use client";
import { use } from "react";
import Image from "next/image";
import { useCoursesByCategory } from "../../hooks/useCourse";
import { useCourseCategories } from "../../hooks/useCourse";
import CourseCard from "./CourseCard";

interface Props {
  categoryId: string;
}

const CoursesByCategory = ({ categoryId }: Props) => {
  const {
    data: courses,
    isLoading,
    isError,
  } = useCoursesByCategory(categoryId);
  const { data: categories } = useCourseCategories();

  const category = categories?.find((c) => c.id === categoryId);

  return (
    <main className="w-full font-plus-jakarta-sans">
      <section className="w-full bg-gradient-to-bottom py-16 px-20 pt-34.25">
        <div className="flex items-center gap-16 pt-16">
          {category?.cover_image && (
            <Image
              src={category.cover_image}
              alt={category.name}
              width={475}
              height={459}
            />
          )}
          <div className="text-white flex flex-col gap-4 max-w-xl">
            <h1 className="text-display-3 font-bold">
              {category?.name ?? "Course"}
            </h1>
            <p className="text-body leading-relaxed">{category?.description}</p>
            <button className="w-fit px-8 py-3 bg-blue-dark rounded-full text-body font-semibold hover:bg-blue-darker transition-all">
              Get Certificate
            </button>
          </div>
        </div>
      </section>

      <section className="px-20 py-6">
        <div className="bg-blue-dark rounded-2xl px-10 py-6 flex items-center gap-10 text-white">
          <div className="flex flex-col items-center gap-1 border-r border-white/20 pr-10">
            <span className="text-h2 font-bold text-green-normal">0%</span>
            <span className="text-body-xs text-white">Complete</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-white/20 pr-10">
            <span className="text-h2 font-bold text-green-normal">0</span>
            <span className="text-body-xs text-white">Lessons</span>
          </div>
          <div className="flex flex-col items-center gap-1 pr-10">
            <span className="text-h2 font-bold text-green-normal">0</span>
            <span className="text-body-xs text-white">Remaining</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <span className="text-body-xs text-white">Overall Progress</span>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-green-normal rounded-full w-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-24 py-10">
        <h2 className="text-h2 font-bold text-gray-500 mb-2">
          {category?.name} Course
        </h2>
        <hr className="border-green-normal border-3 mb-8" />

        {isLoading && (
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-64 rounded-2xl bg-gray-100 animate-pulse"
              />
            ))}
          </div>
        )}

        {isError && (
          <p className="text-red-500 text-center text-body py-10">
            Failed to load courses.
          </p>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-4 gap-6">
            {!courses || courses.length === 0 ? (
              <p className="col-span-4 text-center text-gray-400 text-body py-10">
                No courses available.
              </p>
            ) : (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default CoursesByCategory;
