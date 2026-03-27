import Image from "next/image";
import wanita_hero from "@/public/home/hero/wanita_hero.png";
import { Button } from "@/shared/components/UI/button/Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col relative z-0 font-plus-jakarta-sans text-white">
      <div className="bg-linear-to-b flex-1 from-blue-normal pt-26 to-green-normal to-70% flex flex-col justify-center text-center sm:text-left lg:gap-5 sm:gap-3 gap-1.5 px-20">
        <h2 className="lg:text-h3 sm:text-lg text-md ">Start your favorite course</h2>

        <h1 className="font-semibold font-poppins lg:text-display-3 sm:text-4xl text-2xl  drop-shadow-md leading-none drop-shadow-[rgba(0,0,0,0.50)]">
          ACCELERATE YOUR
          <br />
          CAREER WITH <span className="text-blue-dark-hover">WORKU</span>
        </h1>

        <h2 className="lg:text-300 sm:text-sm text-xs sm:max-w-[55%]">
          WorkU is an AI-driven career acceleration ecosystem designed to
          <br />
          bridge the gap between academic theory and industry requirements.
        </h2>
        <div>
          <Button variant="primary" size="small" className="md:scale-100 scale-75 ">
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex bg-blue-normal-active items-center lg:gap-12 md:gap-8 gap-4 lg:px-20 md:px-16 px-12 py-7">
        <div>
          <h1 className="font-extrabold md:text-h2 text-2xl">24/7</h1>
          <h2 className="font-medium md:text-body-sm text-xs">AI Career Support</h2>
        </div>
        <div>
          <h1 className="font-extrabold md:text-h2 text-2xl">80+</h1>
          <h2 className="font-medium md:text-body-sm text-xs">Industry Courses</h2>
        </div>
        <div>
          <h1 className="font-extrabold md:text-h2 text-2xl">100 MIL+</h1>
          <h2 className="font-medium md:text-body-sm text-xs">Task Scenarios Simulated</h2>
        </div>
      </div>
      <div className="absolute lg:right-0 md:-right-15 sm:-right-25 md:-bottom-10 -bottom-40 w-[75%] h-[95%] origin-right sm:block hidden">
        <Image
          src={wanita_hero}
          fill
          alt="..."
          className="object-contain object-top"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
