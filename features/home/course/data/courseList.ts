import { StaticImageData } from "next/image";
import uiux from "@/public/home/courses/uiux_design.png";
import pm from "@/public/home/courses/product_management.png";
import dm from "@/public/home/courses/digital_marketing.png";
import da from "@/public/home/courses/data_analyst.png";

// 1. Definisikan Struktur Data (Interface)
export interface Course {
  id: number;
  image: StaticImageData;
  title: string;
  participant: number;
  topic: number;
  material: number; 
}

// 2. Data Dummy
export const courseList: Course[] = [
  {
    id: 1,
    image: uiux,
    title: "UI/UX Design",
    participant: 19.919,
    topic: 5,
    material: 78,
  },
  {
    id: 2,
    image: pm,
    title: "Product Management",
    participant: 16.149,
    topic: 4,
    material: 43,
  },
  {
    id: 3,
    image: dm,
    title: "Digital Marketing",
    participant: 84.802,
    topic:12,
    material: 152,
  },
  {
    id: 4,
    image: da,
    title: "Data Analysis",
    participant: 53.493,
    topic: 9,
    material: 147,
  },
];