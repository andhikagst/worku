import CallToAction from "@/components/home/CallToAction";
import Course from "@/components/home/Course";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Mentor from "@/components/home/Mentor";
import Partner from "@/components/home/Partner";
import Pricing from "@/components/home/Pricing";
import Rating from "@/components/home/Rating";

const Home = () => {
  return (
    <>
      <Hero />
      <Partner />
      <Course />
      <Feature />
      <Mentor />
      <Rating />
      <Pricing />
      <CallToAction />
    </>
  );
};
export default Home;
