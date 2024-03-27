import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import { useState, useEffect } from "react";
import Button from "../components/Button";
import { emailWhite, githubWhite, linkedinWhite } from "../assets/icons";

const Hero = () => {
  // const [showFirstImage, setShowFirstImage] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowFirstImage(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <section className="flex justify-center bg-slate-100">
      <div className="md:w-3/6  grid grid-cols-2 grid-rows-3">
        <div className="col-span-2 row-span-1">
          <button>Available</button>
        </div>
        <div className="mx-auto px-12 col-span-3 row-span-2 md:col-span-1 text-4xl ">
          <div className="font-bold font-poppins w-full">
            {" "}
            <Greeting />
            <p className="">I&apos;m Renz 👋🏻</p>
            <p className="font-arvo text-lg mt-3  ">
              {"<"} Front - End Developer {"/>"}
            </p>
            <div>
              <Button iconUrl={githubWhite} />
              <Button iconUrl={linkedinWhite} />
              <Button iconUrl={emailWhite} />
            </div>
          </div>
        </div>

        <div className="mx-auto row-span-2 col-span-2 md:col-span-1">
          <img
            src={profile}
            alt="profile"
            className="w-32 h-32 object-fill   rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
