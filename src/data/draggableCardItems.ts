import IMG01 from "@/assets/IMG00001.JPG";
import IMG02 from "@/assets/IMG00010.JPG";
import IMG03 from "@/assets/IMG00009.JPG";
import IMG04 from "@/assets/IMG00007.JPG";
import IMG05 from "@/assets/IMG00008.JPG";
import IMG06 from "@/assets/IMG00005.JPG";

export interface DraggableCardItem {
  title: string;
  image: string;
  className: string;
  link?: string;
}

export const draggableCardItems: DraggableCardItem[] = [
  {
    title: "",
    image: IMG01,
    className: "absolute top-10 left-[40%] rotate-[-5deg]",
    link: "https://google.com",
  },
  {
    title: "",
    image: IMG02,
    className: "absolute top-40 left-[45%] rotate-[-7deg]",
    link: "https://google.com",
  },
  {
    title: "",
    image: IMG03,
    className: "absolute top-5 left-[60%] rotate-[8deg]",
    link: "https://google.com",
  },
  {
    title: "",
    image: IMG04,
    className: "absolute top-32 left-[64%] rotate-[10deg]",
    link: "https://google.com",
  },
  {
    title: "",
    image: IMG05,
    className: "absolute top-15 right-[10%] rotate-[2deg]",
    link: "https://google.com",
  },
  {
    title: "",
    image: IMG06,
    className: "absolute top-24 left-[38%] rotate-[-7deg]",
    link: "https://google.com",
  },
];
