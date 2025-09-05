import Title from "./Button/Title";
// import { CardService } from "./Card";
import digitalMarketing from "../assets/sosmed.png";
import creator from "../assets/creator.png";
import website from "../assets/web.png";
import CardService from "./Card";

const serviceData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Melayani pembuatan landing page, company profile, sistem manajemen, dan aplikasi berbasis web sesuai kebutuhan.",
    iconType: "img",
    iconSrc: website,
    iconAlt: "Website",
    aos: "fade-up",
    delay: 500,
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Ad management, SEO optimization, email marketing, and social media management.",
    iconType: "img",
    iconSrc: digitalMarketing,
    iconAlt: "Digital Marketing",
    aos: "fade-up",
    delay: 1200,
  },

  {
    id: 3,
    title: "Content Creator",
    description:
      "Photography, Videography and copywriting content creation for social media",
    iconType: "img",
    iconSrc: creator,
    iconAlt: "Content Creator",
    aos: "fade-up",
    delay: 1700,
  },
];
const Services = () => {
  return (
    <>
      <section className="mt-2.5 mb-2.5 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        {/* title and description */}
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <Title
            title="Services"
            description="The best digital solution for your business! 💡 From Web Development, UI/UX, Content Creation, to Digital Marketing, I'm here to help you build a professional and engaging online presence."
          />
        </div>
        {/* Card */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {serviceData.map((service) => (
            <div
              key={service.id}
              data-aos={service.aos} // animasi sesuai object
              data-aos-duration={service.delay} // delay opsional
            >
              <CardService
                Title={service.title}
                Description={service.description}
                iconType={service.iconType}
                iconSrc={service.iconSrc}
                iconAlt={service.iconAlt}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Services;
