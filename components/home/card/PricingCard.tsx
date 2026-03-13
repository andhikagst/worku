import React from "react";
import { Pricing } from "../data/pricingList";
import PrimaryButton from "@/components/UI/button/PrimaryButton";
import { CircleCheck } from "lucide-react";

const PricingCard = ({ data }: { data: Pricing }) => {

  return (
    <div className="flex flex-col shadow-md shadow-[rgba(0,0,0,0.25)] rounded-4xl font-plus-jakarta-sans w-85.75 h-auto">
      <div className="bg-linear-to-b from-blue-normal to-green-normal text-white py-9 px-13.5 rounded-t-4xl">
        <h2 className="text-h4 font-bold">{data.month} Month Plan</h2>
        <p className="text-body2">WorkU Package</p>
        <h1 className="text-h1 font-bold">${data.price}.00</h1>
      </div>
      <div className="py-9 px-13.5 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          {data.feature.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-5">
                <CircleCheck color="white" fill="#204150" />
                <p className="text-body3 text-blue-dark-hover"> {item}</p>
              </div>
            )
          })}
        </div>
      <PrimaryButton className="bg-blue-dark-hover text-white w-fit px-8 py-4 self-center font-bold">Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default PricingCard;
