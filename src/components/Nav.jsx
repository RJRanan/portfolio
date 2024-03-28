import { navLinks } from "../constants";
import Buttons from "./Button";
import burgerBlack from "../assets/icons/burgerBlack.png";
import closeBlack from "../assets/icons/closeBlack.png";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 flex justify-center bg-opacity-50 backdrop-blur-md shadow-md">
      <div className="md:flex md:w-max	w-full items-center gap-2 flex justify-between py-4 md:px-10 px-12">
        {/* logo */}
        <div className="flex items-center">
          <a href="/" className="">
            <h1
              className={`font-bold md:text-2xl   text-2xl mr-4 font-arvo  ${
                open
                  ? "absolute top-20 left-0 w-full md:w-auto md:static md:z-auto z-50 shadow-md"
                  : "hidden md:flex"
              } transition-all duration-500 ease-in pl-9`}
            >
              {"<"}RJRR {"/ >"}
            </h1>
          </a>
        </div>

        {/* links */}
        <div className="item-center flex">
          <ul
            className={`md:flex gap-4 md:items-center md:pb-0 pb-2 bg-white ${
              open
                ? "absolute top-20 left-0 w-full md:w-auto md:static md:z-auto z-50 shadow-md"
                : "hidden md:flex"
            } transition-all duration-500 ease-in pl-9`}
          >
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="md:text-base font-poppins font-bold md:my-0 my-7"
              >
                <a
                  key={link.id}
                  href={link.href}
                  rel={link.rel}
                  target={link.target}
                  className="hover:text-indigo-300 duration-500"
                >
                  {"{ "}
                  {link.label}
                  {" }  "}
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
        <div className="hidden md:flex gap-2 items-center">
          <Buttons
            label={"let's connect"}
            labelColor={"text-white"}
            bgColor={"bg-black"}
            border={"border-black"}
            animation={"animate-pulse"}
            paddingX={"px-2"}
            paddingY={"py-2"}
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
