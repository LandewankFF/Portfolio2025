import photo from "../assets/Photo.png";
import { Circle, Line } from "../components/Button/Button";
const Introduction = () => {
  return (
    <>
      <section>
        {/* container */}
        <div className="w-full px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px] flex flex-col lg:flex-row lg:justify-between items-center mt-5 mb-10">
          {/* Content Left */}
          <div data-aos="fade-right" data-aos-duration="1500" className="w-full sm:w-3/4 md:w-full lg:w-1/2 items-center justify-center flex">
            <div className="flex-col gap-2.5 flex">
              {/* name */}
              <div className="">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  Hello, I’m{" "}
                </h3>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
                  Landewank Fahreza Firdaus
                </h1>
              </div>
              {/* description */}
              <div className="mb-2.5">
                <p className=" text-justify">
                  I am graduate of Telkom University majoring in Informatics
                  Engineering, with expertise in the fields of DevOps Engineer,
                  Computer Networking, IT Infrastructure and System Analysist. I
                  want to have a career in IT, and I am committed to continuing
                  to grow and deliver innovative solutions. I always uphold the
                  values of discipline, work order, collaboration ability,
                  one-one cycle work, and a sense of responsibility in every
                  task I carry out.
                </p>
              </div>
              {/* Button */}
              <div className="inline-flex gap-5 sm:gap-8 md:gap-10 flex-wrap">
                <div className="">
                  <Circle
                    text="Download CV"
                    background="bg-primary"
                    icon="cloud-download"
                    file="/Documents/CV-DevOps-Infrastructure.pdf"
                  />
                </div>
                <div className="flex">
                  <Line
                    text="About Me"
                    textColorHover="group-hover:text-black"
                    textColor="text-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div data-aos="fade-left" data-aos-duration="1500" className="w-full sm:w-3/4 md:w-full lg:w-1/2 flex items-center justify-center">
            <div className="">
              <img src={photo} alt="photo landing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
