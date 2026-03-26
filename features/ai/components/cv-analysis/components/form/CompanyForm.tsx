import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CvAnalysisPayload } from "../../schemas/cv-analysis.schema";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import { SelectInput } from "@/shared/components/UI/input/SelectInput";
import { inputOptionList } from "../../data/inputOptionList";

interface Props {
  register: UseFormRegister<CvAnalysisPayload>;
  errors: FieldErrors<CvAnalysisPayload>;
}

const CompanyForm = ({ register, errors }: Props) => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          01
        </span>
        <h1>Target & Company</h1>
      </label>
      <div className="text-body-xs space-y-2">
        <TextInput
          label="Job Title"
          placeholder="e.g. Data Scientist"
          {...register("job_title")}
        />
        {errors.job_title && (
          <p className="text-red-400 text-xs">{errors.job_title.message}</p>
        )}
        <TextInput
          label="Target Company"
          placeholder="e.g. Gojek, Shopee"
          {...register("target_company")}
        />
        {errors.target_company && (
          <p className="text-red-400 text-xs">
            {errors.target_company.message}
          </p>
        )}
        <SelectInput
          label="Industry/Sector"
          options={inputOptionList.industry}
          {...register("industry")}
        />
        {errors.industry && (
          <p className="text-red-400 text-xs">{errors.industry.message}</p>
        )}
      </div>
    </div>
  );
};

export default CompanyForm;
