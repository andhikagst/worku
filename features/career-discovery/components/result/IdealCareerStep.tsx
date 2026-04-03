"use client";
import { useEffect, useState } from "react";
import { useRoadmapProgress } from "../../hooks/useRoadmapProgress";
import { useCareerDiscoveryRouter } from "../../hooks/useCareerDiscoveryRouter";
import { archetypes } from "../../data/archetypes";
import { RoadmapPhase } from "../../types/career-discovery.types";

const phases = [
  {
    label: "FOUNDATION",
    title: "Establish your baseline",
    desc: "Audit your current skills, complete your WorkU profile, and dive into your top recommended course for your archetype.",
    tags: ["Complete Career Discovery", "Upload CV for AI analysis", "Finish Course #1", "Refresh your LinkedIn profile"],
    duration: "Now – 3 months",
  },
  {
    label: "BUILD",
    title: "Close your skill gaps",
    desc: "Deep-dive into your primary discipline. Build one portfolio project that demonstrates your profile's core strength.",
    tags: ["Complete 2 core courses", "Ship 1 portfolio project", "Join 2 industry communities", "Apply to 5–10 target roles"],
    duration: "3 – 6 months",
  },
  {
    label: "ACTIVATE",
    title: "Enter the market with confidence",
    desc: "Your profile is ready. You're actively interviewing, networking, and have a strong body of work to show.",
    tags: ["Reach 80%+ CV score", "20 Interview Simulator sessions", "Accept the right offer", "Land 3+ final-round interviews"],
    duration: "6 – 12 months",
  },
  {
    label: "ACCELERATE",
    title: "Grow in your new role",
    desc: "You've landed. Execute at a high level, build your internal network, and set up your next move early.",
    tags: ["Strong 6-month probation review", "Ship 1 signature project", "Mentor a junior colleague", "Target your first promotion"],
    duration: "12 – 24 months",
  },
];

const IdealCareerStep = () => {
  const { loadScores } = useCareerDiscoveryRouter();

  const [scores, setScores] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    setScores(loadScores());
  }, [loadScores]); 

  const topId = scores ? Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0] : "";
  const arch = topId ? archetypes[topId] : null;
  const roadmapPhases = arch ? arch.roadmap : [];

  const { isPhaseCompleted } = useRoadmapProgress(topId);

  const phasesDone = roadmapPhases.map((phase) => isPhaseCompleted(phase));

  if (!scores || !arch || roadmapPhases.length === 0) return null;

  return (
    <section className="flex flex-col px-23 py-10">
      <div className="px-7">
        <h2 className="text-h6 text-green-normal font-bold">YOUR ROADMAP</h2>
        <h1 className="text-h2 text-black font-bold mt-2">
          Step-by-step to your ideal career
        </h1>
        <p className="text-body text-blue-normal mt-1">
          A personalized 24-month progression plan built from your discovery
          results.
        </p>
      </div>
      <hr className="mt-5 text-green-normal" />
      <div className="relative px-7 py-15">
        <div className="absolute left-1.75 top-15 bottom-20 w-0.5 bg-green-normal" />
        {phases.map((phase, i) => {
          const isDone = phasesDone[i] ?? false;

          return (
            <div key={i} className="relative mb-5">
              <div
                className={`absolute -left-7.5 top-15 w-5 h-5 rounded-full border-2 border-white transition-colors
              ${isDone ? "bg-green-normal" : i === 0 && !phasesDone[0] ? "bg-green-normal" : "bg-gray-300"}`}
              />
              <div className="border border-gray-400 rounded-4xl px-12 py-7 bg-white">
                <p className="text-h6 text-green-dark tracking-widest mb-3">
                  -{phase.label}-
                </p>
                <h3 className="text-h4 font-bold text-black mb-3.5">
                  {phase.title}
                </h3>
                <p className="text-body text-blue-normal mb-5">{phase.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-h6 bg-green-light-active border-blue-light-hover text-green-normal font-bold rounded-full px-6 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-100 text-blue-normal">
                  {phase.duration}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IdealCareerStep;