"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { questions } from "@/features/career-discovery/data/questions";
import QuestionCard from "@/features/career-discovery/components/question/QuestionCard";
import ProgressBar from "@/features/career-discovery/components/ProgressBar";
import { useCareerDiscoveryRouter } from "@/features/career-discovery/hooks/useCareerDiscoveryRouter";
import { notFound } from "next/navigation";

const dimensions = [...new Set(questions.map((q) => q.dimension))];

const QuestionContent = () => {
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step") ?? "1");
  const { saveScores, loadScores, goToQuestion, goToResult } =
    useCareerDiscoveryRouter();

  if (step < 1 || step > questions.length) return notFound();

  const currentIndex = step - 1;
  const currentQuestion = questions[currentIndex];
  const progress = (currentIndex / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    const option = currentQuestion.options.find((o) => o.id === optionId);
    if (!option) return;

    const scores = loadScores();
    Object.entries(option.scores).forEach(([key, val]) => {
      scores[key] = (scores[key] || 0) + val;
    });
    saveScores(scores);

    if (step < questions.length) {
      goToQuestion(step + 1);
    } else {
      goToResult();
    }
  };

  const handleSkip = () => {
    if (step < questions.length) {
      goToQuestion(step + 1);
    } else {
      goToResult();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:pt-34.25 pt-28 font-plus-jakarta-sans">
      <div className="w-full max-w-4xl flex flex-col gap-10 py-18">
        <ProgressBar
          current={currentIndex}
          total={questions.length}
          progress={progress}
          dimension={currentQuestion.dimension}
          dimensions={dimensions}
        />
        <QuestionCard
          question={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
          onSelect={handleSelect}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-green-normal"
                    : i < currentIndex
                      ? "w-2 bg-blue-light-active"
                      : "w-2 bg-blue-light-active"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleSkip}
            className="text-blue-normal text-body-lg hover:text-blue-normal-hover"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

const QuestionPage = () => (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    }
  >
    <QuestionContent />
  </Suspense>
);

export default QuestionPage;
