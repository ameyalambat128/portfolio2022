import React from "react";
import Image from "next/image";

const Work = ({ image, title, description, width, height }) => {
  return (
    <div className="flex flex-col items-center justify-start outline-1 bg-white border-0 rounded-lg p-5 shadow-lg">
      <Image src={image} alt="work" width={1366 / 2.5} height={768 / 2.5} />
      <h2 className="mt-5 text-2xl lg:text-3xl font-bold">{title}</h2>
      <p className="mt-5 text-sm md:text-lg font-medium">{description}</p>
    </div>
  );
};

export default Work;
