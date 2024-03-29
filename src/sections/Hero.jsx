import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import emailWhite from "../assets/icons/emailWhite.png";
import githubWhite from "../assets/icons/githubWhite.png";
import linkedinWhite from "../assets/icons/linkedinWhite.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-col items-center justify-center gap-2  md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:gap-30  w-full  md:max-w-2xl mx-auto ease-in">
      {/* Greetings */}
      <div className="flex flex-row mt-5 justify-between  md:gap-4 w-full max-w-[494px]">
        <div>
          {/* Availability Bar */}
          <div className="flex items-start  mb-3 ">
            <div className="bg-[#363636] mobile:px-4 px-3 py-[6px] -z-30 rounded-full flex flex-row items-center gap-3 text-white text-sm font-poppins font-light">
              <div className="h-2 w-2 rounded-full bg-[#23BB32] animate-bounce  "></div>{" "}
              Available
            </div>
          </div>
          <div className="text-left sm:text-3xl   text-[27px] font-bold ease-in duration-300">
            <Greeting />
            <p>I&apos;m Renz 👋🏻</p>
            <p className="text-[#627254] sm:text-xl mobile:text-lg text-base font-normal ease-in duration-300 ">
              {"<"} Front - End Developer {"/>"}
            </p>
          </div>
          {/* socials */}
          <div className="flex gap-2 my-2">
            <button
              className="flex items-center justify-between
             bg-[#363636] border rounded-full sm:px-3 sm:py-3 px-3 py-1 sm:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-500"
            >
              <img
                src={githubWhite}
                className="sm:w-4 sm:h-4 sm:mr-2 w-3 h-3 mr-1"
                alt=""
              />
              GitHub
            </button>
            <button className="flex items-center justify-center bg-[#363636] border rounded-full sm:px-3 sm:py-3  px-2 py-1 sm:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-500">
              <img
                src={linkedinWhite}
                className="sm:w-4 sm:h-4 sm:mr-2 w-3 h-3 mr-1 "
                alt=""
              />
              LinkedIn
            </button>
            <button className="flex items-center justify-center bg-[#363636] border rounded-full sm:px-3 sm:py-3  px-3 py-1 sm:text-xs text-[10px] text-white font-poppins ease-in duration-300 hover:animate-bounce hover:duration-500">
              <img
                src={emailWhite}
                className="sm:w-4 sm:h-4 sm:mr-2 w-3 h-3 mr-1"
                alt=""
              />
              Email
            </button>
          </div>
        </div>
        {/* profile */}
        <div className="order-last flex justify-center items-center w-16 mobile:w-20 sm:w-[120px] h-16 mobile:h-20 sm:h-[120px]  bg-[#627254] rounded-full mt-10 ease-in duration-300">
          <img
            src={profile}
            alt="profile"
            className="justify-end items-end w-16 mobile:w-20 sm:w-28 h-16 mobile:h-20  sm:h-28 rounded-full object-cover ease-in duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center  sm:items-start gap-4 w-full max-w-[494px]">
        {/* introduction */}
        <div className="text-justify sm:text-[17px] text-sm font-poppins">
          <p className="leading-6">
            {'{ " '}Hi, I&apos;m{" "}
            <span className="text-[#627254] font-bold">Renz Jestoni Ranan</span>{" "}
            a Computer Science graduate from the Philippines. Since the time I
            was introduced in Web Development, I&apos;ve been excited to learn
            more about it. I&apos;m really keen on understanding it better and
            getting better at it.
            {' " }'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
