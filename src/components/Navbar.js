import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  // const [toggleMenu, setToggleMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between px-6 w-screen py-2 items-center  bg-white font-light  ">
      <h5 className="p-2 rounded font-bold  bg-white text-blue-600 font-sriracha-font ">
        Arulmozhi
      </h5>

      <nav className="hidden md:block">
        <ul className=" flex justify-around rounded px-5  ">
          <li className="px-4  py-1 m-2 md:bg-white text-orange-500 rounded  font-bold hover:shadow-md hover:md:bg-blue-600 hover:md:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4 py-1 m-2 bg-white text-orange-500 rounded font-bold hover:shadow-md hover:md:bg-blue-600 hover:md:text-white ">
            <Link to="/about"> About </Link>
          </li>
          <li className="px-4 py-1 m-2 bg-white text-orange-500 rounded font-bold hover:shadow-md hover:md:bg-blue-600 hover:md:text-white">
            <Link to="/services"> Services </Link>
          </li>
          <li className=" px-4 py-1 m-2 bg-white text-orange-500 rounded font-bold  hover:shadow-md hover:m hover:md:bg-blue-600 hover:md:text-white">
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>

      {/* mobile nav viwe */}
      {isOpen && (
        <nav className="block md:hidden fixed top-14 left-0 w-full h-1/3  bg-white">
          <ul
            className=" flex flex-col rounded px-5 border top-10  "
            onClick={handleToggle}
          >
            <li className="px-4  py-1 m-2 flex justify-center bg-white text-orange-500 rounded font-bold  hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className=" px-4 py-1 m-2 flex justify-center bg-white text-orange-500 font-bold rounded hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white ">
              <Link to="/about"> About </Link>
            </li>
            <li className="px-4 py-1 m-2 flex justify-center bg-white text-orange-500 font-bold rounded hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white ">
              <Link to="/services"> Services </Link>
            </li>
            <li className=" px-4 py-1 m-2 flex justify-center bg-white text-orange-500 font-bold  rounded hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white">
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </nav>
      )}
      <button className="block md:hidden" onClick={handleToggle}>
        {isOpen ? (
          <RxCross2 className=" w-6 h-6 m-2  bg-white text-orange-500 rounded font-bold  hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white  " /> //close icon//
        ) : (
          <IoMenu className=" w-6 h-6 m-2  bg-white text-orange-500 rounded font-bold  hover:shadow-sm hover:border hover:bg-blue-600 hover:text-white" />
        )}
      </button>
    </div>
  );
}

export default Navbar;
