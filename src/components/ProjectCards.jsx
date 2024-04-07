const ProjectCard = ({
  title,
  stacks,
  info,
  websiteLink,
  githubLink,
  imgURL,
}) => {
  return (
    <div className="w-full  md:max-w-2xl my-12 mx-auto flex   items-center justify-center ">
      <div className="border shadow-md   grid md:grid-cols-2 grid-cols-1  hover:scale-105 hover:duration-500 duration-500  py-4 px-2  justify-center rounded-3xl  w-full max-w-[494px] ">
        <div className="flex items-center justify-center px-2  ">
          <img
            src={imgURL}
            className=" md:h-[200px]    w-full object-fill rounded-lg hover:scale-110 transition-all duration-300  "
            alt=""
          />
        </div>
        <div className="py-2 gap-4 flex flex-col px-3">
          <div className="text-xl font-bold">{title}</div>
          <div className="flex flex-row flex-wrap ">
            {stacks.map((stack) => (
              <div
                key={stack}
                className="mr-2 mb-2 px-3 lg:py-[2px] py-1 border md:text-sm text-xs hover:animate-wiggle   font-poppins border-opacity-50 rounded-2xl border-black "
              >
                {stack}
              </div>
            ))}
          </div>
          <div className=" tracking-wide mobile:text-base font-poppins text-wrap text-justify text-[14px]	">
            {info}
          </div>
          <div className="flex gap-4 ">
            <button className="bg-[#363636] mobile:px-3 px-4 py-[6px] rounded-full flex flex-row items-center gap-3 text-white text-sm font-poppins font-light hover:scale-105 hover:duration-500">
              <a
                href={websiteLink}
                className="text-white flex  items-center gap-2 "
              >
                <div className="h-2 w-2 rounded-full md:z-0 z-0 bg-[#23BB32] animate-pulse"></div>{" "}
                Live Demo
              </a>
            </button>
            <button className="bg-[#363636] mobile:px-4 px-6 py-[6px] rounded-full flex flex-row items-center gap-3 text-white text-sm font-poppins font-light hover:scale-105 hover:duration-500">
              <a href={githubLink} className="text-white">
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
