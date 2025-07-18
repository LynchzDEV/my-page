import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

import { draggableCardItems } from "@/data/draggableCardItems";

import Blogs from "@/components/blogs";

export default function DraggableCardDemo() {
  const items = draggableCardItems;
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
