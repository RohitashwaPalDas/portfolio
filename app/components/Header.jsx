import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-=center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-20 sm:mt-0">
      <div>
        <img
          src="/profileImg.jpeg"
          alt="Profile"
          className="rounded-full w-56 h-56 border-[3px] border-gray-300 shadow-md"
        />
      </div>

      <h3 className="flex items-end gap-2 tex-2xl md:text-3xl mb-3 ovo-regular font-bold">
        Hi! I am Rohitashwa Pal Das 👋🏻
      </h3>

      <h1 className="text-3xl sm:text-6xl lg:text-[66px] ovo-regular">
        Full Stack Web Developer
      </h1>
      <p className="max-w-2xl font-semibold text-lg mx-auto ovo-regular">
        I am a passionate web developer focused on creating modern, responsive,
        and user-friendly websites and applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-black text-white"
        >
          <span className="font-semibold text-base">Contact Me</span>{" "}
          <i className="ri-arrow-right-up-line text-2xl"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1pg3g-I3SXuprLJbYgmTbKj9KqyI98Qzj/view?usp=sharing"
          download
          target="_blank"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          <span className="font-semibold text-lg">My Resume</span>
          <i className="ri-file-download-line text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
