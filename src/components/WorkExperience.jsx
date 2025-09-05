import VerticalTimeline from "./VerticalTimeline";
import Title from "./Button/Title";
import JobDesc from "./Button/JobDesc";

const ExperienceDataleft = [
  {
    position: "DevOps Engineer",
    company: "PT. Bringin Inti Teknologi",
    date: "May 2025 - Present",
    description:
      "Manage and maintain GitLab CI/CD Server, deploy applications to production including system updates and fixes, handle Linux-based server configuration, build and run containers with Docker, and manage and maintain Kubernetes clusters.",
  },
];

const ExperienceDataright = [
  {
    position: "Front-end Website",
    company: "Maritim Muda Nusantra",
    date: "16 Feb 2024 - 30 Jun 2024",
    description:
      "I completed my internship as a Web Developer and Administrator, I was responsible for developing and managing websites using JavaScript, with the React.js framework.",
  },
];

const WorkExperience = () => {
  return (
    <section className="container mx-auto">
      <div data-aos="flip-up" data-aos-duration="2000">
        <Title
          title="WORK EXPERIENCE"
          description="I am a DevOps Engineer with experience in managing CI/CD pipelines, deploying production applications, configuring Linux servers, and working with Docker and Kubernetes for scalable infrastructure. I also have front-end development experience using JavaScript and React.js during my internship, building responsive and user-friendly web interfaces."
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-20 md:gap-5 gap-2 justify-center items-center my-10">
        {/* Content Left */}
        <div data-aos-duration="1000" data-aos="fade-right" className="w-full sm:max-w-md md:max-w-full lg:w-[450px]">
          {ExperienceDataleft.map((item, idx) => (
            <JobDesc
              key={`left-${idx}`}
              position={item.position}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>

        {/* Content Mid (only desktop) */}
        <div data-aos="flip-right" data-aos-duration="1000" className="hidden lg:flex items-center justify-center">
          <VerticalTimeline items={["red", "white"]} gap={28} />
        </div>

        {/* Content Right */}
        <div data-aos-duration="1000" data-aos="fade-left" className="w-full sm:max-w-md md:max-w-full lg:w-[450px]">
          {ExperienceDataright.map((item, idx) => (
            <JobDesc
              key={`right-${idx}`}
              position={item.position}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
