import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import DraggableCards from "@/pages/cards";
import MePage from "@/pages/me";

import Blogs from "@/components/blogs";

const debugBorder = true;

const borderRed = debugBorder ? "border border-red-500" : "";
const borderGreen = debugBorder ? "border border-green-400" : "";
const borderBlue = debugBorder ? "border border-blue-500" : "";
const borderRedOuter = debugBorder ? "border-red-500 border" : "";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="hidden lg:block">
      <MePage />
    </div>
    <div
      className={`h-[60vh] w-screen flex items-center  justify-center text-center ${borderRed}`}
    >
      "STORY"
    </div>
    <div
      className={`h-screen w-screen flex flex-col lg:flex-row ${borderRedOuter}`}
    >
      <div
        className={`p-6 flex w-screen items-center  justify-around text-center ${borderGreen}`}
      >
        <Blogs />
        <DraggableCards />
      </div>
    </div>
  </StrictMode>,
);
