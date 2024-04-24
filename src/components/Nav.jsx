import { navLinks } from "../constants";
import { burgerBlack, closeBlack } from "../assets/icons";

import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0  left-0  flex justify-center items-baseline  md:bg-opacity-50 z-30 bg-white backdrop-blur-md shadow-md">
      <div className="md:flex max-w-[800px]	w-full items-center flex justify-between z-50 py-4 md:px-10 px-7 gap-3">
        {/* logo */}
        <div className="flex items-center">
          <a href="/" className="">
            <h1
              className={`font-bold md:text-3xl hover:animate-wiggle   text-2xl pl-0  font-arvo `}
            >
              {"<"}RJRR {"/ >"}
            </h1>
          </a>
        </div>

        {/* links */}
        <div className="flex item-center justify-center  ">
          <ul
            className={`md:flex gap-4 md:items-center md:justify-center md:pb-0  pb-2  ${
              open
                ? "absolute top-[55px] md:h-0 h-[800px] left-0 bg-white w-full  tablet:pl-0 text-2xl pt-8 pl-8 md:w-auto md:static md:z-auto z-[100] md:duration-500 duration-700 ease-in shadow-md"
                : "hidden md:flex "
            } transition-all duration-500 ease-in `}
          >
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="md:text-base font-poppins tracking-wider md:my-0 my-7 flex "
              >
                <a
                  key={link.id}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  className="hover:text-[#627254] hover:scale-75   duration-300 flex"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          {/* <div className="relative tooltip md:pr-0 pr-2">
            <img
              src={cat}
              alt="dark mode"
              width={25}
              height={25}
              className="hover:cursor-not-allowed hover:animate-wiggle"
            />
            <span className="invisible opacity-0 transition-opacity bg-[#627254] text-white text-wrap font-poppins text-sm font-base  tracking-tighter text-center py-2 px-3.5 md:w-[260px] w-[150px] rounded-lg tooltip-text absolute z-10 md:-right-32 -right-12 top-11 -ml-14">
              Dark mode under development 👨‍💻
            </span>
          </div> */}
          {/* Burger menu */}
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden flex items-center gap-2"
          >
            <img
              className="h-6 w-6"
              alt="menu"
              src={open ? closeBlack : burgerBlack}
            />
          </div>
        </div>

        {/* Connect button */}
        <div className="hidden md:flex gap-2 items-center cursor-pointer ">
          <button className="bg-black text-white px-2 py-2 flex items-center text-base font-poppins border border-1 rounded-lg transition hover:scale-105  hover:duration-500 ">
            <a href="mailto:renzjranan@gmail.com">Let&apos;s Connect!</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
