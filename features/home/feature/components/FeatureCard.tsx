import Image from "next/image";
import Link from "next/link";
import { Feature } from "../data/featureList";
import { Button } from "@/shared/components/UI/button/Button";

const FeatureCard = ({ data }: { data: Feature }) => {
  const variant: "primary" | "secondary" = "secondary";

  return (
    <div className="group relative bg-white border-2 border-blue-dark text-blue-dark shadow-md rounded-[2.5rem] max-w-xs hover:text-white hover:border-none overflow-hidden">
      <div className="group-hover:bg-[linear-gradient(270deg,#356C85_0%,#61A5A2_83.65%,#66ACA5_100%)] absolute inset-0 z-0" />
      <div className="relative z-1 gap-8 justify-center items-center flex flex-col px-5 py-10">
        <Image
          src={data.image}
          alt="..."
          className="min-h-20 w-auto group-hover:brightness-0 group-hover:invert"
        />
        <h1 className="text-display-4 font-bold">{data.title}</h1>
        <p className="text-body-sm text-center">{data.desc}</p>
        <Link href={data.href}>
          <Button
            variant={variant}
            size="small"
            className="px-16 font-normal bg-white group-hover:bg-blue-dark group-hover:text-white"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
