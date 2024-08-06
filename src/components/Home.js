import React from "react";

import Assets from "./assets/arul.jpg";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  return (
    <div className="con1  h-screen  w-screen bg-purple-900">
      <div className=" con2 h-screen w-screen md:flex md:justify-center   ">
        <div className=" h-44 w-44  md:h-1/3 md:w-1/3 md:m-3 ml-16 md:p-2 p-2  md:opacity-100 md:relative md:top-24 md:right-5 lg:relative lg:top-36 ">
          <img
            src={Assets}
            alt=" "
            className="  rounded-full md:w-44 float-right  "
          />
        </div>

        <div className="w-screen  h-94 md:h-96 md:flex-row md:flex-wrap md:m-4 md:p-2 md:w-1/2 md:relative md:top-20 m-2 p-3 md:left-2 text-yellow-50 lg:relative lg:top-32 lg:px-28 ">
          <h1 className=" text-2xl md:pl-4 ml-3 p-2 font-noto-font ">
            Hi, I am{" "}
            <span className=" font-sriracha-font text-blue-400 font-bold ">
              Arulmozhi
            </span>
          </h1>
          <h5 className="text-2xl md:pl-4 ml-3 p-1 font-sriracha-font text-blue-400 font-bold ">
            web developer & react developer
          </h5>

          <p className=" md:pl-4 md:w-96 lg:text-2xl font-noto-font w-72 p-1 ml-3  ">
            Hello!I am a web developer with in developing websites and web
            applications using various programming languages,such as
            HTML,CSS,JavaScript.I have also worked with various frameworks and
            libraries,such as React and express js
          </p>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
//
