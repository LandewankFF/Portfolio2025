const CardService = ({ Title, Description, iconSrc, iconAlt }) => {
  return (
    <div className="flex w-[345px] h-[291px] p-2.5 items-center bg-primary rounded-xl card-hover-effect transition-colors duration-300 ease-in-out hover:bg-primary-hover cursor-pointer">
      <div className="w-full h-full flex flex-col items-center justify-center text-white gap-y-4 px-4">
        {/* Icon */}
        <div>
          <img
            src={iconSrc}
            alt={iconAlt || Title}
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="font-bold text-2xl text-center">{Title}</h2>

        {/* Description */}
        <p className="text-white text-center transition-colors duration-300 ease-in-out">
          {Description}
        </p>
      </div>
    </div>
  );
};

export default CardService;
