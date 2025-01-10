import React,{useEffect} from "react";
import me from "../../assets/s.jpg";
import { PiShootingStar } from "react-icons/pi";
import bg from "../../assets/bg.jpg";
import AOS from "aos"
import "aos/dist/aos.css"
const AboutMe = () => {
  useEffect(() =>{
    AOS.init({
      duration: 1500,
    })
  })
  return (
    <div
      className="w-full md:min-h-[87vh] min-h-[15vh] lg:min-h-[79vh] xl:min-h-[89vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="pt-10 max-w-6x l mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <div className="w-96 h-96 rounded-lg bg-center p-3 overflow-hidden border border-black"  data-aos="fade-down">
            <img
              src={me}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <div className="text-3xl text-black flex items-center gap-3" data-aos="zoom-in">
              About <span className="font-bold text-primary">Me</span>
              <span>
                <PiShootingStar />
              </span>
            </div>
            <p className="border-t-2 rounded-lg border-black w-12 mt-2"data-aos="zoom-in"></p>
            <div  data-aos="fade-up">
            <p className="text-[15px] text-gray-500 max-w-xl mt-4 leading-relaxed text-justify">
              As a dedicated eleventh-grade student in Software Engineering at
              Vocational High School, I am passionate about web development and
              actively expanding my technical skills in front-end technologies.
              Currently building a strong foundation in web development, I have
              gained practical experience with core technologies including HTML,
              CSS, JS, React.js, and Tailwind CSS.
            </p>
            <p className="text-[15px] text-gray-500 max-w-xl mt-4 leading-relaxed text-justify">
              My journey in web development is fueled by a passion for
              technology and a desire to create intuitive digital experiences.
              As a junior developer, I am actively learning and exploring
              front-end technologies, with a strong motivation to transform
              creative ideas into functional, user-friendly web interfaces.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
