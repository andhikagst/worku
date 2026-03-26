import { Button } from "@/shared/components/UI/button/Button";
import React from "react";

const SessionSetup = () => {
  return (
    <div className="bg-blue-normal space-y-4 p-11 rounded-4xl">
      <label htmlFor="setupForm" className="block text-h3 font-bold">
        Session Setup
      </label>
      <form id="setupForm" action="" className="block space-y-2">
        <div className="space-y-1">
          <label htmlFor="input1" className="block">
            Job Title
          </label>
          <input
            id="input1"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="e.g. Data Scientist"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="input2" className="block">
            Interview Type
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
            Job Title
          </label>
          <input
            id="input3"
            type="text"
            className="w-full text-black block border border-[#B3B3B3] rounded-xl bg-green-light-active px-4 py-1 placeholder:text-[#616162]"
            placeholder="-- Select --"
          />
        </div>
        <Button
          variant="primary"
          size="small"
          className="bg-green-normal mt-4 text-body"
        >
          Start Interview
        </Button>
      </form>
    </div>
  );
};

export default SessionSetup;
