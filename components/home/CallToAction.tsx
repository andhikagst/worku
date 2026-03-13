import Image from "next/image";
import cta from "@/public/home/cta/cta.png"
import React from "react";
import PrimaryButton from "../UI/button/PrimaryButton";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="flex justify-center font-plus-jakarta-sans py-16">
      <div className="flex items-center gap-40">
        <Image src={cta} alt="..." />
        <div className="space-y-10">
          <h1 className="text-h2 font-bold text-blue-dark">Ready to bridge your<br/>industry gap?</h1>
          <p className="text-body1">Start your personalized career journey today and turn your<br/>academic potential into professional success.</p>
          <PrimaryButton className="text-body2 font-bold py-6 px-9 bg-blue-dark text-white flex items-center gap-2">Get Started <ArrowRight /></PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
