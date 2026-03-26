import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CvAnalysisPayload } from "../../schemas/cv-analysis.schema";
import { ChevronDown } from "lucide-react";
import { SelectInput } from "@/shared/components/UI/input/SelectInput";
import { inputOptionList } from "../../data/inputOptionList";

interface Props {
  register: UseFormRegister<CvAnalysisPayload>;
  errors: FieldErrors<CvAnalysisPayload>;
}

const ExperienceForm = ({ register, errors }: Props) => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          02
        </span>
        <h1>Experience</h1>
      </label>
      <div className="text-body-xs space-y-2">
        <SelectInput
          label="Work Experience"
          options={inputOptionList.workExp}
          {...register("work_experience")}
        />
        {errors.work_experience && (
          <p className="text-red-400 text-xs">
            {errors.work_experience.message}
          </p>
        )}
        <SelectInput
          label="Highest Education"
          options={inputOptionList.highestEdu}
          {...register("highest_education")}
        />
        {errors.highest_education && (
          <p className="text-red-400 text-xs">
            {errors.highest_education.message}
          </p>
        )}
        <SelectInput
          label="Employment Status"
          options={inputOptionList.empStatus}
          {...register("employment_status")}
        />
        {errors.employment_status && (
          <p className="text-red-400 text-xs">
            {errors.employment_status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceForm;
