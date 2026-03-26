import React from "react";
import { filterList } from "../data/filterList";
import { Button } from "@/shared/components/UI/button/Button";
import FilterBar from "./FilterBar";
import JobCard from "./JobCard";
import { jobList } from "../data/jobList";
import { MapPin } from "lucide-react";
import Image from "next/image";
import map from "@/public/job/google_maps.png";

const Jobs = () => {
  return (
    <section className="font-plus-jakarta-sans flex flex-col">
      <FilterBar />
      <div className="py-32 px-24 bg-blue-light-active">
        <div className="grid grid-cols-[58%_1fr]">
          <div className="flex flex-col gap-8">
            {jobList.map((data) => {
              return <JobCard data={data} key={data.id} />;
            })}
          </div>
          <div className="bg-white rounded-[40px] h-fit overflow-hidden">
            <div className="flex justify-between items-center py-6 px-11">
              <h1 className="text-black text-400 font-bold flex items-center gap-2">
                <MapPin size={36} className="text-blue-normal" /> Job Map
              </h1>
              <p>Click a pin for details</p>
            </div>
            <div className="relative w-full h-130 aspect-square">
              <Image
                src={map}
                alt="your location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
