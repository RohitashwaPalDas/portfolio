import React from 'react';

const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/30 border-t border-gray-300 shadow-inner text-gray-800 py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

        <div className="text-center sm:text-left">
          <div className="font-extrabold text-2xl sm:text-3xl ovo-regular">
            Rohitashwa Pal Das
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} All rights reserved</p>
        </div>


        <div className="flex gap-6 text-3xl">
          <a
            href="https://github.com/RohitashwaPalDas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohitashwa-pal-das-288a1b277/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="mailto:rohit090505pal@gmail.com"
            className="hover:text-rose-500 transition"
          >
            <i className="ri-mail-send-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
