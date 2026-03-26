"use client";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  cvAnalysisSchema,
  CvAnalysisPayload,
} from "../schemas/cv-analysis.schema";
import { useCvAnalysis } from "../hooks/useCvAnalysis";
import { Button } from "@/shared/components/UI/button/Button";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import Image from "next/image";
import ai from "@/public/home/features/ai.png";
import CompanyForm from "./form/CompanyForm";
import ExperienceForm from "./form/ExperienceForm";
import SkillForm from "./form/SkillForm";
import GoalForm from "./form/GoalForm";

const CvAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CvAnalysisPayload>({
    resolver: zodResolver(cvAnalysisSchema),
  });

  const { mutate, isPending, data: result, isError, error } = useCvAnalysis();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setFileError("");
    } else {
      setFileError("Please upload a PDF file");
    }
  };

  const onSubmit = (data: CvAnalysisPayload) => {
    if (!file) {
      setFileError("CV file is required");
      return;
    }
    mutate({ file, payload: data });
  };

  return (
    <section className="flex w-full font-plus-jakarta-sans text-white py-20 px-18">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-10 w-full"
      >
        <div className="flex gap-14 w-full justify-between">
          {/* Upload CV */}
          <div className="flex flex-col gap-6.5 justify-center items-center text-center bg-blue-normal rounded-3xl px-28">
            <h1 className="text-h2 font-bold">Upload Your CV</h1>
            <p className="text-[#B3B3B3] leading-relaxed">
              Drag & drop or click to browse.
              <br />
              The more detail you fill below, the more
              <br />
              precise your analysis
            </p>
            {file && <p className="text-green-400 text-sm">{file.name}</p>}
            {fileError && <p className="text-red-400 text-sm">{fileError}</p>}
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <Button
              type="button"
              variant="primary"
              size="default"
              className="bg-green-normal"
              onClick={() => fileInputRef.current?.click()}
            >
              Choose PDF
            </Button>
          </div>

          <div className="bg-blue-normal p-7 rounded-3xl space-y-7">
            <div className="grid grid-cols-2 gap-7">
              <CompanyForm register={register} errors={errors} />
              <ExperienceForm register={register} errors={errors} />
              <SkillForm register={register} errors={errors} />
              <GoalForm register={register} errors={errors} />
            </div>
            <TextInput
              label="Anything specific you want the AI to focus on?"
              placeholder="e.g. 'I have a 2 year employment gap, help me frame it'"
              {...register("additional_request")}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                size="default"
                className="bg-green-normal"
                disabled={isPending}
              >
                {isPending ? "Analyzing..." : "Analyze My CV"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-16 pb-24 justify-center items-center bg-blue-normal text-[#D9D9D9] gap-4.5 rounded-3xl">
          {result ? (
            <div className="w-full px-20 text-white">
              <div className="whitespace-pre-wrap text-body font-plus-jakarta-sans font-medium text-justify">
                {result}
              </div>
            </div>
          ) : (
            <>
              <Image src={ai} alt="AI icon" width={80} height={80} />
              <h1 className="text-h2 font-bold text-center">
                {isError
                  ? (error as Error).message
                  : "Your CV Analysis Will Appear Here!"}
              </h1>
              <p className="text-body leading-relaxed text-center">
                Upload your PDF resume and target role, then hit Analyze to get
                an instant AI-powered
                <br />
                breakdown of your CV with improvement tips.
              </p>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default CvAnalysis;
