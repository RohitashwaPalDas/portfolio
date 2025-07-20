import React, { useRef} from "react";

const Navbar = () => {
  const sideMenuref = useRef();

  const openMenu = () => {
    sideMenuref.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuref.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <nav className="w-full fixed top-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between bg-white/30 backdrop-blur-lg shadow-md z-50 border-b border-gray-200">
        <a href="#top">
          <div className="font-extrabold text-2xl sm:text-3xl ovo-regular text-gray-800">
            Rohitashwa Pal Das
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700">
          <li>
            <a href="#top" className="hover:text-rose-500 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-rose-500 transition">About Me</a>
          </li>
          <li>
            <a href="#services" className="hover:text-rose-500 transition">Services</a>
          </li>
          <li>
            <a href="#work" className="hover:text-rose-500 transition">My Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-rose-500 transition">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/RohitashwaPalDas"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-gray-400 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <i className="ri-github-fill text-xl"></i> GitHub
          </a>

          <button className="block md:hidden" onClick={openMenu}>
            <i className="ri-menu-3-line text-2xl text-gray-700"></i>
          </button>
        </div>

        <ul
          ref={sideMenuref}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white transition duration-500"
        >
          <div className="absolute top-6 right-6 cursor-pointer" onClick={closeMenu}>
            <i className="ri-close-line text-3xl text-gray-700"></i>
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Me</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>My Work</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
