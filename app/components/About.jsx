import React from "react";
import Image from "next/image";

const About = () => {


  const info = [
    {
      name: "Languages",
      items: ["HTML", "CSS", "Javascript", "TypeScript", "C", "C++", "Java", "Python"],
      icon: "ri-code-s-slash-line",
    },
    {
      name: "Frameworks",
      items: ["React JS", "Next.js", "Express.js"],
      icon: "ri-rocket-line",
    },
    {
      name: "Databases",
      items: ["MongoDB", "MySQL"],
      icon: "ri-database-2-fill",
    },
    {
      name: "Education",
      items: ["Bachelor of Technology in Computer Science"],
      icon: "ri-book-2-line",
    },
    {
      name: "Projects",
      items: ["Built more than 5 projects"],
      icon: "ri-briefcase-2-line",
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg ovo-regular">Introduction</h4>
      <h2 className="text-center text-5xl ovo-regular">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none border-[3px] border-gray-300 shadow-md overflow-hidden">
          <img
            src="/profileImg.jpeg"
            alt="Profile"
            className="w-full rounded-3xl h-full"
          />
        </div>

        <div className="flex-1">
          <p className="mb-10 max-w-2xl ovo-regular">
            I'm a dedicated full-stack web developer with a strong interest in
            crafting clean, efficient, and responsive web applications. I enjoy
            solving problems and building user-first digital experiences.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {info.map((item, index) => {
              return (
                <li key={index} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[3px_3px_0_#000]">
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    <i className={item.icon}></i>
                    <h3 className="my-4 font-semibold text-gray-700">{item.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 ">{item.items.join(", ")}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
