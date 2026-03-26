import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CvAnalysisPayload } from "../../schemas/cv-analysis.schema";
import { SelectInput } from "@/shared/components/UI/input/SelectInput";
import { inputOptionList } from "../../data/inputOptionList";

interface Props {
  register: UseFormRegister<CvAnalysisPayload>;
  errors: FieldErrors<CvAnalysisPayload>;
}

const GoalForm = ({register, errors}: Props) => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          04
        </span>
        <h1>Goal & Focus</h1>
      </label>
      <div className="text-body-xs space-y-2">
        <SelectInput
          label="Primary Analysis Goals"
          options={inputOptionList.primaryGoal}
          {...register("primary_analysis_goals")}
          />
        {errors.primary_analysis_goals && <p className="text-red-400 text-xs">{errors.primary_analysis_goals.message}</p>}
        <SelectInput
          label="How Many Applications Sent?"
          options={inputOptionList.appSent}
          {...register("job_applications_sent")}
          />
        {errors.job_applications_sent && <p className="text-red-400 text-xs">{errors.job_applications_sent.message}</p>}
        <SelectInput
          label="Biggest Concern About CV"
          options={inputOptionList.concern}
          {...register("biggest_concern")}
        />
        {errors.biggest_concern && <p className="text-red-400 text-xs">{errors.biggest_concern.message}</p>}
      </div>
    </div>
  );
};

export default GoalForm;
