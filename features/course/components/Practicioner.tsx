import React from "react";
import PracticionerCard from "./PracticionerCard";

const Practicioner = () => {
  return (
    <section className="font-plus-jakarta-sans text-blue-normal pb-32">
      <div className="px-20">
        <div className="text-center">
          <h1 className="text-display-3 font-bold">Created by Professional Practitioners. Walk the talk.</h1>
          <p className="text-h3 text-black leading-tight mt-10">Learn directly from experienced professionals who<br/>teach experience, case studies & best practices.</p>
        </div>
        <div>
          <PracticionerCard/>
        </div>
      </div>
    </section>
  );
};

export default Practicioner;
