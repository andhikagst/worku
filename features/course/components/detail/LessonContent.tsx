import { CourseDetailData, KeyConcept } from "../../types/course.types";
import { ClockIcon, YoutubeLogoIcon, CheckSquareIcon } from "@phosphor-icons/react";

interface Props {
  data: CourseDetailData;
  isCompleted: boolean;
  onComplete: () => void;
}

const ConceptCard = ({ concept }: { concept: KeyConcept }) => {
  const Icon = concept.icon;
  return (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-2 relative overflow-hidden">
    <div className="absolute bg-blue-normal w-2 left-0 top-0 bottom-0" />
    <span className="text-h4 text-blue-normal"><Icon size={24} weight="fill"/></span>
    <h4 className="font-bold text-body-sm text-blue-dark">{concept.title}</h4>
    <p className="text-body-xs text-blue-dark leading-relaxed">{concept.description}</p>
  </div>
)};

const LessonContent = ({ data, isCompleted, onComplete }: Props) => (
  <div className="flex flex-col gap-8 p-8">
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-body text-green-dark">- {data.courseTitle} -</p>
        <h1 className="text-h3 font-bold text-black">{data.lessonTitle}</h1>
        <div className="flex items-center gap-4 text-body text-green-dark">
          <span className="flex items-center gap-1"><ClockIcon size={24} weight="fill"/> {data.lessonDuration}</span>
          <span className="flex items-center gap-1">▶ {data.lessonVideoCount} Video</span>
        </div>
      </div>
      <button className="text-gray-400 hover:text-gray-600 transition-all">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>
    </div>

    <div className="relative bg-blue-light-hover rounded-2xl p-6 border border-gray-100 overflow-hidden">
      <div className="absolute bg-green-normal w-2 left-0 top-0 bottom-0" />
      <p className="text-body text-blue-dark leading-relaxed">{data.lessonDescription}</p>
    </div>

    <div className="flex flex-col gap-4">
      <div>
        <p className="text-body text-green-dark">- {data.courseTitle} -</p>
        <h2 className="text-h3 font-bold text-black mt-1">4 Key Concept</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {data.keyConcepts.map((concept, i) => (
          <ConceptCard key={i} concept={concept} />
        ))}
      </div>
    </div>

    <div className="bg-white rounded-2xl p-5 border border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isCompleted ? "bg-green-500" : "bg-gray-100"}`}>
          <CheckSquareIcon weight="fill" size={20} className={isCompleted ? "text-white" : "text-gray-400"} />
        </div>
        <div>
          <p className="font-bold text-body-sm text-blue-dark">Mark Lesson Complete</p>
          <p className="text-body-xs text-gray-400">Watch the full video to earn XP and unlock the Module</p>
        </div>
      </div>
      <button
        onClick={onComplete}
        disabled={isCompleted}
        className={`px-8 py-3 rounded-xl text-body font-semibold transition-all
          ${isCompleted
            ? "bg-green-500 text-white cursor-default"
            : "bg-green-normal text-white hover:bg-green-600"
          }`}
      >
        {isCompleted ? "Completed ✓" : "Complete"}
      </button>
    </div>
  </div>
);

export default LessonContent;