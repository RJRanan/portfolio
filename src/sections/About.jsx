import { info } from "../constants";

const About = () => {
  return (
    <div className="flex justify-center  items-center mx-auto">
      <div className=" flex flex-col gap-4  max-w-[494px]   mt-5">
        <div>
          <h1 className="text-3xl font-bold">About Me 👨🏻‍💻</h1>
        </div>
        <div className="flex flex-col gap-4">
          {info.map((link) => (
            <div key={link.id}>
              <h2 className="font-thin text-xl flex justify-end py-3">
                {link.title}
              </h2>
              <p className="text-justify sm:text-[18px] text-[15px] leading-7 font-poppins">
                {link.info}
              </p>
              <ul></ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
