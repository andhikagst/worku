"use client";
import { Question } from "../../types/career-discovery.types";

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onSelect: (optionId: string) => void;
}

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  onSelect,
}: QuestionCardProps) => {
  return (
    <div className="flex flex-col gap-6 text-blue-normal">
      <div>
        <p className="text-100 mb-2">
          Question {String(currentIndex + 1).padStart(2, "0")} of{" "}
          {totalQuestions}
        </p>
        <h2 className="text-h2 font-bold">{question.question}</h2>
        <p className="mt-2 text-body">
          No wrong answers — pick what feels most true to how you actually work.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50 hover:border-teal-500 hover:bg-teal-50 text-left transition-all group"
          >
            <div className="w-4 h-4 rounded-full bg-green-normal group-hover:bg-green-normal-hover transition-colors shrink-0" />
            <div className="">
              <p className="font-semibold">{option.text}</p>
              <p className="text-sm">{option.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
