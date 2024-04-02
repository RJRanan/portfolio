import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import { emailWhite, githubWhite, linkedinWhite } from "../assets/icons";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-col items-center justify-center gap-2  md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:gap-30  w-full  md:max-w-2xl my-12 mx-auto ease-in">
      {/* Greetings */}
      <div className="flex flex-row mt-5 justify-between  md:gap-4 w-full max-w-[494px]">
        <div>
          {/* Availability Bar */}
          <div className="flex items-start  mb-3 ">
            <div className="bg-[#363636] mobile:px-4 px-3 py-[6px] -z-30 rounded-full flex flex-row items-center gap-3 text-white text-sm font-poppins font-light ">
              <div className="h-2 w-2 rounded-full bg-[#23BB32] animate-pulse"></div>{" "}
              <span className="">Available</span>
            </div>
          </div>
          <div className="text-left mobile:text-[28px]   text-[22px]  font-bold ease-in duration-300">
            <Greeting />
            <p>I&apos;m Renz 👋🏻</p>
            <p className="text-[#627254] mobile:text-xl mt-4 text-base font-normal ease-in duration-300 ">
              {"<"} Front - End Developer {"/>"}
            </p>
          </div>
          {/* socials */}
          <div className="flex gap-2 my-8">
            <button
              className="flex items-center justify-between
             bg-[#363636] border rounded-full mobile:px-3 mobile:py-3 px-3 py-1 mobile:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-200"
            >
              <a
                href="https://github.com/RJRanan"
                target="_blank"
                className="flex items-center justify-between"
              >
                <img
                  src={githubWhite}
                  className="mobile:w-4 mobile:h-4 mobile:mr-2 w-3 h-3 mr-1"
                  alt=""
                />
                GitHub
              </a>
            </button>
            <button className="flex items-center justify-center bg-[#363636] border rounded-full mobile:px-3 mobile:py-3 px-3 py-1 mobile:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-200">
              <a
                href="https://www.linkedin.com/in/rjranan/"
                target="_blank
                "
                className="flex items-center justify-between"
              >
                {" "}
                <img
                  src={linkedinWhite}
                  className="mobile:w-4 mobile:h-4 mobile:mr-2 w-3 h-3 mr-1 "
                  alt=""
                />
                LinkedIn
              </a>
            </button>
            <button className="flex items-center justify-center bg-[#363636] border rounded-full mobile:px-3 mobile:py-3 px-3 py-1 mobile:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-200">
              <a
                href="mailto:renzjranan@gmail.com"
                target="_blank"
                className="flex items-center justify-between"
              >
                <img
                  src={emailWhite}
                  className="mobile:w-4 mobile:h-4 mobile:mr-2 w-3 h-3 mr-1"
                  alt=""
                />
                Email
              </a>
            </button>
          </div>
        </div>
        {/* profile */}
        <div className="order-last flex justify-center transition hover:scale-125 items-center w-[70px] mobile:w-[75px] sm:w-28 h-[70px] mobile:h-[75px] sm:h-28   rounded-full mt-10 ease-in duration-500 ">
          <img
            src={profile}
            alt="profile"
            className="justify-end items-end w-[70px] mobile:w-[75px] sm:w-28 h-[70px] mobile:h-[75px]  sm:h-28 rounded-full object-cover ease-in duration-500 "
          />
        </div>
      </div>

      <div className="flex flex-col justify-center  sm:items-start gap-4 w-full max-w-[494px]">
        {/* introduction */}
        <div className="tracking-wide mobile:text-base font-poppins text-justify text-[14px]">
          <p className="leading-8">
            Hi, I&apos;m{" "}
            <span className="text-[#627254] font-bold">Renz Jestoni Ranan</span>{" "}
            a Computer Science graduate from the Philippines. Ever since I
            delved into Web Development, I&apos;ve been eager to expand my
            knowledge and skills in this field. My enthusiasm drives me to
            continuously learn and improve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
