import React from "react";

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
        <div className="space-y-1">
          <label htmlFor="input1" className="block">
            Work Experience
          </label>
          <input
            id="input1"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="-- Select --"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="input2" className="block">
            Highest Education
          </label>
          <input
            id="input2"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="-- Select --"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="input3" className="block">
            Employment Status
          </label>
          <input
            id="input3"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="-- Select --"
          />
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
