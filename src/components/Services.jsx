// src/components/Services.jsx
import Title from "./Button/Title";
import  DataService  from "../data/DataService"
import CardService from "./Card";

const Services = () => {
  return (
    <>
      <section className="mt-2.5 mb-2.5 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px]">
        {/* title and description */}
        <div data-aos="fade-up" data-aos-duration="1000" className="">
          <Title
            title="Services"
            description="We provide integrated solutions to transform your development and operational workflows.Armed with experience in managing Linux systemsand automate CI/CD processes, we ensure your applications can be developed, deployed , and run quickly, consistently, and stably"
          />
        </div>
        {/* Card */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {DataService.map((service) => (
            <div
              key={service.id}
              data-aos={service.aos} // animasi sesuai object
              data-aos-duration={service.delay} // delay opsional
            >
              <CardService
                Title={service.title}
                Description={service.description}
                iconSrc={service.iconSrc}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Services;
