import Title from "./Button/Title";
import { CardService } from "./Card";

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Providing landing page creation, company profile websites, online stores, management systems, and web-based applications as needed."
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Ad management, SEO optimization, email marketing, and social media management."
  },
  {
    id: 3,
    title: "Content Creator",
    description:
      "Photography, Videography and copywriting content creation for social media"
  }
  
];
const Services = () => {
  return (
    <>
      <section className="mt-2.5 mb-2.5 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        {/* title and description */}
        <div className="">
          <Title
            title="Services"
            description="The best digital solution for your business! 💡 From Web Development, UI/UX, Content Creation, to Digital Marketing, I'm here to help you build a professional and engaging online presence."
          />
        </div>
        {/* Card */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {serviceData.map((service) => (
            <CardService
              key={service.id}
              Title={service.title}
              Description={service.description}
            />
          ))}
        </div>
      </section>
    </> 
  );
};
export default Services;
