"use client";
import { useState } from "react";
import AiInterviewContainer from "../components/ai-interview/container/container";
import CvAnalysisContainer from "../components/cv-analysis/container/container";
import Hero from "../components/Hero";

const AiContainer = () => {
  const [activeTab, setActiveTab] = useState("cv");

  return (
    <main>
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "cv" ? <CvAnalysisContainer /> : <AiInterviewContainer />}
    </main>
  );
};

export default AiContainer;
