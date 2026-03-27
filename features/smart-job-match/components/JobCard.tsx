import React from "react";
import { MapPin, Briefcase, CircleDollarSign, ArrowRight } from "lucide-react";
import { Job } from "../data/jobList";
import { Button } from "@/shared/components/UI/button/Button";

const JobCard = ({ data }: { data: Job }) => {
  return (
    <div className="bg-white rounded-[40px] w-fit h-fit aspect-3/2 font-plus-jakarta-sans py-6 relative">
      <div className="flex flex-col gap-4 px-11">
        <div className="flex gap-5">
          <div className="bg-green-light-hover text-blue-normal p-9 rounded-[20px] font-bold">
            {data.profile}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-300 font-medium">{data.label}</h1>
            <h2 className="text-100 text-[#797A7C]">BCA Digital | Senayan</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-light-hover rounded-full px-3 py-1.5 text-blue-normal font-medium flex items-center gap-1">
            <MapPin size={16} className="" />
            {data.jobType.city}
          </button>
          <button className="bg-blue-light-hover rounded-full px-3 py-1.5 text-blue-normal font-medium flex items-center gap-1">
            <Briefcase size={16} className="" />
            {data.jobType.isContract}
          </button>
          <button className="bg-blue-light-hover rounded-full px-3 py-1.5 text-blue-normal font-medium flex items-center gap-1 text-body-sm">
            <CircleDollarSign size={16} className="" />
            {data.jobType.salary}
          </button>
        </div>
        <div>
          <button className="bg-[#FFF7B5] rounded-full px-3 py-1.5 text-[#A7821B] font-medium flex items-center text-body-sm">
            {data.contract}
          </button>
        </div>
        <div className="flex flex-wrap max-w-[70%] gap-2">
          {data.skill.map((data) => {
            return (
              <button
                key={data}
                className="bg-blue-light-hover rounded-full px-3 py-1.5 text-blue-normal font-medium text-body-sm w-fit"
              >
                {data}
              </button>
            );
          })}
        </div>
        <div className="flex gap-1 items-center text-blue-normal">
          <MapPin size={16} />
          {data.distance}
        </div>
      </div>
      <Button variant="secondary" size="small" className="absolute right-[5%] bottom-[5%]">See Details <ArrowRight className="inline"/></Button>
    </div>
  );
};

export default JobCard;
