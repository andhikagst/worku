import Image from "next/image";
import wanita_hero from "@/public/home/hero/wanita_hero.png";

const Hero = () => {
  return (
    <section className="h-screen w-full font-plus-jakarta-sans text-white flex flex-col relative z-0">
      <div className="bg-linear-to-b from-blue-normal py-32 to-green-normal to-70% flex flex-col justify-center gap-5 px-20 h-full">
        <h2 className="text-body1">Start your favorite course</h2>
        <div className="font-semibold text-h2 drop-shadow-md drop-shadow-[rgba(0,0,0,0.25)]">
          <div>ACCELERATE YOUR</div>
          <div className="-mt-4">
            CAREER WITH <span className="text-blue-dark-hover">WORKU</span>
          </div>
        </div>
        <div className="text-body2">
          <h2>
            WorkU is an AI-driven career acceleration ecosystem designed to
          </h2>
          <h2>
            bridge the gap between academic theory and industry requirements.
          </h2>
        </div>
        <button className="self-start px-8 py-3 rounded-4xl bg-blue-normal shadow-[rgba(0,0,0,0.25)] shadow-md">
          Get Started
        </button>
      </div>
      <div className="flex bg-blue-normal-active items-center gap-12 px-20 py-7">
        <div>
          <h1 className="font-extrabold text-h2">24/7</h1>
          <h2 className="font-medium text-body3">AI Career Support</h2>
        </div>
        <div>
          <h1 className="font-extrabold text-h2">80+</h1>
          <h2 className="font-medium text-body3">Industry Courses</h2>
        </div>
        <div>
          <h1 className="font-extrabold text-h2">100 MIL+</h1>
          <h2 className="font-medium text-body3">Task Scenarios Simulated</h2>
        </div>
      </div>
      <Image
        src={wanita_hero}
        alt="..."
        className="absolute w-[60%] right-0 -bottom-10"
      />
    </section>
  );
};

export default Hero;
