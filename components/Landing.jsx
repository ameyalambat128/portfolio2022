import Image from "next/image";
import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/assets/landing.mp4" type="video/mp4" />
      </video>

      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
        <Image
          src="/assets/logo.png"
          alt="img"
          width={35}
          height={40}
          className="drop-shadow-[1px_5px_3px_rgba(0,0,0,0.8)]"
        />
      </div>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex flex-1 items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Ameya Lambat</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Full Stack Developer, </span>
          <span>CS Student</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-all duration-1000">
        <Image
          src="/assets/arrow-down.png"
          width={35}
          height={35}
          alt="scroll down"
          className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
        />
      </div>
    </div>
  );
};

export default Landing;
