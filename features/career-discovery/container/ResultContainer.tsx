import React from "react";
import ResultHero from "../components/result/ResultHero";
import BestFitCareer from "../components/result/BestFitCareer";
import IdealCareerStep from "../components/result/IdealCareerStep";

const ResultContainer = () => {
  return (
    <main className="flex flex-col overflow-hidden min-h-screen w-full">
      <ResultHero />
      <BestFitCareer/>
      <IdealCareerStep/>
    </main>
  );
};

export default ResultContainer;
