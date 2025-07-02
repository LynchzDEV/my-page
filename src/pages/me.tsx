import Me from "@/assets/me.png";
import BG from "@/assets/bg.gif";
import { useEffect, useState, useRef } from "react";

const MePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
      setBgLoaded(true);
    }, 100);

    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 600);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX / width - 0.5) * 2;
        const y = (e.clientY / height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(textTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bgTransform = `scale(1.1) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`;
  const imageTransform = `translate(${-mousePosition.x * 15}px, ${Math.min(0, -mousePosition.y * 20)}px)`;

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-full justify-end items-end relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 w-full h-screen bg-cover bg-center transition-opacity duration-700 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${BG})`,
          filter: "blur(4px)",
          transform: bgTransform,
          opacity: 0.88,
          transition: "transform 0.1s ease-out",
        }}
      />
      <p
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-black text-white text-[10vh] md:text-[15vh] lg:text-[30vh] transition-opacity duration-1000 z-10 ${textVisible ? "opacity-60" : "opacity-0"}`}
      >
        LYNCHZ
      </p>
      <div
        className={`lg:h-4/5 lg:mr-32 md:h-3/5 h-4/5 z-20 transition-all duration-700 ease-out ${
          imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"
        }`}
        style={{
          transform: imageTransform,
          transformOrigin: "bottom",
          bottom: 0,
          transition:
            "opacity 0.7s ease-out, transform 0.1s ease-out, translate 0.7s ease-out",
        }}
      >
        <img
          src={Me}
          alt="Myself"
          className="h-full w-auto object-contain scale-110"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    </div>
  );
};

export default MePage;
