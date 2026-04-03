"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { archetypes } from "@/features/career-discovery/data/archetypes";
import { Archetype, RoadmapItem } from "@/features/career-discovery/types/career-discovery.types";
import { useCareerDiscoveryRouter } from "@/features/career-discovery/hooks/useCareerDiscoveryRouter";
import { useLocalStorage } from "@/features/career-discovery/hooks/useLocalStorage";
import { Check } from "lucide-react";
import { useRoadmapProgress } from "../../hooks/useRoadmapProgress";

const TYPE_CONFIG: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  Foundation: {
    bg: "bg-[#26CC70]",
    text: "text-[#26CC70]",
    border: "border-green-300",
  },
  Skill: {
    bg: "bg-[#1877F2]",
    text: "text-[#1877F2]",
    border: "border-blue-300",
  },
  Project: {
    bg: "bg-[#EA6CAB]",
    text: "text-[#EA6CAB]",
    border: "border-purple-300",
  },
  "Career Action": {
    bg: "bg-[#9747FF]",
    text: "text-[#9747FF]",
    border: "border-pink-300",
  },
  Milestone: {
    bg: "bg-[#FFD35C]",
    text: "text-[#FFD35C]",
    border: "border-yellow-300",
  },
};

const ItemCard = ({
  item,
  isCompleted,
  onToggle,
  isMilestone,
}: {
  item: RoadmapItem;
  isCompleted: boolean;
  onToggle: () => void;
  isMilestone: boolean;
}) => {
  const config = TYPE_CONFIG[item.type] ?? TYPE_CONFIG["Skill"];

  if (isMilestone) {
    return (
      <div
        className={`relative overflow-hidden bg-white rounded-2xl px-6 py-8 border-l-4 border-b-4 border-r-4 border-[#FFD35C] border-dashed shadow-md shadow-gray-400 flex flex-col gap-2 transition-all
      ${isCompleted ? "opacity-60" : ""}`}
      >
        <div className={`absolute ${config.bg} top-0 left-0 right-0 h-2`} />
        {isCompleted && (
          <div className="absolute top-4 right-3 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check size={11} className="text-white" />
          </div>
        )}

        <h4 className="font-bold text-black text-h6 pr-6">{item.title}</h4>
        <p className="text-body-xs text-black leading-relaxed">
          {item.description}
        </p>
        <div className="flex items-center justify-between flex-wrap mt-4">
          <span
            className={`text-xs font-semibold px-5 py-1 rounded-full border bg-blue-light border-blue-light-active ${config.text}`}
          >
            {item.type}
          </span>
          <span className="text-body-xs text-blue-normal">{item.duration}</span>
        </div>
        <button
          onClick={onToggle}
          className={`flex items-center justify-center gap-2 px-4 py-2 rounded-2xl mt-4 text-h6 font-bold border transition-all shrink-0
            ${
              isCompleted
                ? "bg-green-500 text-white border-green-500"
                : "bg-blue-light text-[#797A7C] border-gray-400 hover:border-green-400 hover:text-green-600"
            }`}
        >
          <Check size={20} />
          {isCompleted ? "Completed" : "Mark As Completed"}
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={onToggle}
      className={`relative overflow-hidden bg-white rounded-2xl px-6 py-8 border border-gray-100 shadow-md shadow-gray-400 flex flex-col justify-between transition-all cursor-pointer h-52
      ${isCompleted ? "opacity-60" : ""}`}
    >
      <div className={`absolute ${config.bg} top-0 left-0 right-0 h-2`} />
      {isCompleted && (
        <div className="absolute top-4 right-3 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
          <Check size={11} className="text-white" />
        </div>
      )}
      <div className="space-y-2">
        <h4 className="font-bold text-black text-h6 pr-6">{item.title}</h4>
        <p className="text-body-xs text-black leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap mt-4 align-bottom">
        <span
          className={`text-xs font-semibold px-5 py-1 rounded-full border bg-blue-light border-blue-light-active ${config.text}`}
        >
          {item.type}
        </span>
        <span className="text-body-xs text-blue-normal">{item.duration}</span>
      </div>
    </div>
  );
};

const PhaseItems = ({
  nonMilestone,
  milestones,
  completed,
  onToggle,
}: {
  nonMilestone: RoadmapItem[];
  milestones: RoadmapItem[];
  completed: Set<string>;
  onToggle: (id: string) => void;
}) => {
  const rows: RoadmapItem[][] = [];
  for (let i = 0; i < nonMilestone.length; i += 3) {
    rows.push(nonMilestone.slice(i, i + 3));
  }

  return (
    <div className="flex flex-col items-center gap-0">
      {rows.map((row, rowIdx) => {
        const isLast = rowIdx === rows.length - 1;
        const count = row.length;

        const justifyClass =
          count === 1
            ? "justify-center"
            : count === 2
              ? "justify-center"
              : "justify-between";

        const cardWidthClass =
          count === 1 ? "w-[32%]" : count === 2 ? "w-[32%]" : "w-[32%]";

        return (
          <div key={rowIdx} className="w-full flex flex-col items-center">
            <div className={`w-full flex ${justifyClass} gap-4`}>
              {row.map((item) => (
                <div key={item.id} className={cardWidthClass}>
                  <ItemCard
                    item={item}
                    isCompleted={completed.has(item.id)}
                    onToggle={() => onToggle(item.id)}
                    isMilestone={false}
                  />
                </div>
              ))}
            </div>

            {(!isLast || milestones.length > 0) && (
              <div className="flex flex-col items-center my-1">
                <div className="w-0.5 h-8 bg-green-normal/40" />
                <div className="w-3 h-3 rounded-full bg-green-normal" />
                <div className="w-0.5 h-8 bg-green-normal/40" />
              </div>
            )}
          </div>
        );
      })}

      {milestones.map((item) => (
        <div key={item.id}>
          <ItemCard
            item={item}
            isCompleted={completed.has(item.id)}
            onToggle={() => onToggle(item.id)}
            isMilestone={true}
          />
        </div>
      ))}
    </div>
  );
};

const defaultScores = {
  strategic_analyst: 0, creative_architect: 0,
  people_first_leader: 0, relentless_builder: 0,
  human_connector: 0, curious_pioneer: 0,
};

const Roadmap = () => {
  const scores = useLocalStorage<Record<string, number>>(
    "career_discovery_scores",
    defaultScores
  );

  const { retake } = useCareerDiscoveryRouter();
  const router = useRouter();

  const allZero = Object.values(scores).every((v) => v === 0);
  const topId = !allZero
    ? Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    : null;
  const result: Archetype | null = topId ? archetypes[topId] : null;

const { completed, toggleCompleted } = useRoadmapProgress(topId ?? "");

  useEffect(() => {
  if (allZero) router.replace("/career-discovery");
}, [allZero, router]);

  const getPhaseProgress = (items: RoadmapItem[]) => {
    const total = items.length;
    const done = items.filter((item) => completed.has(item.id)).length;
    return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
  };

  const handleToggle = (itemId: string) => {
  toggleCompleted(itemId);
  };

  if (!result)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-body">Loading roadmap...</p>
      </div>
    );

  const phases = ["FOUNDATION", "BUILD", "ACTIVATE", "ACCELERATE"];
    
  return (
    <div className="min-h-screen bg-blue-light font-plus-jakarta-sans  relative">
      <div className="absolute top-0 left-0 right-0 h-162 bg-gradient-to-top z-0" />

      <div className="relative z-2 lg:pt-34.25 pt-28 pb-28 px-30">
        <div className="text-white py-18">
          <h1 className="text-display-3 font-bold">{result.title}</h1>
          <p className="text-body-sm mt-3">{result.subtitle}</p>
          <p className="text-body mt-3 max-w-[60%]">{result.description}</p>
        </div>

        <div className="bg-white rounded-2xl px-6 py-5 border border-gray-100 shadow-xl mb-8 max-w-[70%]">
          <div className="grid grid-cols-4 gap-4">
            {phases.map((phase) => {
              const phaseData = result.roadmap.find((p) => p.phase === phase);
              const { pct } = phaseData
                ? getPhaseProgress(phaseData.items)
                : { pct: 0 };
              return (
                <div key={phase} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-h6 font-bold text-green-normal">
                      {phase}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-normal rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-h6 text-gray-400 font-semibold">
                    {pct}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-8 mb-8 flex-wrap items-center text-blue-normal text-h6 bg-white p-7 rounded-[20px] w-fit shadow-xl">
          <span className="font-semibold text-gray-400 mr-1">FOUNDATION:</span>
          <p className="flex gap-4 items-center font-bold">
            <span className="bg-[#26CC70] w-5 h-5 rounded-sm" />
            Foundation
          </p>
          <p className="flex gap-4 items-center font-bold">
            <span className="bg-[#1877F2] w-5 h-5 rounded-sm" />
            Skill
          </p>
          <p className="flex gap-4 items-center font-bold">
            <span className="bg-[#EA6CAB] w-5 h-5 rounded-sm" />
            Project
          </p>
          <p className="flex gap-4 items-center font-bold">
            <span className="bg-[#9747FF] w-5 h-5 rounded-sm" />
            Career Action
          </p>
          <p className="flex gap-4 items-center font-bold">
            <span className="bg-[#FFD35C] w-5 h-5 rounded-sm" />
            Milestone
          </p>
        </div>

        <div className="flex flex-col gap-16 mt-30">
          {result.roadmap.map((phase, pi) => {
            const nonMilestone = phase.items.filter(
              (i) => i.type !== "Milestone",
            );
            const milestones = phase.items.filter(
              (i) => i.type === "Milestone",
            );

            return (
              <div key={pi} className="flex flex-col gap-10">
                <div
                  className={`flex items-center justify-between bg-[#AEC4CE] rounded-2xl text-h5 overflow-hidden`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-gradient-to-left px-6 py-4">
                      <p className="text-white font-bold">
                        Phase {pi + 1} – {phase.phase}
                      </p>
                    </div>
                    <h3 className=" font-bold mt-0.5 text-black">
                      {phase.label}
                    </h3>
                  </div>
                  <span className=" text-blue-normal font-bold shrink-0 ml-4 px-6">
                    {phase.duration}
                  </span>
                </div>

                <PhaseItems
                  nonMilestone={nonMilestone}
                  milestones={milestones}
                  completed={completed}
                  onToggle={handleToggle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
