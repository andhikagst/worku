import React from "react";
import RatingCard from "./RatingCard";
import { ratingList } from "../data/ratingList";

const Rating = () => {
  return (
    <section className="flex flex-col gap-10 font-plus-jakarta-sans pl-20 overflow-hidden">
      <h1 className="text-display-3 text-blue-dark font-bold">
        What subscribers are achieving through learning
      </h1>
      <p className="text-300 leading-[1.3]">
        Turning academic potential into industry-ready expertise through
        validated real-
        <br />
        task simulations and personalized career paths now!
      </p>
      <div className="flex gap-10 w-fit">
        {ratingList.map((item) => {
          return <RatingCard key={item.id} data={item} />;
        })}
      </div>
    </section>
  );
};

export default Rating;
