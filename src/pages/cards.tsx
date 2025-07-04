import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

import IMG01 from "@/assets/IMG00001.JPG";
import IMG02 from "@/assets/IMG00010.JPG";
import IMG03 from "@/assets/IMG00009.JPG";
import IMG04 from "@/assets/IMG00007.JPG";
import IMG05 from "@/assets/IMG00008.JPG";
import IMG06 from "@/assets/IMG00005.JPG";

import Blogs from "@/components/blogs";

export default function DraggableCardDemo() {
  const items = [
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
      className: "absolute top-32 left-[65%] rotate-[10deg]",
      link: "https://google.com",
    },
    {
      title: "",
      image: IMG05,
      className: "absolute top-2 right-[10%] rotate-[2deg]",
      link: "https://google.com",
    },
    {
      title: "",
      image: IMG06,
      className: "absolute top-24 left-[38%] rotate-[-7deg]",
      link: "https://google.com",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <div className="z-20 absolute left-0 ml-8">
        <Blogs />
      </div>
      <div>
        <p className="absolute top-1/2 mx-auto max-w-2xl -translate-y-3/4 text-center text-2xl text-gray-700 opacity-60 md:text-4xl font-normal">
          Live with passion, <br />
          Learn with purpose, <br />
          Act without hesitation. <br />
          <br />
          Share it all as if there's no tomorrow. :D
        </p>
        <div>
          {items.map((item) => (
            <DraggableCardBody
              className={`${item.className} mt-48`}
              key={item.image}
            >
              {/* <a href={item.link} target="_blank" rel="noopener noreferrer"> */}
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              {/* </a> */}
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </div>
      </div>
    </DraggableCardContainer>
  );
}
