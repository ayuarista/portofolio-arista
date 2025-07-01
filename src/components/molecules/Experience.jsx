import React, { useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
const Experience = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full md:w-[80%] lg:w-[93%] mx-auto" data-aos="zoom-in-up">
      <div className="flex flex-col rounded-md p-5 w-full border border-gray-400 hover:border-none hover:bg-[#27272A] transition-all duration-500 ease-in-out">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
          <div className="flex items-center gap-5">
            <span className="text-black p-2 rounded text-xl bg-white">
              {props.icons}
            </span>
            <h1 className="text-white text-[15px] md:text-base lg:text-lg font-poppins font-semibold">
              {props.title}
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <div className="bg-zinc-200 rounded-md p-1.5 w-fit flex items-center gap-1">
          <MdDateRange />
            <p className=" text-black text-sm">
              {props.date}
            </p>
          </div>
          <p className="text-gray-400 text-[15px] text-justify mt-2 leading-relaxed">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
