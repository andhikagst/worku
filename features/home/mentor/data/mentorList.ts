import { StaticImageData } from "next/image";
import mentor_1 from "@/public/home/mentors/mentor_1.png"
import mentor_2 from "@/public/home/mentors/mentor_2.png"
import mentor_3 from "@/public/home/mentors/mentor_3.png"

export interface Mentor {
  id: number;
  image: StaticImageData;
  alt: string;
}

export const mentorList: Mentor[] = [
  {
    id: 1,
    image: mentor_1,
    alt: "mentor_1",
  },
  {
    id: 2,
    image: mentor_2,
    alt: "mentor_2",
  },
  {
    id: 3,
    image: mentor_3,
    alt: "mentor_3",
  },
  {
    id: 4,
    image: mentor_1,
    alt: "mentor_4",
  },
  {
    id: 5,
    image: mentor_2,
    alt: "mentor_5",
  },
  {
    id: 6,
    image: mentor_3,
    alt: "mentor_6",
  },
]