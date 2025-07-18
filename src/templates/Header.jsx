import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import cv from "../assets/cv.pdf";
import { HiOutlineSave } from "react-icons/hi";
const Header = () => {
  return (
    <header className="hidden md:hidden lg:block xl:block ">
      <div className="flex justify-between fixed w-full z-50 p-5 px-10 items-center bg-white">
        <div className="flex items-center gap-3">
          {/* <img src={logo} alt="" className="w-8" /> */}
          <h1 className="text-xl font-bold">Ayu Arista</h1>
        </div>
        <div className="">
          <nav>
            <ul className="flex justify-center items-center gap-5 font-semibold text-sm">
              <li>
                <Link to="#skills" className="relative group py-1">
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
                </Link>
              </li>
              <li>
                <Link to="#experience" className="relative group py-1">
                  Experience
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
                </Link>
              </li>
              <li>
                <Link to="#about" className="relative group py-1">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
                </Link>
              </li>
              <li>
                <Link to="#projects" className="relative group py-1">
                  Project
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
                </Link>
              </li>
              <li>
                <Link to="#contact" className="relative group py-1">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-700 group-hover:w-full rounded-2xl"></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="px-6 py-2 rounded-lg bg-black text-white">
          <a
            href={cv}
            download="CV Ayu Arista.pdf"
            className="no-underline flex items-center gap-2 font-medium text-sm"
          >
            Download CV
            <HiOutlineSave />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
