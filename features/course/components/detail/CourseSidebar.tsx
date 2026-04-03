import Image from "next/image";
import { PlayIcon, FileTextIcon, TrophyIcon, MedalIcon } from "@phosphor-icons/react";
import { CourseDetailData, LessonItem } from "../../types/course.types";

const ICON_MAP = {
  video: <PlayIcon size={24} weight="fill" className="text-blue-normal" />,
  module: <FileTextIcon size={24} weight="fill" className="text-blue-normal" />,
  project: <TrophyIcon size={24} weight="fill" className="text-blue-normal" />,
};

interface Props {
  data: CourseDetailData;
  completedItems: Set<string>;
  onToggleItem: (id: string) => void;
}

const CourseSidebar = ({ data, completedItems, onToggleItem }: Props) => (
  <aside className="flex flex-col gap-4 w-full">
    <div className="bg-gradient-to-left rounded-2xl overflow-hidden flex">
      <div className="relative h-40 w-full">
        <Image
          src={data.courseCoverImage}
          alt={data.courseTitle}
          fill
          className="object-cover"
          sizes="400px"
        />
      </div>
      <div className="p-4 text-white">
        <h3 className="font-bold text-h5">{data.courseTitle}</h3>
        <p className="text-body-xs text-white/70 mt-1">{data.courseDescription}</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl border border-gray-400 overflow-hidden">
      <div className="px-5 py-3 bg-green-light-hover  border-b border-gray-300">
        <h4 className="font-bold text-body-sm text-green-dark">{data.lessonTitle}</h4>
      </div>
      <div className="flex flex-col">
        {data.lessonItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-5 py-4 border-b border-gray-400 last:border-0 hover:bg-gray-50 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="">
                {ICON_MAP[item.type]}
              </div>
              <span className="text-body-xs text-gray-700">{item.title}</span>
            </div>
            <button
              onClick={() => onToggleItem(item.id)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all shrink-0
                ${completedItems.has(item.id)
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300 hover:border-green-400"
                }`}
            >
              {completedItems.has(item.id) && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-2xl p-5 border border-gray-400 flex items-center gap-4">
      <div className="relative w-16 h-16 shrink-0">
        <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke="#66ACA5" strokeWidth="3"
            strokeDasharray={`${data.overallProgress} ${100 - data.overallProgress}`}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-body-xs font-bold text-blue-dark">
          {data.overallProgress}%
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-body-sm text-blue-dark">COURSES PROGRESS</p>
        <p className="font-bold text-body-sm text-blue-dark">{data.lessonTitle}</p>
        <p className="text-body-xs text-gray-500">Pre-Test | 3 Videos | Post-Test | Verified Project</p>
      </div>
    </div>

    <div className="bg-blue-dark rounded-2xl p-6 text-white flex flex-col items-center gap-3 text-center">
      <span className="text-h2"><MedalIcon size={32} weight="fill" className="text-[#FFD35C]"/></span>
      <h3 className="font-bold text-h5">{data.courseTitle}</h3>
      <p className="text-body-xs text-white/70">WorkU Verified Certificate</p>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-normal rounded-full transition-all"
          style={{ width: `${data.overallProgress}%` }}
        />
      </div>
      <p className="text-body-xs text-white/70">{data.progressLabel}</p>
    </div>
  </aside>
);

export default CourseSidebar;