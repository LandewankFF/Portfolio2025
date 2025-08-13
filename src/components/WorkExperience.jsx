import VerticalTimeline from "./Button/VerticalTimeline";
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
    <div className="">
      <div>
        <Title
          title="WORK EXPERIENCE"
          description="Showcasing my journey in IT through real-world projects. From web development to DevOps, each project reflects my passion for innovation and problem-solving."
        />
      </div>
      <div className="flex">

      
      {/* Content Left */}
      {ExperienceDataleft.map((item, idx) => (
        <JobDesc
          key={`left-${idx}`}
          position={item.position}
          company={item.company}
          date={item.date}
          description={item.description}
        />
      ))}

      {/* Content Mid */}
      <div className="flex items-center justify-center">
        <VerticalTimeline items={["red", "navy"]} gap={28} />
      </div>

      {/* Content Right */}
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
  );
};

export default WorkExperience;
