import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <footer className="bg-black w-full">
        <div className="pt-7 mx-12 text-center flex justify-center items-center flex-col">
          <h1 className="text-xl font-bold text-white">Ayu Arista</h1>
          <p className="border-t border-white px-36 mt-2"></p>
          <div className="flex flex-col lg:flex-row text-white list-none gap-5 mt-4">
            <li>
              <a
                href="#skills"
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                My Experience
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </div>
          <div className="flex justify-center items-center gap-4 mt-3 flex-col lg:flex-row">
            <div className="flex items-center gap-3 ">
              <FaPhoneAlt className="text-white" />
              <h1 className="font-medium text-white text-sm underline">
                +62 813-3705-7719
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineEmail className="text-white" />
              <h1 className="font-medium text-white text-sm underline">
                aristaadewi8@gmail.com
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <div className="p-3 border hpver:cursor-pointer border-white hover:border-none hover:bg-white group hover:text-black rounded-full transition-all ease-in-out duration-500">
              <a href="https://www.instagram.com/aayuaristaa/" target="_blank">
                <FaInstagram className="text-white group-hover:text-black text-lg" />
              </a>
            </div>
            <div className="p-3 border hpver:cursor-pointer border-white hover:border-none hover:bg-white group hover:text-black rounded-full transition-all ease-in-out duration-500">
              <a href="https://x.com/sukaaniki" target="_blank">
                <BsTwitterX className="text-white group-hover:text-black text-lg" />
              </a>
            </div>
            <div className="p-3 border hpver:cursor-pointer border-white hover:border-none hover:bg-white group hover:text-black rounded-full transition-all ease-in-out duration-500">
              <a href="https://github.com/ayuarista" target="_blank">
                <FiGithub className="text-white group-hover:text-black text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-5">
          <p className="text-white text-sm">© 2024. By Ayu Arista </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
