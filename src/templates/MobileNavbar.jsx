import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { PiStarFour } from "react-icons/pi";
import { IoFlameOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import cv from "../assets/cv.pdf";
import { HiOutlineSave } from "react-icons/hi";

const MobileNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white p-4 shadow-sm fixed w-full top-0 z-40 block md:block lg:hidden xl:hidden">
      <div className="flex items-center justify-between ">
        <div>
          <button onClick={toggleSidebar} className="text-3xl">
            <RiMenu2Fill className="bg-black p-2 rounded text-white text-4xl" />
          </button>
        </div>
        <div>
        <h1 className="text-[21px] font-bold mr-14">Ayu Arista</h1>
        </div>
        <div className="flex flex-row items-center">
          <div className="px-5 py-2 rounded-lg bg-black text-white">
            <a
              href={cv}
              download="CV Ayu Arista.pdf"
              className="no-underline flex items-center gap-2 font-medium text-[12px]"
            >
              Download CV
              <HiOutlineSave className="text-sm" />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0  bg-opacity-50 z-50 transition-all ease-in-out duration-700 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-[65%] bg-white p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={toggleSidebar} className="text-2xl mb-6">
            <RiMenu2Fill className="bg-black p-2 rounded text-white text-4xl" />
          </button>
          <div className="border-b-2 text-gray-400 mb-5"></div>
          <ul className="flex flex-col gap-5 mx-3">
            <li className="flex items-center space-x-2 py-1">
              <PiStarFour className="text-xl" />
              <a
                href="#skills"
                className="text-xl font-semibold relative group py-1"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
              </a>
            </li>
            <li className="flex items-center space-x-2 py-1">
              <MdWorkspacePremium className="text-xl" />
              <a
                href="#experience"
                className="text-lg font-semibold relative group py-1"
              >
                Experience
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
              </a>
            </li>
            <li className="flex items-center space-x-2 py-1">
              <IoFlameOutline className="text-xl" />
              <a
                href="#about"
                className="text-lg font-semibold relative group py-1"
              >
                About Me
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
              </a>
            </li>
            <li className="flex items-center space-x-2 py-1">
              <LuFiles className="text-xl" />
              <a
                href="#projects"
                className="text-lg font-semibold relative group py-1"
              >
                Project
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
              </a>
            </li>
            <li className="flex items-center space-x-2 py-1">
              <IoIosCall className="text-xl" />
              <a
                href="#contact"
                className="text-lg font-semibold relative group py-1"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
