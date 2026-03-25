import React from "react";
import { ChevronDown } from "lucide-react";
import { SelectInput } from "@/shared/components/UI/input/SelectInput";
import { inputOptionList } from "../../data/inputOptionList";

const ExperienceForm = () => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          02
        </span>
        <h1>Experience</h1>
      </label>
      <form action="" className="text-body-xs space-y-2">
        <SelectInput label="Work Experience" options={inputOptionList.workExp} />
        <SelectInput label="Highest Education" options={inputOptionList.highestEdu} />
        <SelectInput label="Employment Status" options={inputOptionList.empStatus} />
      </form>
    </div>
  );
};

export default ExperienceForm;
