import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero-gradient py-16 font-plus-jakarta-sans">
      <div className="flex flex-col gap-4 px-32 pb-25 pt-16 text-white">
        <h1 className="text-display-2 font-bold leading-20">
          Find Jobs That
          <br />
          Fit <span className="text-blue-dark">Your Profile</span>
        </h1>
        <p className="font-medium text-body-lg leading-none ">
          Our Smart Job Features-matches your skills, location, and career goals
          to
          <br />
          surface the most relevant opportunities — ranked by compatibility
          score.
        </p>
      </div>
    </section>
  );
};

export default Hero;
