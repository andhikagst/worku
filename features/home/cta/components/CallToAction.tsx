import Image from "next/image";
import cta from "@/public/home/cta/cta.png";
import React from "react";
import { Button } from "@/shared/components/UI/button/Button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="flex justify-center font-plus-jakarta-sans">
      <div className="flex items-center gap-40">
        <Image src={cta} alt="..." />
        <div className="flex flex-col gap-10">
          <h1 className="text-display-3 font-bold text-blue-dark">
            Ready to bridge your
            <br />
            industry gap?
          </h1>
          <p className="text-h3">
            Start your personalized career journey today and turn your
            <br />
            academic potential into professional success.
          </p>
          <Button
            variant="primary"
            size="default"
            className="flex items-center gap-2"
          >
            Get Started <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
