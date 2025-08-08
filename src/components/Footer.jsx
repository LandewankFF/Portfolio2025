
const DataFooter = [
  {
    title: "General",
    links: ["Contact", "About", "Services", "Blog"]
  },
  {
    title: "Resources",
    links: ["Docs", "Tutorials", "FAQ"]
  },
  {
    title: "Social",
    links: ["Instagram", "LinkedIn", "GitHub", "Twitter"]
  }
];

const Footer = () => {
  return (
    <footer className=" py-10">
      <div className="mb-8 px-[20px] md:px-[50px] lg:px-[80px] xl:px-[122px] mx-auto flex flex-wrap gap-40 justify-center">
        {/* Bagian Nama */}
        <div>
          <h1 className="text-[25px] font-extrabold ">Landewank Fahreza Firdaus</h1>
          <p className="text-[16px] text-gray-700">West Java, Indonesia</p>
        </div>

        {/* Bagian Menu Footer */}
        {DataFooter.map((section, idx) => (
          <div key={idx} className="mb-">
            <h1 className="font-extrabold mb-2 text-[25px]">{section.title}</h1>
            <ul className="space-y-1">
              {section.links.map((link, i) => (
                <li key={i} className="text-[16px] text-gray-700 hover:underline cursor-pointer">
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
