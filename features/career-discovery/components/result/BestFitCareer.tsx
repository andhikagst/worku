"use client";
import { archetypes } from "../../data/archetypes";
import { Archetype } from "../../types/career-discovery.types";
import CareerCompatibilityCard from "./CareerCompabilityCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface RankedArchetype {
  archetype: Archetype;
  score: number;
  percentage: number;
}

const defaultScores = {
  strategic_analyst: 0, creative_architect: 0,
  people_first_leader: 0, relentless_builder: 0,
  human_connector: 0, curious_pioneer: 0,
};

const BestFitCareer = () => {
  const scores = useLocalStorage<Record<string, number>>(
    "career_discovery_scores",
    defaultScores
  );

  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  const ranked: RankedArchetype[] = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => ({
      archetype: archetypes[id],
      score,
      percentage: total > 0 ? Math.round((score / total) * 100) : 0,
    }))
    .filter((item) => item.archetype);

  if (ranked.length === 0) return null;

  return (
    <section className="flex flex-col px-23 pt-30 pb-10">
      <div className="px-7">
        <h2 className="text-h6 text-green-normal font-bold">
          Career Compatibility
        </h2>
        <h1 className="text-h2 text-black font-bold mt-2">
          Your best-fit career paths
        </h1>
        <p className="text-body text-blue-normal mt-1">
          Ranked by compatibility with your full discovery profile — not just
          skills.
        </p>
      </div>
      <hr className="mt-5 text-green-normal" />
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 p-13 max-w-[85%]">
        {ranked.map((item) => (
          <CareerCompatibilityCard
            key={item.archetype.id}
            archetype={item.archetype}
            percentage={item.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default BestFitCareer;