import React,{useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"
const Experience = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="w-full md:w-[80%] lg:w-[95%] mx-auto" data-aos="zoom-in-up">
      <div className="flex flex-col rounded-md p-5 w-full border border-gray-400 hover:border-none hover:bg-[#27272A] transition-all duration-500 cursor-pointer ease-in-out">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2">
          <div className="flex items-center gap-5">
            <span className="text-black p-2 rounded text-xl bg-white">
              {props.icons}
            </span>
            <h1 className="text-white text-[15px] md:text-base lg:text-lg font-poppins font-semibold">
              {props.title}
            </h1>
          </div>
          <p className="text-gray-300 text-sm mt-4 lg:mt-2">{props.date}</p>
        </div>
        <p className="text-gray-400 text-[15px] mt-5 text-justify leading-relaxed">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Experience;
