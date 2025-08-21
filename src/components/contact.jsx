import InlineContent from "./Button/Inlinecontent";
import SocialMedia from "./Button/SocialMedia";

const DataContact = [
  {
    logo: "call",
    text: "+6285774512290",
  },
  {
    logo: "mail",
    text: "landewankfahrezaf@gmail.com",
  },
  {
    logo: "location",
    text: "West Java, Indonesia",
  },
];

const socialMediaData = [
  { name: "logo-instagram" },
  { name: "logo-tiktok" },
  { name: "logo-linkedin" },
];

const Contact = () => {
  return (
    <section className="bg-dark-active mt-5">
      <div className="container mx-auto flex w-full h-[500px] py-8">
        {/* content left */}
        <div className="w-1/2  text-white flex flex-col justify-between ">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-bold">Any Project?</h1>
              <p>
                Have a question or a project in mind? I'd love to hear from you.
                Let's chat and make something amazing together.
              </p>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-3">
            {DataContact.map((contact, idx) => (
              <InlineContent
                key={contact.idx}
                logo={contact.logo}
                text={contact.text}
              />
            ))}
          </div>
          {/* social media */}
          <div className="flex gap-4">
            {socialMediaData.map((icon, idx) => (
              <SocialMedia 
                key={idx} 
                icon={icon.name} 
              />
            ))}
          </div>
        </div>
        {/* content right */}
        <div className="w-1/2 bg-amber-200"></div>
      </div>
    </section>
  );
};

export default Contact;
