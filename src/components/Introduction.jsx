import photo from "../assets/Photo.png";
const Introduction = () => {
  return (
    <>
      <section>
        {/* container */}
        <div className="px-[20px] md:px-[50px] lg:px-[122px] flex justify-between items-center">
          {/* Content Left */}
          <div className="w-1/2 items-center justify-center">
            <div className="">
              {/* name */}
              <div className="">
                <h3 className="font-bold text-[20px]">Hello, I’m </h3>
                <h1 className="font-bold text-[44px]">
                  Landewank Fahreza Firdaus
                </h1>
              </div>
              {/* description */}
              <div className="">
                <p className="text-[18px] text-justify">
                  I am graduate of Telkom University majoring in Informatics
                  Engineering, with expertise in the fields of DevOps Engineer,
                  Computer Networking, IT Infrastructure and System Analysist. I
                  want to have a career in IT, and I am committed to continuing
                  to grow and deliver innovative solutions.
                </p>
              </div>
              {/* Button */}
              <div className="">
                
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="w-1/2 flex items-center justify-end">
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
