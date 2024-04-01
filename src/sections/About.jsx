import { info } from "../constants";
import subtractBlack from "../assets/icons/subtractBlack.png";

const About = () => {
  return (
    <div className="flex justify-center items-center mx-auto my-12   w-full  md:max-w-2xl">
      <div className="flex flex-col    w-full max-w-[494px] mt-5">
        <div>
          <h1 className="text-3xl font-bold">About Me 👨🏻‍💻</h1>
        </div>
        <div className="flex flex-col gap-4 mt-10 ">
          {info.map((link) => (
            <div key={link.id}>
              <h2 className="font-thin text-xl flex flex-col items-end justify-end py-3 ">
                {link.title}
              </h2>

              <div className="flex flex-row justify-between">
                <p className="text-justify sm:text-[18px] text-[15px] font-semibold leading-7 font-poppins">
                  {link.school}
                  {link.company}
                </p>
                <p className="mt-2 sm:text-base text-[12px] flex items-start justify-start ">
                  {link.date}
                </p>
              </div>
              <p className="text-justify sm:text-[15px] text-[12px] text-[#627254] italic leading-7 font-poppins">
                {link.course}
                {link.position}
              </p>

              {link.id === "3" && (
                <div className="grid grid-cols-3 gap-3 mobile:base text-[14px]">
                  {link.interest.map((hobby, index) => (
                    <div key={index} className="gap-2">
                      {" "}
                      <img src={subtractBlack} className="h-5 w-4" alt="" />
                      {hobby}
                    </div>
                  ))}
                </div>
              )}
              {link.id === "2" && (
                <div className="grid grid-cols-3 gap-3 mobile:base text-[14px]">
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
