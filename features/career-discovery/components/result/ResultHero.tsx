"use client";
import { archetypes } from "@/features/career-discovery/data/archetypes";
import { useCareerDiscoveryRouter } from "@/features/career-discovery/hooks/useCareerDiscoveryRouter";
import { useLocalStorage } from "@/features/career-discovery/hooks/useLocalStorage";
import { Button } from "@/shared/components/UI/button/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const defaultScores = {
  strategic_analyst: 0, creative_architect: 0,
  people_first_leader: 0, relentless_builder: 0,
  human_connector: 0, curious_pioneer: 0,
};

const ResultHero = () => {
  const scores = useLocalStorage<Record<string, number>>(
    "career_discovery_scores",
    defaultScores
  );
  const { goToRoadmap, retake } = useCareerDiscoveryRouter();
  const router = useRouter();

  const allZero = Object.values(scores).every((v) => v === 0);
  const topId = !allZero
    ? Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    : null;
  const result = topId ? archetypes[topId] : null;

  useEffect(() => {
    if (allZero) router.replace("/career-discovery");
  }, [allZero, router]);

  if (!result) return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Calculating your archetype...</p>
      </div>
    );

  return (
    <section className="min-h-screen bg-blue-light px-22 w-full flex flex-col gap-8 bg-gradient-to-left text-white justify-center lg:pt-34.25 pt-28 font-plus-jakarta-sans ">
      <div className="flex flex-col gap-3">
        <p className="text-h6 uppercase font-bold">— Your Career Archetype —</p>
        <div>
          <h1 className="text-display-3 font-bold">{result.title}</h1>
          <p className="text-body-sm mt-1">{result.subtitle}</p>
        </div>
        <div className="max-w-[50%]">
          <p className="leading-relaxed text-body">{result.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {result.traits.map((trait) => (
          <span
            key={trait}
            className="px-4 py-2 rounded-full border border-white/30 text-h5 font-bold bg-white/10"
          >
            {trait}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-2">
        <Button
          variant="primary"
          size="default"
          onClick={goToRoadmap}
          className="bg-blue-dark px-14! py-3! rounded-[20px]! text-h5"
        >
          Start My Roadmap
        </Button>
        <Button
          variant="primary"
          size="default"
          onClick={retake}
          className="bg-transparent border-2 border-blue-light px-6! py-3! rounded-[20px] text-h5 hover:bg-blue-light-hover hover:text-blue-normal"
        >
          Retake Discovery
        </Button>
      </div>
    </section>
  );
};

export default ResultHero;
