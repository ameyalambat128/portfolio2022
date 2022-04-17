/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Work from "./Work";

const About = () => {
  return (
    <div
      className={`flex flex-col bg-white py-10 md:py-20 text-3xl md:text-4xl outline-1`}
    >
      <div className="container mx-auto px-11 transition-all duration-100">
        <p className="leading-tight max-w-5xl mx-auto text-black text-2xl md:text-4xl tracking-tight">
          <strong>
            Hey, My name is Ameya, and I'm a Computer Science Major at ASU.
          </strong>{" "}
          I am a full stack developer with a passion for learning and building
          new web applications, and I love working with React!
        </p>
        <div className="container mx-auto px-11 text-center mt-28">
          <h2 className="font-semibold text-3xl md:text-4xl transition-all duration-500">
            Work Experience
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
            <Work
              image="/assets/work1.png"
              title="Mobile Application Developer"
              description="Designing and developing a cross-platform mobile app for indigenous Native-American recipes.
              Using React Native to build a responsive frontend from the ground up and make it user-friendly.
              Using Firebase as our backend and Firestore as the primary database."
            />
            <Work
              image="/assets/work2.png"
              title="Undergraduate Teaching Assistant"
              description="Kickstarting over 70 students' computer science journey in CSE110 which is the first class of CS majors.
              Providing assistance to students by holding weekly study hall sessions.
              Assisting graduate teaching assistants in Java Lab sessions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
