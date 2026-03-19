import {
  PrimaryButtonDefault,
  SecondaryButtonDefault,
} from "@/shared/components/UI/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import { Feature } from "../data/featureList";

const FeatureCard = ({ data }: { data: Feature }) => {
  const isHighlight = data.variant === "highlight";

  const containerClasses = isHighlight
    ? "bg-gradient-to-b from-[#356C85] to-[#66ACA5] text-white"
    : "bg-white border-2 border-blue-dark text-blue-dark shadow-md";

  return (
    <div
      className={`${containerClasses} flex flex-col px-5 py-10 rounded-[2.5rem] gap-8 justify-center items-center max-w-xs`}
    >
      <Image src={data.image} alt="..." />
      <h1 className="text-display-4 font-bold">{data.title}</h1>
      <p className="text-body-sm text-center">{data.desc}</p>
      <Link href="">
        {isHighlight ? (
          <PrimaryButtonDefault className="px-16 font-normal">
            Learn More
          </PrimaryButtonDefault>
        ) : (
          <SecondaryButtonDefault className="px-16 font-medium">
            Learn More
          </SecondaryButtonDefault>
        )}
      </Link>
    </div>
  );
};

export default FeatureCard;
