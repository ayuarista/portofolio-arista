import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import Experience from "../molecules/Experience";
import { FiFigma } from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdTipsAndUpdates } from "react-icons/md";

const Data = [
  {
    icons: <FaHtml5 />,
    title: "2nd place in the Website Design Competition at Timedoor",
    date: "22-23 June 2024",
    desc: "I participated in a national web design competition held by Timedoor Academy - PT Timedoor Indonesia. I got 2nd place from this Website Design competition.",
  },
  {
    icons: <FiFigma />,
    title: "Participated in UI/UX Bootcamp held by Telkom Digiup",
    date: "01-07 December 2024",
    desc: "I joined the bootcamp organized by Telkom Digiup. By participating in this bootcamp, I increased my UI/UX Design skills. Among 15,000 nationwide applicants, I was selected as one of 1,000 participants.",
  },
  {
    icons: <FiFigma />,
    title: "Finalist UI design competition at Primakara University",
    date: "May 2025",
    desc: "As an aspiring front-end developer, I achieved finalist status in the UI Design category at Primakara University’s SiteFest on 5 June 2025, where I crafted high-fidelity using Figma",
  },
  {
    icons: <FaReact />,
    title: "Favorite Web Design competition at PT. Indo Apps Solusindo",
    date: "February - May 2025",
    desc: "I participated in a national UI Design competition held by Timedoor Academy - PT Timedoor Indonesia. I got 2nd place from this Website Design competition.",
  },
  {
    icons: <IoSchoolOutline />,
    title: "Students of Software Engineering major at SMK Negeri 1 Denpasar school",
    date: "Study year 2023-2026",
    desc: "As a dedicated eleventh-grade student in Software Engineering at Vocational High School, I am passionate about web development and actively expanding my technical skills in front-end technologies.",
  },
  {
    icons: <IoSchoolOutline />,
    title: "Participated in more 5+ Web Design Competitions",
    date: "June 2024 - May 2025",
    desc: "As an aspiring front-end developer, I have actively participated in multiple web design competitions, leveraging these opportunities to enhance my technical skills and design proficiency.",
  },
];
const MyExperience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
      {Data.map((item, index) => (
        <Experience
          key={index}
          icons={item.icons}
          title={item.title}
          date={item.date}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default MyExperience;
