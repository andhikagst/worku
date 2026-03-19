import React from "react";
import { Star } from "lucide-react";
import { Rating } from "../data/ratingList";

const RatingCard = ({ data }: { data: Rating }) => {
  return (
    <div className="border w-98.5 h-86 py-12 px-8 rounded-4xl flex flex-col gap-13.5">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Star color="#FFD35C" fill="#FFD35C" />
          <Star color="#FFD35C" fill="#FFD35C" />
          <Star color="#FFD35C" fill="#FFD35C" />
          <Star color="#FFD35C" fill="#FFD35C" />
          <Star color="#FFD35C" fill="#FFD35C" />
        </div>
        <p className="text-body leading-normal">{data.desc}</p>
      </div>
      <div className="space-y-1">
        <h2 className="text-300 font-bold">{data.writer}</h2>
        <h2 className="text-200">{data.job}</h2>
      </div>
    </div>
  );
};

export default RatingCard;
