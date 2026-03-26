"use client";
import { useState } from "react";
import { filterList } from "../data/filterList";
import { Button } from "@/shared/components/UI/button/Button";
import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="flex px-18 py-23 bg-blue-normal justify-between items-center">
      <div className="flex gap-4 items-center">
        <span className="text-200 font-bold text-white">FILTER:</span>
        {filterList.map((data) => {
          return (
            <Button variant="primary" size="smaller"
              key={data.id}
              onClick={() => setActive(data.id)}
              className={`transition-colors text-body py-1.5! px-3! ${
                active === data.id
                  ? "bg-green-normal text-white"
                  : "border-2 border-green-normal bg-white text-green-normal!"
              }`}
            >
              {data.label}
            </Button>
          );
        })}
      </div>
      <div className="flex gap-4 items-center">
        <span className="text-200 font-bold text-white">SORT BY</span>
        <button className="border-2 border-green-normal rounded-xl px-3 py-2 text-green-normal bg-white">
          Best Match <ChevronDown size={20} className="inline" />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
