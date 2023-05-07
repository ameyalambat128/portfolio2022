/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Work from "./Work";

const About = () => {
  return (
    <div
      className={`flex flex-col bg-gray-100 py-10 md:py-20 text-3xl md:text-4xl outline-1`}
    >
      <div className="container mx-auto px-11 transition-all duration-100">
        <p className="leading-tight max-w-5xl mx-auto text-black text-2xl md:text-4xl tracking-tight">
          <strong>
            Hey, My name is Ameya, and I'm a Computer Science Major at ASU.
          </strong>{" "}
          I am a full-stack developer with a passion for learning and building
          new web applications. I am currently working on Breze and learning a
          variety of new technologies and acquiring new skills along the way!
        </p>
        <div className="container mx-auto md:px-11 text-center mt-28">
          <h2 className="font-semibold text-3xl md:text-4xl transition-all duration-500 mb-2">
            Work Experience
          </h2>
          <a
            href="/resume.pdf"
            className="text-lg font-light bg-blue-500/50 text-blue-500 ring-1 py-1 px-2 rounded-md"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <div className="mt-10 grid align-middle grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
            <Work
              link="https://paypal.com"
              image="/assets/work5.png"
              title="Software Engineer Intern"
              description="Working at PayPal on the Credit and Payments team."
            />
            <Work
              link="https://breze.one"
              image="/assets/work4.png"
              title="Founder"
              description="Browse Through Your Emails in a Breze. Working on Breze, a new email client! Using Nextjs, TailwindCSS, and Redux for the frontend. Using Nestjs, Go, AWS Lambda and AWS DynamoDB for the backend."
            />
            <Work
              link="https://www.corsair.com"
              image="/assets/work3.png"
              title="Software Engineer Intern"
              description="Working with the web team at Corsair, managing Corsair.com and adding new features and products to it. Working with SAP Hybris to manage different pages and components. Using Nextjs, TailwindCSS to create new components and implement new designs."
            />
            <Work
              link="https://www.asu.edu/"
              image="/assets/work1.png"
              title="Mobile Application Developer"
              description="Designing and developing a cross-platform mobile app for indigenous Native-American recipes.
              Using React Native to build a responsive frontend from the ground up and make it user-friendly.
              Using Firebase as our backend and Firestore as the primary database."
            />
            <Work
              link="https://engineering.asu.edu/"
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
