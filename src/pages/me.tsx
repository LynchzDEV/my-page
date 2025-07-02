import Me from "@/assets/me.png";
import BG from "@/assets/bg.mp4"; // Correctly importing the video file
import { useEffect, useState, useRef } from "react";

const lerp = (start: number, end: number, t: number) => {
  return start * (1 - t) + end * t;
};

const MePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false); // This state now tracks if the video is ready
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [scrollX, setScrollX] = useState(0);
  const [smoothScrollX, setSmoothScrollX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const scrollXRef = useRef(scrollX);
  scrollXRef.current = scrollX;

  const MAX_SCROLL_X = 500;

  useEffect(() => {
    // Initial load animations
    setTimeout(() => {
      setImageLoaded(true);
      // We removed setBgLoaded from here, it's now handled by the video's onLoadedData event
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

    const handleWheel = (e: WheelEvent) => {
      const scrollAmount = e.deltaY;
      const currentScrollX = scrollXRef.current;

      if (
        (scrollAmount > 0 && currentScrollX < MAX_SCROLL_X) ||
        (scrollAmount < 0 && currentScrollX > 0)
      ) {
        e.preventDefault();
        setScrollX((prev) =>
          Math.max(0, Math.min(prev + scrollAmount, MAX_SCROLL_X)),
        );
      }
    };

    const currentContainer = containerRef.current;
    window.addEventListener("mousemove", handleMouseMove);
    currentContainer?.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      clearTimeout(textTimer);
      window.removeEventListener("mousemove", handleMouseMove);
      currentContainer?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Animation loop for smooth scrolling
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      const newSmoothScrollX = lerp(smoothScrollX, scrollX, 0.075);
      if (Math.abs(scrollX - newSmoothScrollX) < 0.1) {
        setSmoothScrollX(scrollX);
      } else {
        setSmoothScrollX(newSmoothScrollX);
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollX, smoothScrollX]);

  // ---- Animation Calculations ----

  const scrollProgress = smoothScrollX / MAX_SCROLL_X;

  const bgTransform = `scale(1.1) translate(${mousePosition.x * 20}px, ${
    mousePosition.y * 20
  }px)`;

  const imageTransform = `translateX(${smoothScrollX}px) translate(${-mousePosition.x * 20}px, ${Math.min(
    0,
    -mousePosition.y * 20,
  )}px)`;

  const textScale = 1 - scrollProgress * 0.6;
  const textTranslateX = scrollProgress * -250;
  const textTranslateY = scrollProgress * -150;
  const textOpacity = 0.6 - scrollProgress * -1;
  const textTransform = `
    translateX(calc(-50% + ${textTranslateX}px))
    translateY(calc(-50% + ${textTranslateY}px))
    scale(${textScale})
  `;

  const descriptionOpacity = Math.max(0, (scrollProgress - 0.4) * 2);
  const descriptionTranslateX = scrollProgress * -245;
  const descriptionTranslateY = (2 - scrollProgress) * 30;
  const descriptionTransform = `
    translateX(calc(-50% + ${descriptionTranslateX}px))
    translateY(calc(-50% + ${descriptionTranslateY}px))
  `;

  return (
    <>
      <div style={{ height: `calc(100vh + ${MAX_SCROLL_X}px)` }}>
        <div
          ref={containerRef}
          className="flex h-screen w-full justify-center items-end overflow-hidden sticky top-0"
        >
          {/* ---- CHANGE START ---- */}
          {/* We replace the div with a video element */}
          <video
            src={BG} // Use the imported video file as the source
            autoPlay // The video will start playing on its own
            loop // The video will restart when it finishes
            muted // Mute the video, which is required for autoplay in most browsers
            playsInline // Important for playback on iOS devices
            onLoadedData={() => setBgLoaded(true)} // Set bgLoaded to true when the video data is ready
            className={`absolute inset-0 w-full h-screen object-cover transition-opacity duration-700 ${
              bgLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: bgTransform,
              filter: "blur(8px)",
              transition: "transform 0.1s ease-out",
            }}
          />
          {/* ---- CHANGE END ---- */}

          <p
            className={`absolute left-1/2 top-1/2 text-center font-black text-white text-[10vh] md:text-[15vh] lg:text-[30vh] z-10`}
            style={{
              transform: textTransform,
              transformOrigin: "center center",
              opacity: textVisible ? textOpacity : 0,
              transition: "opacity 300ms",
            }}
          >
            LYNCHZ
          </p>

          <div
            className="absolute left-1/2 top-1/2 w-4/5 md:w-1/2 z-10"
            style={{
              opacity: descriptionOpacity,
              transform: descriptionTransform,
              transition: "opacity 150ms ease-in-out",
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
              Software Developer
            </h2>
            <p className="text-md md:text-xl text-white/80 text-center">
              I build things for the web with a focus on modern design and great
              user experiences. Currently a computer science student passionate
              about clean code and creative solutions.
            </p>
          </div>

          <div
            ref={imageContainerRef}
            className={`lg:h-4/5 md:h-3/5 h-4/5 z-20 transition-all duration-700 ease-out ${
              imageLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-32"
            }`}
            style={{
              transform: imageTransform,
              transformOrigin: "bottom",
              transition: "opacity 0.7s ease-out, translate 0.7s ease-out",
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
      </div>
    </>
  );
};

export default MePage;
