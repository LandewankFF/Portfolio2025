import { useState } from "react";
import emailjs from "@emailjs/browser";
import InlineContent from "./Button/Inlinecontent";
import SocialMedia from "./Button/SocialMedia";

const DataContact = [
  { logo: "call", text: "+6285774512290" },
  { logo: "mail", text: "landewankfahrezaf@gmail.com" },
  { logo: "location", text: "West Java, Indonesia" },
];

const socialMediaData = [
  { name: "logo-instagram", url: "https://www.instagram.com/landewank13/" },
  { name: "logo-tiktok", url: "https://www.tiktok.com/@larefi_firdaus" },
  {
    name: "logo-linkedin",
    url: "https://www.linkedin.com/in/landewank-fahreza-firdaus/",
  },
  {
    name: "logo-youtube",
    url: "https://www.youtube.com/@landewankfahrezafirdaus",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validasi
  const validate = () => {
    let newErrors = {};

    if (!formData.fullname.trim()) newErrors.fullname = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10-15 digits";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // 1) Kirim pesan ke kamu (Contact Us template)
    emailjs
      .send(
        "service_8t64hom",
        "template_e6ibg7v", // 👉 ID template untuk kamu
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "gQXwdD4ixFIRYpGL8" //public key
      )
      .then(() => {
        // 2) Kirim auto-reply ke user
        return emailjs.send(
          "service_8t64hom",
          "template_sailo4p", // auto reply
          {
            from_name: formData.fullname, 
            from_email: formData.email, 
            phone: formData.phone, 
            message: formData.message, 
          },
          "gQXwdD4ixFIRYpGL8"
        );
      })
      .then(() => {
        alert("Message sent successfully ✅");
        setFormData({ fullname: "", email: "", phone: "", message: "" }); // reset form
        setLoading(false);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message ❌, please try again.");
        setLoading(false);
      });
  };

  return (
    <section className="bg-dark-active mt-5 px-5">
      <div className="container mx-auto flex flex-col md:flex-row w-full py-8 gap-6">
        {/* content left */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Any Project?
            </h1>
            <p className="mt-2.5 text-sm md:text-base leading-relaxed">
              Have a question or a project in mind? I'd love to hear from you.
              Let's chat and make something amazing together. Collaboration is
              the key to building something impactful. Don’t hesitate to share
              your thoughts, even if it’s just a simple idea — together we can
              shape it into something bigger and better.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            {DataContact.map((contact, idx) => (
              <InlineContent
                key={idx}
                logo={contact.logo}
                text={contact.text}
              />
            ))}
          </div>

          {/* social media */}
          <div className="flex gap-4 mt-4 md:mt-0 justify-center md:justify-start">
            {socialMediaData.map((icon, idx) => (
              <SocialMedia key={idx} icon={icon.name} url={icon.url} />
            ))}
          </div>
        </div>

        {/* content right */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md md:max-w-lg mx-auto shadow-lg space-y-3 p-6 rounded-xl bg-white"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                className={`w-full p-3 rounded-xl border ${
                  errors.fullname ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full p-3 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full p-3 rounded-xl border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full h-35 p-3 rounded-xl border resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl transition duration-300 ease-in-out disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
