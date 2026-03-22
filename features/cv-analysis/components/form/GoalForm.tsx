import React from "react";

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
        <div className="space-y-1">
          <label htmlFor="input1" className="block">
            Primary Analysis Goals
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
            How Many Applications Sent?
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
            Biggest Concern About CV
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

export default GoalForm;
