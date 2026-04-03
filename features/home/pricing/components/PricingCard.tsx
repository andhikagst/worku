"use client";
import React from "react";
import { Pricing } from "../data/pricingList";
import { Button } from "@/shared/components/UI/button/Button";
import { CircleCheck } from "lucide-react";
import { usePayment } from "../hooks/usePayment";

const PricingCard = ({ data }: { data: Pricing }) => {
  const { mutate: pay, isPending } = usePayment();

  return (
    <div className="flex flex-col shadow-md shadow-[rgba(0,0,0,0.25)] rounded-4xl font-plus-jakarta-sans w-84 h-auto">
      <div className="bg-linear-to-b from-blue-normal to-green-normal text-white py-9 px-13.5 rounded-t-4xl">
        <h2 className="text-display-4 font-bold">{data.month} Month Plan</h2>
        <p className="text-body">WorkU Package</p>
        <h1 className="text-h2 font-bold">Rp.{data.price} rb</h1>
      </div>
      <div className="py-9 px-13.5 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          {data.feature.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <CircleCheck color="white" fill="#204150" />
              <p className="text-body text-blue-dark-hover">{item}</p>
            </div>
          ))}
        </div>
        <Button
          variant="primary"
          size="small"
          disabled={isPending}
          onClick={() => pay(data.duration_days)}
          className="self-center px-8 py-4 text-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Processing..." : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;