import React from "react";
import Image from "next/image";

const Work = ({ link, image, title, description, width, height }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <div className="flex flex-col items-center justify-start outline-1 bg-white border-0 rounded-lg p-5 shadow-lg">
        <Image src={image} alt="work" width={1366 / 2.5} height={768 / 2.5} />
        <h2 className="mt-5 text-2xl lg:text-3xl font-bold">{title}</h2>
        <p className="mt-5 text-sm md:text-lg font-normal">{description}</p>
      </div>
    </a>
  );
};

export default Work;
