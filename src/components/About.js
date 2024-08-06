import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Asset from "./assets/programming.jpg";

function About() {
  return (
    <div className="w-screen bg-purple-900 font-noto-font  text-yellow-50 flex flex-col flex-wrap">
      <h1 className="flex justify-center text-4xl text-blue-400 font-bold  py-3 ">
        {" "}
        About me{" "}
      </h1>

      <div className="md:flex m-3 md:justify-center md:flex-wrap ">
        <div className=" h-36 w-36 ml-20 md:w-1/3  md:m-5 md:p-4 ">
          <img
            src={Asset}
            alt=" "
            className="  md:w-96  md:relative md:top-24  "
          />
        </div>

        {/* about me */}
        <div className="  md:w-1/2 ml-8 md:mx-6 md:text-2xl">
          <h3 className="  text-red-600 m-2 text-2xl font-sriracha-font font-bold ">
            Qualification{" "}
          </h3>

          <div className="m-2   ">
            <h3 className="p-1  text-blue-400 font-sriracha-font ">
              Master of computer application (MCA)
              <FaGraduationCap />{" "}
            </h3>
            <h2 className=" p-1">
              Anjalai ammal mahalingam engineering college
            </h2>
            <h1 className=" p-1">2020 - 2022</h1>
          </div>
          <div className="m-2">
            <h3 className="p-1  text-blue-400 font-sriracha-font ">
              {" "}
              Bachelor of science(B,sc [physics])
              <FaGraduationCap />{" "}
            </h3>
            <h2 className="p-1 ">MASS college of arts and science</h2>
            <h1 className="p-1">2016 - 2019</h1>
          </div>
          <div className=" m-2">
            <h3 className="p-1  text-blue-400 font-sriracha-font">
              12th standard (bio maths){" "}
            </h3>
            <h2 className="p-1"> government higher secondary school</h2>
            <h1 className="p-1">2015 - 2016</h1>
          </div>
          <div className=" m-2">
            <h3 className="p-1  text-blue-400 font-sriracha-font">
              {" "}
              10th standard (10){" "}
            </h3>
            <h2 className="p-1">government higher secondary school</h2>
            <h1 className="p-1">2013 - 2014</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
