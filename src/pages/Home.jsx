import React, {useEffect} from "react";
import profile from "../assets/arista.jpg";
import me from "../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../components/molecules/AboutMe";
import Contact from "../components/molecules/Contact";
import Experience from "../components/molecules/Experience";
import Projects from "../components/molecules/Projects";
import ScrollingText from "../components/molecules/ScrollingText";
import Skills from "../components/molecules/Skills";
import SocialMedia from "../components/molecules/SocialMedia";
import MyExperience from "../components/organisms/MyExperience";
import MySkills from "../components/organisms/MySkills";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
    });
  }, []);
  return (
    <div className="pt-24">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mx-4 lg:mx-16 gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight" data-aos="fade-down">
            Hello I'am <span className="font-bold">Ayu Arista</span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-1" data-aos="fade-down">
            Frontend{" "}
            <span className="font-poppins text-transparent custom-outline">
              Developer
            </span>
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mt-1"data-aos="fade-up">
            Based In <span className="font-bold">Indonesia.</span>
          </h1>
          <p className="text-gray-400 text-[13px] md:text-sm max-w-xl mt-4 text-center lg:text-justify" data-aos="fade-up">
            Hi! as a dedicated twelve-grade student in Software Engineering at
            Vocational High School, I am passionate about web development and
            actively expanding my technical skills in front-end technologies.
          </p>
          <SocialMedia />
        </div>
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-52 md:w-64 lg:w-80 rounded-md"
            data-aos="zoom-in"
          />
        </div>
      </div>

      <div id="skills" className="scroll-mt-32">
        <div className="mt-12">
          <h1 className="text-3xl text-center" data-aos="fade-up">
            My <span className="font-bold">Skills</span>
          </h1>
          <MySkills />
          <div className="mt-5">
            <ScrollingText />
          </div>
        </div>
      </div>
      <div id="experience" className="scroll-mt-20">
        <div className="bg-black pb-14">
          <div className="pt-10">
            <h1 className="text-3xl text-center text-white" data-aos="fade-down">
              My <span className="font-bold">Experience</span>
            </h1>
          </div>
          <div className=" mt-14 mx-12">
            <MyExperience />
          </div>
        </div>
      </div>
      <div id="about" className="scroll-mt-20">
        <div className="bg-white mt-12 pb-14 px-6">
          <AboutMe />
        </div>
      </div>
      <div id="projects" className="scroll-mt-20">
        <div className="bg-black mt-8 pb-14">
          <div className="pt-10">
            <h1 className="text-3xl text-center text-white" data-aos="zoom-in">
              My <span className="font-bold">Projects</span>
            </h1>
          </div>
          <div className="mt-10 mx-6 lg:mx-12">
            <Projects />
          </div>
        </div>
      </div>
      <div id="contact" className="scroll-mt-24">
        <div className="bg-white mt-10 pb-14 px-6">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
