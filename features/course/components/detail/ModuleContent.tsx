import { BookOpenIcon, CheckSquareIcon } from "@phosphor-icons/react";
import { ModuleData, ModuleSection } from "../../types/course.types";

const StepList = ({
  steps,
}: {
  steps: NonNullable<ModuleSection["steps"]>;
}) => (
  <div className="flex flex-col gap-3 mt-4 ">
    {steps.map((step) => (
      <div key={step.number} className="flex gap-4 bg-[#EBF0F3] rounded-xl p-4 border-gray-300 border">
        <span className="text-body-sm font-bold text-white bg-green-normal shrink-0 w-8 h-8 flex justify-center items-center rounded-lg">
          {step.number}
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-body-sm font-semibold text-blue-dark">
            {step.title}
          </p>
          <p className="text-body-xs text-blue-dark leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const ComparisonTable = ({
  table,
}: {
  table: NonNullable<ModuleSection["comparisonTable"]>;
}) => (
  <div className="grid grid-cols-2 gap-4 mt-4">
    <div className="bg-gray-200 rounded-xl p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-2 bg-green-500"/>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M2 5l2 2 4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="text-body-sm font-bold text-blue-dark">
          {table.allowedTitle}
        </p>
      </div>
      <ul className="flex flex-col gap-1">
        {table.allowed.map((item) => (
          <li
            key={item}
            className="text-body-xs text-blue-dark flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-green-normal shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-gray-200 rounded-xl p-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-2 bg-red-500"/>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M3 3l4 4M7 3l-4 4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <p className="text-body-sm font-bold text-blue-dark">
          {table.notAllowedTitle}
        </p>
      </div>
      <ul className="flex flex-col gap-1">
        {table.notAllowed.map((item) => (
          <li
            key={item}
            className="text-body-xs text-blue-dark flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SectionCard = ({ section }: { section: ModuleSection }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-300 flex flex-col gap-3 relative overflow-hidden">
    <div className="flex items-center gap-4">
      <span className="text-blue-normal bg-linear-to-t from-green-normal to-white rounded-md w-10 h-10 flex justify-center items-center">
        <BookOpenIcon size={20} weight="fill" />
      </span>
      <div  className="text-black">
        <h3 className="text-body font-bold">{section.title}</h3>
        <span className="text-body-xs">{section.badge}</span>
      </div>
    </div>
    <hr className="text-gray-300" />
    <div className="flex flex-col gap-3">
      {section.content.split("\n\n").map((para, i) => (
        <p key={i} className="text-body-xs text-black leading-relaxed">
          {para}
        </p>
      ))}
    </div>
    {section.steps && <StepList steps={section.steps} />}
    {section.comparisonTable && (
      <ComparisonTable table={section.comparisonTable} />
    )}
  </div>
);

interface Props {
  data: ModuleData;
  isCompleted: boolean;
  onComplete: () => void;
}

const ModuleContent = ({ data, isCompleted, onComplete }: Props) => (
  <div className="flex flex-col gap-8 p-8">
    <div className="relative bg-gradient-to-left rounded-2xl p-6 border border-gray-100 overflow-hidden text-white">
      <div className="flex flex-col gap-2">
        <p className="text-body ">- {data.courseTitle} -</p>
        <h1 className="text-h3 font-bold">{data.moduleTitle}</h1>
        <p className="text-body leading-relaxed">{data.subtitle}</p>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      {data.sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>

    <div className="bg-white rounded-2xl p-5 border border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isCompleted ? "bg-green-500" : "bg-gray-100"
          }`}
        >
          <CheckSquareIcon
            weight="fill"
            size={20}
            className={isCompleted ? "text-white" : "text-gray-400"}
          />
        </div>
        <div>
          <p className="font-bold text-body-sm text-blue-dark">
            Mark Lesson Complete
          </p>
          <p className="text-body-xs text-gray-400">
            Watch the full video to earn XP and unlock the Module
          </p>
        </div>
      </div>
      <button
        onClick={onComplete}
        disabled={isCompleted}
        className={`px-8 py-3 rounded-xl text-body font-semibold transition-all ${
          isCompleted
            ? "bg-green-500 text-white cursor-default"
            : "bg-green-normal text-white hover:bg-green-600"
        }`}
      >
        {isCompleted ? "Completed ✓" : "Complete"}
      </button>
    </div>
  </div>
);

export default ModuleContent;
