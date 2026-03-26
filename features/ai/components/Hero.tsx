'use client';
import { Button } from "@/shared/components/UI/button/Button";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Hero = ({activeTab, setActiveTab}: Props) => {
  return (
    <section className="flex w-full pt-25.25 bg-[linear-gradient(270deg,#356C85_0%,#61A5A2_83.65%,#66ACA5_100%)] font-plus-jakarta-sans text-white justify-center">
      <div className="flex justify-center items-center py-18">
        <div className="flex flex-col gap-10.5">
          <div>
            <h1 className="text-display-3 font-bold leading-none text-center">
              Land Your Dream Job with
              <br />
              WorkU AI
            </h1>
            <p className="text-300 leading-normal mt-7 text-center">
              Upload your CV for an instant AI analysis, then practice
              interviews with our
              <br />
              voice-powered AI coach. Get real feedback. Get hired faster.
            </p>
          </div>
          <div className="flex gap-5 justify-center">
            <Button
              variant="primary"
              size="default"
              className="bg-green-normal"
              onClick={() => setActiveTab('cv')}
            >
              Analyze My CV
            </Button>
            <Button
              variant="primary"
              size="default"
              className="bg-blue-dark-hover"
              onClick={() => setActiveTab('inteview')}
            >
              Start Interview Simulation
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="pr-18">
              <h1 className="text-display-3 font-bold">94%</h1>
              <p className="text-body-sm font-medium leading-relaxed">
                Interview
                <br />
                Success Rate
              </p>
            </div>
            <div className="border-l pl-9 pr-18">
              <h1 className="text-display-3 font-bold">10 S</h1>
              <p className="text-body-sm font-medium leading-relaxed">
                CV Analysis time
              </p>
            </div>
            <div className="border-l pl-9 pr-18">
              <h1 className="text-display-3 font-bold">50K+</h1>
              <p className="text-body-sm font-medium leading-relaxed">
                Careers Accelerated
              </p>
            </div>
            <div className="border-l pl-9">
              <h1 className="text-display-3 font-bold">4.9</h1>
              <p className="text-body-sm font-medium leading-relaxed">
                User Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
