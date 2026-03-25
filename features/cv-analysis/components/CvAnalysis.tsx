import { PrimaryButtonDefault } from "@/shared/components/UI/button/PrimaryButton";
import React from "react";
import CompanyForm from "./form/CompanyForm";
import ExperienceForm from "./form/ExperienceForm";
import SkillForm from "./form/SkillForm";
import GoalForm from "./form/GoalForm";
import Image from "next/image";
import ai from "@/public/home/features/ai.png";
import { TextInput } from "@/shared/components/UI/input/TextInput";

const CvAnalysis = () => {
  return (
    <section className="flex w-full font-plus-jakarta-sans text-white py-20 px-18">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex gap-14 w-full justify-between">
          <div className="flex flex-col gap-6.5 justify-center items-center text-center bg-blue-normal rounded-3xl px-28">
            <h1 className="text-h2 font-bold ">Upload Your CV</h1>
            <p className="text-[#B3B3B3] leading-relaxed">
              Drag & drop or click to browse.
              <br />
              The more detail you fill below, the more
              <br />
              precise your analysis
            </p>
            <PrimaryButtonDefault className="bg-green-normal">
              Choose PDF
            </PrimaryButtonDefault>
          </div>
          <div className="bg-blue-normal p-7 rounded-3xl space-y-7">
            <div className="grid grid-cols-2 gap-7">
              <CompanyForm />
              <ExperienceForm />
              <SkillForm />
              <GoalForm />
            </div>
            <form action="">
              <TextInput
                label="Anything specific you want the AI to focus on?"
                placeholder="e.g. ‘I have a 2 year employment gap, help me frame it "
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col pt-16 pb-25 justify-center items-center bg-blue-normal text-[#D9D9D9] gap-4.5 rounded-3xl">
          <Image
            src={ai}
            alt="..."
            width={80}
            height={80}
            color="#D9D9D9"
          ></Image>
          <h1 className="text-h2 font-bold text-center">
            Your CV Analysis Will Apper Here!
          </h1>
          <p className="text-body leading-relaxed text-center">
            Upload your PDF resume and target role, then hit Analyze to get an
            instant AI-powered
            <br />
            breakdown of your CV with improvement tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CvAnalysis;
