"use client";
import { CheckCircleIcon, WarningCircleIcon, LightningIcon } from "@phosphor-icons/react";
import { ProjectResult, ScoreBreakdownItem, FeedbackSection } from "../../types/course.types";

const ScoreGauge = ({ score }: { score: number }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative w-28 h-28 shrink-0">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke="white" strokeWidth="8"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-h2 font-black leading-none">{score}</span>
        <span className="text-body-xs font-semibold opacity-70">SCORE</span>
      </div>
    </div>
  );
};

const ScoreCard = ({ result }: { result: ProjectResult }) => (
  <div className="bg-blue-dark rounded-2xl p-6 flex flex-col items-center gap-4 text-white text-center">
    <ScoreGauge score={result.totalScore} />
    <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
      <CheckCircleIcon size={14} weight="fill" className="text-green-normal" />
      <span className="text-body-xs font-bold">PROJECT VERIFIED</span>
    </div>
    <div>
      <p className="font-bold text-body">{result.projectName}</p>
      <p className="text-body-xs text-white/60 mt-0.5">Reviewed by WorkU Mentor Experts</p>
    </div>
    <div className="w-full flex justify-around border-t border-white/10 pt-4">
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-black text-h3">{result.totalScore}/100</span>
        <span className="text-body-xs text-white/60">Final Score</span>
      </div>
      <div className="w-px bg-white/10" />
      <div className="flex flex-col items-center gap-0.5">
        <span className="font-black text-h3">+{result.xpEarned} xp</span>
        <span className="text-body-xs text-white/60">Earned</span>
      </div>
    </div>
  </div>
);

const ScoreBreakdown = ({ items, avg }: { items: ScoreBreakdownItem[]; avg: number }) => (
  <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-5 py-3 bg-blue-light border-b border-gray-100">
      <div className="flex items-center gap-2">
        <LightningIcon size={16} weight="fill" className="text-yellow-500" />
        <span className="text-body-xs font-bold text-blue-dark">+{100} XP Earned · Level Up!</span>
      </div>
      <span className="text-h4 font-black text-blue-dark">+100</span>
    </div>

    <div className="px-5 py-4 flex flex-col gap-1">
      <div className="flex items-center justify-between mb-3">
        <span className="font-bold text-body-sm text-blue-dark">Score Breakdown</span>
        <span className="text-body-xs text-gray-400">Avg {avg}/100</span>
      </div>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
            <Icon size={18} weight="fill" className="text-gray-400 shrink-0" />
            <span className="flex-1 text-body-xs text-blue-dark">{item.label}</span>
            <span className={`font-black text-body-sm ${item.color}`}>{item.score}</span>
          </div>
        );
      })}
    </div>
  </div>
);

const ExpertFeedback = ({ result }: { result: ProjectResult }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold text-body-sm shrink-0">
        {result.reviewerInitials}
      </div>
      <div>
        <p className="font-bold text-body-sm text-blue-dark">Expert Feedback</p>
        <p className="text-body-xs text-gray-400">
          {result.reviewedBy} · {result.reviewerTitle} · {result.reviewedDate}
        </p>
      </div>
    </div>
    <div className="bg-gray-50 rounded-xl border border-gray-100 px-5 py-4">
      <p className="text-body-xs text-blue-dark leading-relaxed">{result.expertFeedback}</p>
    </div>
  </div>
);

const FeedbackItem = ({ section }: { section: FeedbackSection }) => {
  const isPassed = section.status === "passed";
  return (
    <div className={`rounded-2xl border overflow-hidden ${isPassed ? "border-gray-100 bg-white" : "border-yellow-200 bg-yellow-50"}`}>
      <div className="flex items-center gap-3 px-5 py-4">
        {isPassed ? (
          <CheckCircleIcon size={20} weight="fill" className="text-green-normal shrink-0" />
        ) : (
          <WarningCircleIcon size={20} weight="fill" className="text-yellow-500 shrink-0" />
        )}
        <span className="flex-1 font-bold text-body-sm text-blue-dark">
          {section.number} · {section.title} —{" "}
          <span className={isPassed ? "text-green-normal" : "text-yellow-600"}>
            {isPassed ? "Passed" : "Needs Work"}
          </span>
        </span>
        <span className={`font-black text-body-sm ${isPassed ? "text-blue-normal" : "text-yellow-600"}`}>
          {section.score}/100
        </span>
      </div>
      <div className="px-5 pb-4">
        <p className="text-body-xs text-gray-600 leading-relaxed">{section.description}</p>
      </div>
    </div>
  );
};

const ImprovementTip = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
    <p className="font-bold text-body-sm text-blue-dark mb-2">{title}</p>
    <p className="text-body-xs text-gray-600 leading-relaxed">{description}</p>
  </div>
);

interface Props {
  result: ProjectResult;
}

const ProjectResultContent = ({ result }: Props) => {
  const avg = Math.round(
    result.scoreBreakdown.reduce((sum, i) => sum + i.score, 0) / result.scoreBreakdown.length
  );

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex gap-5 items-stretch">
        <div className="w-56 shrink-0">
          <ScoreCard result={result} />
        </div>
        <ScoreBreakdown items={result.scoreBreakdown} avg={avg} />
      </div>

      <ExpertFeedback result={result} />

      <div className="flex flex-col gap-3">
        {result.feedbackSections.map((section) => (
          <FeedbackItem key={section.number} section={section} />
        ))}
      </div>

      <ImprovementTip
        title={result.improvement.title}
        description={result.improvement.description}
      />
    </div>
  );
};

export default ProjectResultContent;