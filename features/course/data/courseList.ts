import { StaticImageData } from "next/image";
import uiux from "@/public/course/uiux.png"
import pm from "@/public/course/pm.png";
import dm from "@/public/course/dm.png";
import da from "@/public/course/ds.png";
import finance from "@/public/course/fin.png";
import web from "@/public/course/web.png";
import dg from "@/public/course/dg.png";
import ms from "@/public/course/micr.png";

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
  {
    id: 5,
    image: finance,
    title: "Accounting & Finance",
    participant: 19.919,
    topic: 5,
    material: 78,
  },
  {
    id: 6,
    image: web,
    title: "Website & Apps",
    participant: 16.149,
    topic: 4,
    material: 43,
  },
  {
    id: 7,
    image: dg,
    title: "Design Graphic",
    participant: 84.802,
    topic:12,
    material: 152,
  },
  {
    id: 8,
    image: ms,
    title: "Microsoft Excel & Word ",
    participant: 53.493,
    topic: 9,
    material: 147,
  },
];