import { navLinks } from "../constants";
import Buttons from "./Button";
import burgerBlack from "../assets/icons/burgerBlack.png";
import closeBlack from "../assets/icons/closeBlack.png";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0  left-0  flex justify-center items-baseline  md:bg-opacity-50 bg-white backdrop-blur-md shadow-md">
      <div className="md:flex max-w-[800px]	w-full items-center flex justify-between py-4 md:px-10 px-12 gap-3">
        {/* logo */}
        <div className="flex items-center">
          <a href="/" className="">
            <h1
              className={`font-bold md:text-3xl   text-2xl mr-4 font-arvo  ${
                open
                  ? "absolute top-20 left-0 w-full md:w-auto md:static md:z-auto z-50 shadow-md"
                  : "hidden md:flex"
              } transition-all duration-500 ease-in `}
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
                ? "absolute top-[73px] left-0 bg-white w-full sm:pl-0  pl-5 md:w-auto md:static md:z-auto z-50 shadow-md"
                : "hidden md:flex "
            } transition-all duration-500 ease-in `}
          >
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="md:text-base font-poppins font-bold md:my-0 my-7 flex "
              >
                <a
                  key={link.id}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  className="hover:text-[#627254] hover:italic duration-300 flex"
                >
                  {"{"}
                  {link.label}
                  {"}  "}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <Buttons
            label={"☀️"}
            bgColor={"bg-transparent"}
            border={"border-0"}
            paddingX={"px-2"}
          />
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
          <Buttons
            label={"let's connect"}
            labelColor={"text-white"}
            bgColor={"bg-black"}
            border={"border-black"}
            paddingX={"px-2"}
            paddingY={"py-2"}
            animation={"hover:ease-out duration:-200"}
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
