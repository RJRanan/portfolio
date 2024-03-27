import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import { useState, useEffect } from "react";
import emailWhite from "../assets/icons/emailWhite.png";
import githubWhite from "../assets/icons/githubWhite.png";
import linkedinWhite from "../assets/icons/linkedinWhite.png";

const Hero = () => {
  // const [showFirstImage, setShowFirstImage] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowFirstImage(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-8 md:gap-30 lg:gap-40 gap-6 w-full ">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="text-center  md:text-left md:text-4xl sm:text-3xl text-2xl">
          <Greeting />
          <p>I&apos;m Renz 👋🏻</p>
          <p className="text-[#627254] md:text-2xl text-lg">
            {"<"} Front - End Developer {"/>"}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center justify-center bg-[#363636] border rounded-full px-3 py-2 text-xs text-white font-poppins">
            <img src={githubWhite} className="w-4 h-4 mr-2" alt="" />
            GitHub
          </button>
          <button className="flex items-center justify-center bg-[#363636] border rounded-full px-3 py-2 text-xs text-white font-poppins">
            <img src={linkedinWhite} className="w-4 h-4 mr-2" alt="" />
            LinkedIn
          </button>
          <button className="flex items-center justify-center bg-[#363636] border rounded-full px-3 py-2 text-xs text-white font-poppins">
            <img src={emailWhite} className="w-4 h-4 mr-2" alt="" />
            Email
          </button>
        </div>
      </div>
      <div className="order-first md:order-last md:ml-16">
        <img
          src={profile}
          alt="profile"
          className="w-32 h-32 md:w-28 md:h-28 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
