/* src/components/HeroSection.jsx */
const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay biar tulisan jelas */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
