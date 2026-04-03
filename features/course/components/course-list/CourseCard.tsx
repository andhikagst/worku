import Image from "next/image";
import Link from "next/link";
import { Camera, Pin } from "lucide-react";
import { Course } from "../../types/course.types";

interface Props { course: Course; }

const CourseCard = ({ course }: Props) => (
  <div className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden shadow-md shadow-gray-400 hover:shadow-md transition-all">
    <div className="relative h-36 w-full">
      <Image
        src={course.cover_image}
        alt={course.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
    </div>
    <div className="p-4 flex flex-col gap-2 justify-between flex-1">
      <h4 className="font-bold text-body-sm text-black">{course.name}</h4>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 text-body-xs text-black">
          <span className="flex items-center gap-1 "><Camera size={20} className="text-green-normal"/> 0 lessons</span>
          <span className="flex items-center gap-1 "><Pin size={20} className="text-green-normal"/> 0 Module</span>
        </div>
        <div className="w-full h-1 bg-gray-300 rounded-full mt-1">
          <div className="h-full bg-green-normal rounded-full w-0" />
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-body-xs text-green-normal">0%</span>
          <Link href={`/course/learn/${course.id}`}>
            <button className="px-4 py-1 border border-green-normal rounded-lg text-body-xs font-semibold text-blue-dark hover:bg-blue-dark hover:text-white transition-all">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default CourseCard;