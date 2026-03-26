import { UseFormRegister, FieldErrors } from "react-hook-form";
import { CvAnalysisPayload } from "../../schemas/cv-analysis.schema";
import { TextInput } from "@/shared/components/UI/input/TextInput";

interface Props {
  register: UseFormRegister<CvAnalysisPayload>;
  errors: FieldErrors<CvAnalysisPayload>;
}

const SkillForm = ({ register, errors }: Props) => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          03
        </span>
        <h1>Skill & Tools</h1>
      </label>
      <div className="text-body-xs space-y-2">
        <TextInput
          label="Primary/Core Skill"
          placeholder="e.g. UX Research"
          {...register("primary_skill")}
        />
        {errors.primary_skill && (
          <p className="text-red-400 text-xs">
            {errors.primary_skill.message}
          </p>
        )}
        <TextInput
          label="Tools & Software"
          placeholder="e.g. Figma"
          {...register("tools")}
        />
        {errors.tools && (
          <p className="text-red-400 text-xs">
            {errors.tools.message}
          </p>
        )}
        <TextInput
          label="Languages(Spoken/Written)"
          placeholder="e.g. English"
          {...register("spoken_and_written_language")}
        />
        {errors.spoken_and_written_language && (
          <p className="text-red-400 text-xs">
            {errors.spoken_and_written_language.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillForm;
