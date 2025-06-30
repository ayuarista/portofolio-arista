import React from "react";
import Skills from "../molecules/Skills";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { RiFlutterFill } from "react-icons/ri";
import { FaPython, FaLaravel } from "react-icons/fa";

const Data = [
  {
    icons: <FaHtml5 />,
    skills: "HTML",
  },
  {
    icons: <IoLogoCss3 />,
    skills: "CSS",
  },
  {
    icons: <IoLogoJavascript />,
    skills: "JavaScript",
  },
  {
    icons: <RiTailwindCssFill />,
    skills: "Tailwind CSS",
  },
  {
    icons: <FaReact />,
    skills: "React JS",
  },
  {
    icons: <FaFigma />,
    skills: "Figma",
  },
  {
    icons: <GrMysql />,
    skills: "SQL Query",
  },
  {
    icons: <RiFlutterFill />,
    skills: "FlutterFlow",
  },
  {
    icons: <FaPython />,
    skills: "Python",
  },
  {
    icons: <FaLaravel />,
    skills: "Laravel",
  },
];
const MySkills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center gap-12 lg:gap-8 mt-10 mx-7 place-content-center lg:mx-10">
      {Data.map((item, index) => (
        <Skills key={index} icons={item.icons} skills={item.skills} />
      ))}
    </div>
  );
};

export default MySkills;
