import ProjectCard from "../components/ProjectCards";
import { projects } from "../constants/";

const PersonalProjects = () => {
  return (
    <div className=" w-full  md:max-w-2xl my-12 mx-auto  flex items-center justify-center">
      <div className="flex flex-col  w-full max-w-[494px]">
        <h1 className="text-3xl font-bold">Projects 💻</h1>
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                imgURL={project.imgURL}
                title={project.title}
                stacks={project.stacks}
                info={project.info}
                websiteLink={project.websiteLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
