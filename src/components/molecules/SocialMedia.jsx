import React, {useEffect} from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { PiStarFour } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import AOS from "aos"
import "aos/dist/aos.css"
const SocialMedia = () => {
  useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);
  return (
    <div className="mt-5 lg:mt-7" data-aos="fade-up">
      <h1 className="text-lg font-normal">Find Me On Social Media!</h1>
      <div className="flex gap-5 items-center justify-center lg:justify-start mt-3">
        <div className="p-2 bg-black rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
          <a href="https://www.instagram.com/aayuaristaa/" target="_blank">
            <FaInstagram className="text-white text-xl" />
          </a>
        </div>

        <div className="p-2 bg-black rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
          <a href="https://github.com/ayuarista" target="_blank">
            <FaGithub className="text-white text-xl" />
          </a>
        </div>
        <div className="p-2 bg-black rounded-md hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
          <a href="https://x.com/sukaaniki" target="_blank">
            <BsTwitterX className="text-white text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
