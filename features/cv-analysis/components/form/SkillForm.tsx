import { TextInput } from "@/shared/components/UI/input/TextInput";
import React from "react";

const SkillForm = () => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          03
        </span>
        <h1>Skill & Tools</h1>
      </label>
      <form action="" className="text-body-xs space-y-2">
        <TextInput label="Primary/Core Skill" placeholder="e.g. UX Research"/>
        <TextInput label="Tools & Software" placeholder="e.g. Figma"/>
        <TextInput label="Languages(Spoken/Written)" placeholder="e.g. English"/>
      </form>
    </div>
  );
};

export default SkillForm;
