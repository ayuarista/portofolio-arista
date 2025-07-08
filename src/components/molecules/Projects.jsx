import React, { useEffect } from "react";
import { IoOpenOutline } from "react-icons/io5";
import AOS from "aos";

const projectsData = [
  {
    id: 1,
    title: "Finding Jobs Website",
    description:
      "Finding Jobs is a website designed specifically, to help freelancers and users collaborate with each other. I made this with my friend, due to time constraints we couldn't finish the backend development, only the frontend. Users can easily find top freelancers with the help of filters provided by the website.",
    image: require("../../assets/FindJobs.png"),
    link: "https://find-job-lite.vercel.app/",
  },
  {
    id: 2,
    title: "Echolife Website",
    description:
      "Echolife Website is a dedicated website to provide insight to people about the dangers of waste that is not recycled. I collaborated with my UI/UX friend to create this website. On this echolife website, it is explained as clearly as possible what impacts can be caused if humans are not immediately sensitive to recycling waste.",
    image: require("../../assets/echolife.png"),
    link: "https://echolife.netlify.app/",
  },
  {
    id: 3,
    title: "Herecycle Website",
    description:
      "This website was created, aiming to help the Indonesian people to be more sensitive to the environment and immediately implement the 3R concept. This website provides many features.",
    image: require("../../assets/herecycle.png"),
    link: "https://herecycle.netlify.app/",
  },
  {
    id: 4,
    title: "TKJ Website Profile",
    description:
      "This website is a special profile website about the Computer and Network Engineering department at SMK Negeri 1 Denpasar. This website provides features for searching students, sorting students according to the filter that the user chooses, and the names of teachers who teach in the Computer and Network Engineering Department.",
    image: require("../../assets/tkj.png"),
    link: "https://web-profile-tkj.netlify.app/",
  },
  {
    id: 5,
    title: "Bali Tourism Website",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/baliwoosh.png"),
    link: "https://baliwoosh.netlify.app/",
  },
  {
    id: 6,
    title: "Stylist",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/stylist.png"),
    link: "https://stylist-co.netlify.app/"
  },
  {
    id: 7,
    title: "Enhypen Group",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/enhypen.png"),
    link: "https://enhypen-group.netlify.app/"
  },
  {
    id: 8,
    title: "Guide-line",
    description:
      "Guide Line is a guide website for tourists to find popular places in World. Guide website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/guide-line.png"),
    link: "https://guide-line.netlify.app/"
  },
  {
    id: 9,
    title: "Howard",
    description: "Howard is a website that provides a variety of products, including clothing, accessories, and home decor. The website features a clean and modern design, making it easy for users to navigate and find what they are looking for. Howard offers a wide range of products at competitive prices, with a focus on quality and customer satisfaction.",
    image: require("../../assets/howard.png"),
    link: "https://howard-id.netlify.app/"
  },
  {
    id: 10,
    title: "Course Era",
    description: "Course Era is a website",
    image: require("../../assets/course-era.png"),
    link: "https://course-era.netlify.app/"
  },
  {
    id: 11,
    title: "Designing UI-UX FindJobs at Figma",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/figma-findjobs.png"),
  },
  {
    id: 12,
    title: "Designing UI-UX SNKRS at Figma",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/snkrs.png"),
  },
  {
    id: 13,
    title: "Designing UI-UX Baliwoosh at Figma",
    description:
      "Baliwoosh is a guide website for tourists to find popular places in Bali. Baliwoosh website provides destinations, staycations, and famous restaurants in Bali. Not only that, there are already listed how much the price is, as well as maps of the place that the user chooses.",
    image: require("../../assets/figma-baliwoosh.png"),
  },
];
const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="px-6 md:px-8 lg:px-20" >
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className={`mt-16 flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8`}
          data-aos="fade-up"
        >
          <div className="relative w-full lg:w-[30rem] h-52 bg-cover group overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-x-0 p-[50px] lg:p-[40px] hover:cursor-pointer bottom-[-100%] bg-blend-multiply bg-black bg-opacity-45 backdrop-blur-sm flex flex-col items-center justify-center gap-4 rounded-lg group-hover:bottom-0 transition-all duration-700 ease-in-out">
              <h2 className="text-white text-lg text-center lg:text-xl font-semibold font-poppins">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black text-sm text-center font-semibold rounded hover:bg-gray-300"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:w-1/2">
            <h1 className="text-white font-semibold text-3xl font-poppins">
              {project.title}
            </h1>
            <p className="text-gray-300 text-justify">{project.description}</p>
            <div className=" relative group">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex items-center gap-1"
            >
              Visit Project <IoOpenOutline />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-32 rounded-lg transition-all ease-in-out duration-700"></span>
            </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:w-1/12 hidden md:block">
            <div className="relative flex flex-col items-center">
              <div className="h-full w-1 bg-gray-500"></div>

              <div className="absolute -top-4 lg:top-1/2 transform lg:-translate-y-1/2 w-14 h-14 bg-gray-900 border border-gray-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold lg:text-xl">
                  {String(project.id).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
