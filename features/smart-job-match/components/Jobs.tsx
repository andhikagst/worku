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
        <div className="grid grid-cols-2 gap-10">
            {jobList.map((data) => {
              return <JobCard data={data} key={data.id} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
