// #src/components/Card.jsx
const CardService = ({ Title, Description, iconSrc: Icon }) => {
  return (
    <div className="flex w-[345px] h-[291px] p-2.5 items-center bg-primary rounded-xl card-hover-effect transition-colors duration-300 ease-in-out hover:bg-primary-hover cursor-pointer">
      <div className="w-full h-full flex flex-col items-center justify-center text-white gap-y-4 px-4">

        {/* ICON (React Component) */}
        <Icon size={70} className="text-white" />

        <h2 className="font-bold text-2xl text-center">{Title}</h2>

        <p className="text-white text-center">{Description}</p>
      </div>
    </div>
  );
};

export default CardService;
