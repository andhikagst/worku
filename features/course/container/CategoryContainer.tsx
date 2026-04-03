import Hero from "../components/category/Hero";
import CourseCategory from "../components/category/CourseCategory";
import Practicioner from "../components/category/Practicioner";

const CourseContainer = () => {
  return (
    <main className="w-full mt-25.25">
      <Hero />
      <CourseCategory />
      <Practicioner />
    </main>
  );
};

export default CourseContainer;
