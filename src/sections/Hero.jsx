import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import { useState, useEffect } from "react";
import Button from "../components/Button";

const Hero = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirstImage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-container  grid max-xl:grid-cols-1 grid-cols-2 gap-16 max-xl:gap-14 justify-center items-center">
      <div className="flex flex-col my-auto mx-auto ">
        <h1 className="mb-4 text-7xl font-bold">
          <Greeting />
        </h1>

        <h1 className="text-5xl font-poppins leading-relaxed">
          I&apos;m Renz Jestoni Ranan
          <span className="text-2xl text-lime-900 block">
            Front-End Developer
          </span>
        </h1>

        <p className="text-2xl"></p>
      </div>
      <div className="flex justify-center items-center h-full">
        {" "}
        {showFirstImage ? (
          <img
            src="https://ih1.redbubble.net/image.4103026770.3452/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
            alt="profile"
            className="w-3/6 object-contain rounded-lg"
          />
        ) : (
          <img
            src={profile}
            alt="profile"
            className="w-3/6 object-contain rounded-lg"
          />
        )}
      </div>

      <Button
        label="Click me"
        labelColor="blue-500"
        bgColor="bg-gray-800"
        onClick={() => console.log("Button clicked")}
      />
    </section>
  );
};

export default Hero;
