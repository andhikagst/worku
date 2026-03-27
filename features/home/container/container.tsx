import React from "react";
import CTAContainer from "@/features/home/cta/container/container";
import CourseContainer from "@/features/home/course/container/container";
import FeatureContainer from "@/features/home/feature/container/container";
import HeroContainer from "@/features/home/hero/container/container";
import MentorContainer from "@/features/home/mentor/container/container";
import PartnerContainer from "@/features/home/partner/container/container";
import PricingContainer from "@/features/home/pricing/container/container";
import RatingContainer from "@/features/home/rating/container/container";

const HomeContainer = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroContainer />
      <PartnerContainer />
      <CourseContainer />
      <FeatureContainer />
      <MentorContainer />
      <RatingContainer />
      <PricingContainer />
      <CTAContainer />
    </main>
  );
};

export default HomeContainer;
