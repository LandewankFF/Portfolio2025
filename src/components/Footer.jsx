
const DataFooter = [
  {
    title: "General",
    links: ["Contact", "About", "Services", "Blog"]
  },
  {
    title: "Hobbies",
    links: ["Badminton", "Karate", "Digital Content", "Singging"]
  },
  {
    title: "Core",
    links: ["DevOps", "System Administrator", "IT Infrastructure", "Website Development","IT System Analyst"]
  }
];

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="mb-8 px-5 md:px-12 lg:px-20 xl:px-32 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        {/* Bagian Nama */}
        <div className="text-center sm:text-left">
          <h1 className="text-[25px] font-extrabold ">Landewank Fahreza Firdaus</h1>
          <p className="text-[16px] text-gray-700">West Java, Indonesia</p>
        </div>

        {/* Bagian Menu Footer */}
        {DataFooter.map((section, idx) => (
          <div key={idx} className="mb-">
            <h1 className="font-extrabold mb-2 text-lg md:text-xl">{section.title}</h1>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="text-sm md:text-base text-gray-700 hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </footer>
  );
};

export default Footer;
