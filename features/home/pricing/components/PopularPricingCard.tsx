import React from "react";
import { Pricing } from "../data/pricingList";
import { Button } from "@/shared/components/UI/button/Button";
import { CircleCheck } from "lucide-react";

const PopularPricingCard = ({ data }: { data: Pricing }) => {
  return (
    <div className="bg-linear-to-b from-blue-normal to-green-normal flex flex-col shadow-md  shadow-[rgba(0,0,0,0.25)] rounded-4xl font-plus-jakarta-sans w-85.75 h-auto text-white overflow-hidden">
      <div className="bg-[#FFD35C] text-blue-dark-hover font-semibold text-center text-h3 py-5">
        Most Popular
      </div>
      <div className="flex flex-col gap-10 py-8 px-16">
        <div className="flex flex-col">
          <h2 className="text-display-4 font-bold">{data.month} Month Plan</h2>
          <p className="text-body">WorkU Package</p>
          <h1 className="text-h1 font-bold">${data.price}.00</h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            {data.feature.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-5">
                  <CircleCheck />
                  <p className="text-body"> {item}</p>
                </div>
              );
            })}
          </div>
          <Button
            variant="primary"
            size="small"
            className="self-center text-200 px-8 py-4"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularPricingCard;
