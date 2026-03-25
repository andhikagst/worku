import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
export interface JobType {
  city: string;
  isContract: string;
  salary: string;
}

export interface Job {
  id: number;
  profile: string;
  label: string;
  company: string;
  location: string;
  contract: string;
  href: string;
  distance: string;
  jobType: JobType;
  skill: string[];
}

export const jobList: Job[] = [
  {
    id: 1,
    profile: "BCA",
    label: "Product Designer",
    company: "GovTechEdu",
    location: "Gambir",
    contract: "4+ yrs",
    href: "/",
    distance: "5.1 km",
    jobType: {
      city: "Jakarta Pusat",
      isContract: "Contract",
      salary: "Rp. 18-25 Juta",
    },
    skill: ["Figma", "Government UX", "Accessibility", "Service Design", "+1"],
  },
  {
    id: 2,
    profile: "BCA",
    label: "Product Designer",
    company: "GovTechEdu",
    location: "Gambir",
    contract: "4+ yrs",
    href: "/",
    distance: "5.1 km",
    jobType: {
      city: "Jakarta Pusat",
      isContract: "Contract",
      salary: "Rp. 18-25 Juta",
    },
    skill: ["Figma", "Government UX", "Accessibility", "Service Design", "+1"],
  },
  {
    id: 3,
    profile: "BCA",
    label: "Product Designer",
    company: "GovTechEdu",
    location: "Gambir",
    contract: "4+ yrs",
    href: "/",
    distance: "5.1 km",
    jobType: {
      city: "Jakarta Pusat",
      isContract: "Contract",
      salary: "Rp. 18-25 Juta",
    },
    skill: ["Figma", "Government UX", "Accessibility", "Service Design", "+1"],
  },
  {
    id: 4,
    profile: "BCA",
    label: "Product Designer",
    company: "GovTechEdu",
    location: "Gambir",
    contract: "4+ yrs",
    href: "/",
    distance: "5.1 km",
    jobType: {
      city: "Jakarta Pusat",
      isContract: "Contract",
      salary: "Rp. 18-25 Juta",
    },
    skill: ["Figma", "Government UX", "Accessibility", "Service Design", "+1"],
  },
  {
    id: 5,
    profile: "BCA",
    label: "Product Designer",
    company: "GovTechEdu",
    location: "Gambir",
    contract: "4+ yrs",
    href: "/",
    distance: "5.1 km",
    jobType: {
      city: "Jakarta Pusat",
      isContract: "Contract",
      salary: "Rp. 18-25 Juta",
    },
    skill: ["Figma", "Government UX", "Accessibility", "Service Design", "+1"],
  },
];
