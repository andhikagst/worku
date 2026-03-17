import React from "react";
import PricingCard from "./card/PricingCard";
import { pricingList } from "./data/pricingList";
import PopularPricingCard from "./card/PopularPricingCard";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16">
      <div className="text-blue-dark-hover text-center flex flex-col gap-5">
        <h1 className="text-display-3 font-bold">Affordable pricing plans</h1>
        <p className="text-300 leading-normal">
          Monthly subscription for unlimited access to all materials. The longer<br/>you subscribe, the more savings and benefits you get.
        </p>
      </div>
      <div className="flex gap-20 items-center">
        <PricingCard key={0} data={pricingList[0]} />
        <PopularPricingCard key={1} data={pricingList[1]} />
        <PricingCard key={2} data={pricingList[2]} />
      </div>
    </div>
  );
};

export default Pricing;
