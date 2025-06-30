import React,{useEffect} from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Skills = (props) => {
  useEffect(() => {
      AOS.init({
        duration: 1500,
      });
    }, []);
  return (
    <div className="">
      <div className="flex items-center" data-aos="fade-up">
      <div className="w-40 lg:w-44 p-7 rounded-md border-2 border-black hover:bg-black transition-all duration-500 ease-in-out text-black hover:text-white">
        <div className="w-full flex items-center flex-col">
        <span  className="text-2xl ">{props.icons}</span>
        <h1 className="font-semibold text-[15px] mt-2">{props.skills}</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
