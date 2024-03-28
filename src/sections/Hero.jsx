import profile from "../assets/images/me.jpg";
import Greeting from "../scripts/Greeting";
import emailWhite from "../assets/icons/emailWhite.png";
import githubWhite from "../assets/icons/githubWhite.png";
import linkedinWhite from "../assets/icons/linkedinWhite.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-col items-center justify-center  md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:gap-30 gap-6 w-full  md:max-w-2xl mx-auto">
      {/* Greetings */}
      <div className="flex flex-row  md:items-center justify-between xl:justify-start md:gap-4 w-full max-w-[494px]">
        <div className="text-left md:text-4xl sm:text-3xl text-xl font-bold">
          <Greeting />
          <p>I&apos;m Renz 👋🏻</p>
          <p className="text-[#627254] md:text-2xl text-sm font-normal">
            {"<"} Front - End Developer {"/>"}
          </p>
        </div>
        {/* profile */}
        <div className="order-last  w-28  md:w-32 h-28  md:h-32 rounded-full  ">
          <img
            src={profile}
            alt="profile"
            className="w-28 md:w-32 h-28  md:h-32 rounded-full object-cover"
          />
        </div>
      </div>
      {/* socials */}
      <div className="flex flex-col justify-center  sm:items-start gap-4 w-full max-w-[494px]">
        <div className="flex gap-2">
          <button className="flex items-center justify-center bg-[#363636] border rounded-full sm:px-3 sm:py-3 px-3 py-2 text-xs text-white font-poppins">
            <img src={githubWhite} className="w-4 h-4 mr-2" alt="" />
            GitHub
          </button>
          <button className="flex items-center justify-center bg-[#363636] border rounded-full sm:px-3 sm:py-3  px-3 py-2 text-xs text-white font-poppins">
            <img src={linkedinWhite} className="w-4 h-4 mr-2" alt="" />
            LinkedIn
          </button>
          <button className="flex items-center justify-center bg-[#363636] border rounded-full sm:px-3 sm:py-3  px-3 py-2 text-xs text-white font-poppins">
            <img src={emailWhite} className="w-4 h-4 mr-2" alt="" />
            Email
          </button>
        </div>
        {/* introduction */}
        <div className="text-justify text-base">
          <p>
            {'{ "'} Hi, I&apos;m Renz Jestoni Ranan a Computer Science graduate
            from the Philippines. Since the time I was introduced in Web
            Development, I&apos;ve been excited to learn more about it. I&apos;m
            really keen on understanding it better and getting better at it.{" "}
            {'" }'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
