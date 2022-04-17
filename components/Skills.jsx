/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import s from "../styles/skills.module.css";

const opacityForBlock = (section, block) => {
  const progress = section - block;
  if (progress >= 0 && progress < 1) {
    return 1;
  }
  return 0.2;
};

const Skills = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col items-center justify-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            “Inspiration exists, but it has to find you working.”
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            I enjoy working on personal projects, and I believe that I achieve
            optimal levels of personal performance and accomplishment
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Scroll to see some of the projects that I&apos;ve made in the past
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
