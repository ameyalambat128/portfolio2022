/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className={`flex flex-col bg-gray-100 py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11 transition-all duration-100">
        <p className="leading-tight max-w-5xl mx-auto text-black text-4xl lg:text-4xl tracking-tight">
          <strong>
            Hey, My Name is Ameya, and I'm a Computer Science Major at ASU.
          </strong>{" "}
          I am a full stack developer with a passion for learning and building
          new web applications, and I love working with React!
        </p>
        <div className="container mx-auto px-11 text-center mt-28">
          <h2 className="font-medium text-3xl md:text-4xl transition-all duration-500">
            Work Experience
          </h2>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default About;
