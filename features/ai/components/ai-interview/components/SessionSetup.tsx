import { Button } from "@/shared/components/UI/button/Button";
import { TextInput } from "@/shared/components/UI/input/TextInput";
import { Mic } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sessionSetupSchema, SessionSetupPayload } from "../schemas/ai-interview.schema";

interface SessionSetupProps {
  onStart: (payload: SessionSetupPayload) => void;
  isLoading: boolean;
  isDisabled: boolean; 
}

const SessionSetup = ({ onStart, isLoading, isDisabled }: SessionSetupProps) => {

   const { register, handleSubmit, formState: { errors } } = useForm<SessionSetupPayload>({
    resolver: zodResolver(sessionSetupSchema),
  });

  return (
    <div className="bg-blue-normal space-y-4 p-11 rounded-4xl">
      <label htmlFor="setupForm" className="block text-h3 font-bold">
        Session Setup
      </label>
      <form id="setupForm" onSubmit={handleSubmit(onStart)} className="block space-y-2">
        <div>
          <TextInput
            placeholder="e.g. Data Scientist"
            label="Job Role"
            className="text-body"
            containerClassName="py-2"
            disabled={isDisabled}
            {...register("job_role")}
          />
          {errors.job_role && <p className="text-red-400 text-xs mt-1">{errors.job_role.message}</p>}
        </div>
        <div>
          <TextInput
            placeholder="e.g. Internship Recruitment"
            label="Interview Type"
            className="text-body"
            containerClassName="py-2"
            disabled={isDisabled}
            {...register("interview_type")}
          />
          {errors.interview_type && <p className="text-red-400 text-xs mt-1">{errors.interview_type.message}</p>}
        </div>
        <div>
          <TextInput
            placeholder="e.g. Medium"
            label="Difficulty"
            className="text-body"
            containerClassName="py-2"
            disabled={isDisabled}
            {...register("difficulty")}
          />
          {errors.difficulty && <p className="text-red-400 text-xs mt-1">{errors.difficulty.message}</p>}
        </div>
        <div className="flex">
          <Button
            variant="primary"
            size="smaller"
            type="submit"
            className="bg-green-normal w-full mt-4 text-body rounded-xl"
          >
            <Mic className="inline mr-1" size={24} />
            {isLoading ? "Starting..." : isDisabled ? "Session Active" : "Start Interview"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SessionSetup;
