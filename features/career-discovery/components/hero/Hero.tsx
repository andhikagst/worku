import { Button } from "@/shared/components/UI/button/Button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-1 bg-gradient-to-bottom font-plus-jakarta-sans text-white lg:pt-34.25 pt-28">
      <div className="flex flex-col lg:px-25 md:px-21 lg:py-22 md:py-10 justify-between flex-1">
        <h1 className="lg:text-display-2 md:text-display-3 font-bold">
          Discover your
          <br />
          <span className="text-blue-dark">Ideal Career</span> Path
        </h1>
        <div className="max-w-[70%]">
          <p className="lg:text-400 md:text-200 font-medium leading-tight">
            Answer 15 questions about how you work, what drives you, and where
            you want to go. The AI maps your unique profile to career
            archetypes, builds a personalized roadmap, and surfaces live job
            openings that match.
          </p>
        </div>
        <ul className="space-y-3 md:scale-90 origin-left">
          <li className="flex items-center gap-4">
            <span className="bg-blue-normal p-2 rounded-lg font-bold text-100">
              01
            </span>
            <p className="text-200">
              <span className="font-bold">15 questions</span> across 5
              dimensions — about 5 minutes
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-blue-normal p-2 rounded-lg font-bold text-100">
              02
            </span>
            <p className="text-200">
              Personality, strengths & ambition <span className="font-bold">mapped to archetypes</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-blue-normal p-2 rounded-lg font-bold text-100">
              03
            </span>
            <p className="text-200">
              Personalized <span className="font-bold">24-month career roadmap</span>
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="bg-blue-normal p-2 rounded-lg font-bold text-100">
              04
            </span>
            <p className="text-200">
              <span className="font-bold">Live job recommendations</span> matched to your profile
            </p>
          </li>
        </ul>
        <Link href="/career-discovery/question?step=1">
          <Button variant="primary" size="small" className="bg-blue-normal shadow-md py-2.5! font-semibold" >Get Started</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
