import React from "react";
import Image from "next/image";
import {
  AiOutlineCopyright,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const ContactInfo = [
  {
    icon: <AiFillGithub />,
    name: "GitHub",
    link: "https://github.com/ameyalambat128",
    id: 0,
  },
  {
    icon: <AiFillLinkedin />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ameyalambat/",
    id: 1,
  },
  {
    icon: <AiFillTwitterSquare />,
    name: "Twitter",
    link: "https://twitter.com/LambatAmeya",
    id: 2,
  },
  {
    icon: <AiFillInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/ameyalambat128/",
    id: 3,
  },
];

const Contact = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-end pb-10 min-h-screen">
      <div className="pb-5">
        <Image
          src="/assets/logo.png"
          alt="img"
          width={45}
          height={50}
          className="drop-shadow-[1px_5px_3px_rgba(0,0,0,0.8)]"
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold">Contact Me</h2>
      <div className="mt-10 h-[1px] w-[80vw] bg-white" />
      <div className="mt-10 flex flex-row items-center text-base md:text-lg">
        <AiOutlineCopyright /> Ameya Lambat
      </div>
      <div className="mt-10 px-5 md:px-4 grid grid-cols-4 gap-4 lg:gap-8 lg:text-lg">
        {ContactInfo.map(({ icon, name, link, id }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="details"
          >
            <div key={id} className="flex flex-row items-center justify-center">
              <div className="">{icon}</div>
              <div className="">{name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
