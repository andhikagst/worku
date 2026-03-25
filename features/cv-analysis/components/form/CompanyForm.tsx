import { TextInput } from "@/shared/components/UI/input/TextInput";
import React from "react";
import { inputOptionList } from "../../data/inputOptionList";
import { SelectInput } from "@/shared/components/UI/input/SelectInput";

const CompanyForm = () => {
  return (
    <div className="w-82">
      <label className="text-300 font-bold flex gap-2 items-center mb-2">
        <span className="text-blue-dark rounded-full bg-green-normal border-2 border-blue-dark px-2.5 py-1">
          01
        </span>
        <h1>Target & Company</h1>
      </label>
      <form action="" className="text-body-xs space-y-2">
        <TextInput label="Job Title" placeholder="e.g. Data Scientist"/>
        <TextInput label="Target Company" placeholder="e.g. Gojek, Shopee"/>
        <SelectInput label="Industry/Sector" options={inputOptionList.industry} />
      </form>
    </div>
  );
};

export default CompanyForm;
