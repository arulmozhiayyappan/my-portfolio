import React from "react";
import { FaLaptopCode, FaTools } from "react-icons/fa";

function Services() {
  return (
    <div className=" bg-purple-900 font-noto-font md:h-screen w-screen h-scree">
      <div>
        n
        <h1 className="font-bold flex justify-center text-4xl md:px-2 md:py-5 text-blue-400 ">
          {" "}
          Our Services
        </h1>
      </div>

      <div className=" w-screen  md:flex  p-2  text-yellow-50 lg:mt-24 ">
        <div className=" p-2  m-4 md:w-1/2 md:flex  md:justify-center md:flex-col flex-wrap  lg:w-1/3 lg:ml-28">
          <FaLaptopCode className=" w-16 h-16 ml-24 text-red-600 md:ml-36 lg:ml-52" />
          <h1 className=" flex justify-center  text-blue-400  font-sriracha-font  m-2  p-2 lg:text-2xl">
            {" "}
            Web developer
          </h1>
          <p className="  p-2 h-56 md:ml-6 md:w-full md:flex md:justify-center md:flex-wrap lg:text-2xl ">
            I am specialize in delivering innovative and tailored web
            development solutions to help businesses thrive in digital
            landscape. I am of experienced developers, designers, and
            strategists, we're committed to transforming your vision into a
            stunning reality.
          </p>
        </div>

        <div className=" p-2 m-4  md:w-1/2 md:flex  md:justify-center md:flex-col lg:w-1/3 lg:ml-56 ">
          <FaTools className="w-16 h-16 ml-24 text-red-600 md:ml-36 lg:ml-52" />
          <h1 className="flex justify-center  text-blue-400  md:flex md:justify-center font-sriracha-font m-2  p-2 lg:text-2xl">
            UI/UX Designer
          </h1>
          <p className=" p-2 h-56 md:w-full md:ml-6 lg:text-2xl  ">
            {" "}
            Create intuitive and organized site structures and navigation
            flowsthat guide users and seamlessly through your digital
            experience.consistency and usability across all devices with
            responsive design principles that adapt to different screen sizes
            and resolutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
