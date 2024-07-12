import { info } from "../constants";
import { subtractBlack } from "../assets/icons";

const About = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-12   w-full  md:max-w-2xl">
      <div className="flex flex-col    w-full max-w-[494px] mt-5">
        <div>
          <h1 className="text-3xl font-bold ">About Me 👨🏻‍💻</h1>
        </div>
        <div className="flex flex-col gap-4 mt-10 ">
          {info.map((link) => (
            <div key={link.id}>
              <h2 className="font-thin text-xl flex flex-col items-end justify-end py-3 ">
                {link.title}
              </h2>

              <div className="  ">
                <div className="flex flex-row justify-between item-center">
                  <p className="text-justify sm:text-[18px] text-[15px] tracking-tight font-semibold leading-7 font-poppins ease-in duration-300">
                    {" "}
                    {link.school}
                    {link.company}
                  </p>
                  <div className="flex items-end justify-end">
                    <p className="mt-2 sm:text-base text-[14px] tracking-tighter flex items-start justify-start  ease-in duration-300">
                      {link.date}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-justify sm:text-[15px] text-[14px] text-[#627254] italic leading-7 font-poppins">
                {link.course}
                {link.position}
              </p>

              {link.id === "0" && (
                <div className="grid grid-cols-1 grid-rows-1 mt-8 tracking-wide mobile:text-base font-poppins text-justify text-[14px] ease-in duration-300">
                  {link.bullet.map((bullet, index) => (
                    <div key={index} className="leading-8 ">
                      <img src={subtractBlack} className="h-5 w-4" alt="" />
                      {bullet}
                    </div>
                  ))}
                </div>
              )}

              {link.id === "1" && (
                <div className="grid grid-cols-1 grid-rows-1 mt-8 tracking-wide mobile:text-base font-poppins text-justify text-[14px] ease-in duration-300">
                  {link.content.map((content, index) => (
                    <div key={index} className="leading-8 ">
                      <img src={subtractBlack} className="h-5 w-4" alt="" />
                      {content}
                    </div>
                  ))}
                </div>
              )}

              {link.id === "3" && (
                <div className="grid grid-cols-3 gap-3 mobile:text-base text-[14px] ease-in duration-300">
                  {link.interest.map((interest, index) => (
                    <div key={index} className="gap-2">
                      {" "}
                      <img src={subtractBlack} className="h-5 w-4" alt="" />
                      {interest}
                    </div>
                  ))}
                </div>
              )}
              {link.id === "2" && (
                <div className="grid grid-cols-3 gap-3 mobile:text-base text-wrap text-[14px] ease-in duration-300">
                  {link.skills.map((skill, index) => (
                    <div key={index} className=" gap-2">
                      {" "}
                      <img src={subtractBlack} className="h-5 w-4" alt="" />
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
