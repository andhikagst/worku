import { StaticImageData } from "next/image";
import shopee from "@/public/home/partners/shopee.png";
import blibli from "@/public/home/partners/blibli.png";
import unilever from "@/public/home/partners/unilever.png";
import xiaomi from "@/public/home/partners/xiaomi.png";
import grab from "@/public/home/partners/grab.png";
import gojek from "@/public/home/partners/gojek.png";

export interface Partner {
  id: number;
  image: StaticImageData;
}

export const partnerList: Partner[] = [
  {
    id: 1,
    image: shopee,
  },
  {
    id: 2,
    image: blibli,
  },
  {
    id: 3,
    image: unilever,
  },
  {
    id: 4,
    image: xiaomi,
  },
  {
    id: 5,
    image: grab,
  },
  {
    id: 6,
    image: gojek,
  },
  {
    id: 7,
    image: shopee,
  },
  {
    id: 8,
    image: blibli,
  },
  {
    id: 9,
    image: unilever,
  },
  {
    id: 10,
    image: xiaomi,
  },
  {
    id: 11,
    image: grab,
  },
  {
    id: 12,
    image: gojek,
  },
];
