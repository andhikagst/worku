import { StaticImageData } from "next/image";
import ai from "@/public/home/features/ai.png"
import career from "@/public/home/features/career.png"
import job from "@/public/home/features/job.png"

export interface Feature {
  id: number;
  image: StaticImageData;
  title: string;
  href: string
  desc: string;
  variant: "default" | "highlight";
}

export const featureList: Feature[] = [
  {
    id: 1,
    image: ai,
    title: "WorkU AI",
    href: "/ai",
    desc: "Optimize your professional profile and master technical interviews with our intelligent AI Career Lab.",
    variant: "highlight",
  },
  {
    id: 2,
    image: career,
    title: "Career Discovery",
    href: "/career-discovery",
    desc: "Get a personalized, step-by-step Smart Career Path tailored to your unique talents and goals.",
    variant: "default",
  },
  {
    id: 3,
    image: job,
    title: "Smart Job Match",
    href: "/smart-job-match",
    desc: "Connect your validated skills directly to industry opportunities through automated precision matching.",
    variant: "default",
  },
]


