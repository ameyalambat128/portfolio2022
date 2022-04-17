import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@mui/material/Button";

import {
  ProjectBackground,
  ProjectContainer,
  ProjectLeft,
  ProjectLink,
  ProjectRight,
} from "./Project";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";

const Projects = () => {
  return (
    <TileWrapper numOfPages={7}>
      <TileBackground>
        <ProjectBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Median
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    A decentralized web chat app using Nextjs, Moralis and
                    TailwindCSS. Users can connect to this using their Ethereum
                    wallet.
                  </span>
                  <a
                    href="https://github.com/ameyalambat128/median"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/median.png"
                    width={1920}
                    height={928}
                    alt="Median"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Netflix-Clone
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    Created a Netflix clone using React and Redux using Axios to
                    fetch information from the API of TMBD.
                  </span>
                  <a
                    href="https://github.com/ameyalambat128/netfilx-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/netflix-clone.png"
                    width={1920}
                    height={928}
                    alt="Netflix-Clone"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Note List
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    A Note-Taking App using React for the frontend and Django as
                    the backend. The notes that are typed in are immediately
                    saved by the program.
                  </span>
                  <a
                    href="https://github.com/ameyalambat128/Notetaking-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/Notetaking-App.png"
                    width={1920}
                    height={928}
                    alt="notelist"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Uber-Clone
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    An Uber clone using React Native, Redux, Tailwind CSS, and
                    React Navigation for the routing and navigation between
                    pages. Used different APIs like Google Autocomplete and
                    Directions API for the search bars and map.
                  </span>
                  <a
                    href="https://github.com/ameyalambat128/uber-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/uber-clone.png"
                    width={1920}
                    height={928}
                    alt="uber"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={4}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Dr.App
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    Working on a Progressive Web App (PWA) developed for the
                    Doctors to manage their OPD data using Angular 11 and
                    Indexed DB for storing offline data.
                  </span>
                  <a
                    href="https://gitlab.com/code_chefs/dr-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/Dr.App.png"
                    width={1920}
                    height={928}
                    alt="dr.app"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={5}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Air Quality Index API
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    Created a serverless REST API using AWS Lambda to display an
                    air quality index of the supplied city. Air Quality Index
                    data is formatted, stored, and accessed from AWS DynamoDB
                  </span>
                  <a
                    href="https://0vr7lhfhw7.execute-api.us-west-1.amazonaws.com/dev/air/Maricopa/Arizona"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-white text-black mt-10 lg:mt-20 p-2 lg:p-5 text-lg font-semibold border-2 rounded-lg">
                      Learn More
                    </div>
                  </a>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/AWS-AQI-API.png"
                    width={1920}
                    height={928}
                    alt="aqi"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
      <TileContent>
        <Tile
          page={6}
          renderContent={({ progress }) => (
            <ProjectContainer>
              <ProjectLeft progress={progress}>
                <div className="flex flex-col items-center justify-center px-10 lg:px-20">
                  <h1 className="font-semibold lg:text-6xl mb-5 lg:mb-10 tracking-tight">
                    Speed Climbing Timer
                  </h1>
                  <span className="text-lg lg:text-2xl tracking-tight">
                    Co-created a speed climbing timer with my father which is
                    successfully being used in my training center. Raspberry Pi
                    is used for hosting Node-RED and MQTT. ESP8266 and flex
                    sensors are used for wireless communication.
                  </span>
                </div>
              </ProjectLeft>
              <ProjectRight progress={progress}>
                <div className="shadow-lg">
                  <Image
                    src="/assets/SpeedClimbing-Timer.png"
                    width={1920}
                    height={928}
                    alt="Timer"
                  />
                </div>
              </ProjectRight>
            </ProjectContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};

export default Projects;
