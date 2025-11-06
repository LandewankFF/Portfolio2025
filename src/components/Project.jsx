import Title from "./Button/Title";
import CardProject from "./cardProject";
import { Line } from "../components/Button/Button";
import allProjects from "../data/projects";

const Project = () => {
  const latestProjects = [...allProjects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };
  return (
    <section className="py-10">
      <div data-aos="zoom-in" className="mb-8 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        <Title
          title="Project"
          description="Showcasing my journey in IT through real-world projects. From web development to DevOps, each project reflects my passion for innovation and problem-solving."
        />
      </div>

      {/* Cards Container */}
      <div className="px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-wrap justify-center gap-x-6 gap-y-8"
        >
          {latestProjects.map((project, index) => (
            <CardProject
              key={index}
              imgSrc={project.image} 
              title={truncateText(project.title,25)}
              caption={project.techStack.join(", ")} 
            />
          ))}
        </div>

        <div className="flex justify-center mt-2">
          <Line
            text="View Apll Project"
            textColorHover="group-hover:text-black"
            textColor="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
