import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import DraggableCards from "./pages/cards";
import MePage from "./pages/me";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="hidden md:block">
      <MePage />
    </div>
    {/* <div className="min-h-screen"> */}
    {/* <DraggableCards /> */}
    {/* </div> */}
  </StrictMode>,
);
