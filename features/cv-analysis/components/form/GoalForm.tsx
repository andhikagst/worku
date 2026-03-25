import { SelectInput } from "@/shared/components/UI/input/SelectInput";
import React from "react";
import { inputOptionList } from "../../data/inputOptionList";

const GoalForm = () => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          04
        </span>
        <h1>Goal & Focus</h1>
      </label>
      <form action="" className="text-body-xs space-y-2">
        <SelectInput
          label="Primary Analysis Goals"
          options={inputOptionList.primaryGoal}
        />
        <SelectInput
          label="How Many Applications Sent?"
          options={inputOptionList.appSent}
        />
        <SelectInput
          label="Biggest Concern About CV"
          options={inputOptionList.concern}
        />
      </form>
    </div>
  );
};

export default GoalForm;
