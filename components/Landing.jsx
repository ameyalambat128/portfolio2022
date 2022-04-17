import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";
import BackgroundAnimation from "./BackgroundAnimation";

const Landing = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      {/* <div className="absolute w-full h-full z-0">
        <Image
          src="/assets/bg1.jpg"
          alt="background"
          width={1}
          height={2}
          layout="responsive"
        />
        <BackgroundAnimation />
      </div> */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/landing.mp4" type="video/mp4" />
      </video>

      <div
        className={`flex-grow-0 pt-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-0" : "opacity-100"
        } `}
      >
        <Image
          src="/assets/logo.png"
          alt="img"
          width={35}
          height={40}
          className="drop-shadow-[1px_5px_3px_rgba(0,0,0,0.8)]"
        />
      </div>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
        <h1 className="mb-6 text-5xl xl:text-6xl">Ameya Lambat</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Full Stack Developer, </span>
          <span>CS Student</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-0 -translate-y-10" : "opacity-100"
        }`}
      >
        <Image
          src="/assets/arrow-down.png"
          width={35}
          height={35}
          alt="scroll down"
          className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Landing;
