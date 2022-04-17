import React from "react";
import Image from "next/image";

const Work = ({ image, title, description, width, height }) => {
  return (
    <div className="flex flex-col items-center justify-start outline-1 outline-black">
      <Image src={image} alt="appdev" width={1366 / 2} height={768 / 2} />
      <h2 className="mt-5 text-2xl lg:text-3xl font-bold">{title}</h2>
      <p className="mt-5 text-lg font-medium">{description}</p>
    </div>
  );
};

export default Work;
