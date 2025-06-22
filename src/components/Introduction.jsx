import photo from "../assets/Photo.png";
import { Circle, Line } from "../components/Button/Button";
const Introduction = () => {
  return (
    <>
      <section>
        {/* container */}
        <div className="w-full px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px] flex flex-col lg:flex-row lg:justify-between items-center mt-10 mb-10">
          {/* Content Left */}
          <div className="w-1/2 md:w-full items-center justify-center flex ">
            <div className="flex-col gap-2.5 flex">
              {/* name */}
              <div className="">
                <h3 className="font-bold text-[20px]">Hello, I’m </h3>
                <h1 className="font-bold text-[44px]">
                  Landewank Fahreza Firdaus
                </h1>
              </div>
              {/* description */}
              <div className="mb-2.5">
                <p className="text-[18px] text-justify">
                  I am graduate of Telkom University majoring in Informatics
                  Engineering, with expertise in the fields of DevOps
                  Engineer,lffdevops/blog-kubernetes Computer Networking, IT
                  Infrastructure and System Analysist. I want to have a career
                  in IT, and I am committed to continuing to grow and deliver
                  innovative solutions.
                </p>
              </div>
              {/* Button */}
              <div className="inline-flex gap-10 ">
                <div className="">
                <Circle
                  text="Download CV"
                  background="bg-primary"
                  icon="cloud-download"
                />
                </div>
                <div className="flex">
                  <Line
                    text="View Portofolio"
                    textColorHover="group-hover:text-black"
                    textColor="text-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="w-1/2 md:w-full flex items-center justify-center">
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
