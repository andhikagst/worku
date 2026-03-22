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
        <div className="space-y-1">
          <label htmlFor="input1" className="block">
            Primary/Core Skill
          </label>
          <input
            id="input1"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="e.g. UX Research"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="input2" className="block">
            Tools & Software
          </label>
          <input
            id="input2"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="e.g. Figma"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="input3" className="block">
            Languages (Spoken/Written)
          </label>
          <input
            id="input3"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="e.g. English"
          />
        </div>
      </form>
    </div>
  );
};

export default SkillForm;
