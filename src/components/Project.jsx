import Title from "./Button/Title";
import CardProject from "./cardProject";
import { Circle, Line } from "../components/Button/Button";

const cardData = [
  {
    imgSrc: "/project1.png",
    title: "Educational Platform",
    caption: "Web Design / Usability Testing",
  },
  {
    imgSrc: "/project2.png",
    title: "Hospital Website",
    caption: "Front-End / React",
  },
  {
    imgSrc: "/project3.png",
    title: "Digital Marketing",
    caption: "Landing Page / SEO",
  },
  {
    imgSrc: "/project4.png",
    title: "Portfolio Website",
    caption: "UI/UX & Responsive Design",
  },
  {
    imgSrc: "/project5.png",
    title: "Company Profile",
    caption: "Static Site / Tailwind",
  },
  {
    imgSrc: "/project6.png",
    title: "E-Commerce Dashboard",
    caption: "Next.js / API Integration",
  },
  {
    imgSrc: "/project6.png",
    title: "E-Commerce Dashboard",
    caption: "Next.js / API Integration",
  },
  {
    imgSrc: "/project6.png",
    title: "E-Commerce Dashboard",
    caption: "Next.js / API Integration",
  },
];

const Project = () => {
  return (
    <section className="py-10">
      <div data-aos="zoom-in" className="mb-8 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        <Title
          title="Project"
          description="Showcasing my journey in IT through real-world projects. From web development to DevOps, each project reflects my passion for innovation and problem-solving."
        />
      </div>

      {/* Flex Card Container */}
      <div className="px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-wrap justify-center gap-x-6 gap-y-8">
          {cardData.map((card, index) => (
            <CardProject
              key={index} 
              imgSrc={card.imgSrc}
              title={card.title}
              caption={card.caption}
            />
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <Line
            text="View All Project"
            textColorHover="group-hover:text-black"
            textColor="text-primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
