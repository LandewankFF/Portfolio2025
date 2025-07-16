const CardService = ({ Title, Description, iconType, iconName, iconSrc, iconAlt }) => {
  return (
    <>
      
      <div className="
        flex w-[345px] h-[291px] p-2.5 items-center bg-primary rounded-xl card-hover-effect     /* Kelas kustom untuk efek geser background */
      ">
        <div className="
          w-full h-full 
          
          flex flex-col items-center justify-center text-white
          transition-colors duration-300 ease-in-out /* Transisi untuk warna default */
          
        ">
          {/* Icon */}
          <div className="text-8xl">
              <img src={iconSrc} alt={iconAlt || Title} className="w-20 h-20 object-contain" />
          </div>
          {/* title */}
          <div className="text-center">
            <h2 className="font-bold text-2xl">
              {Title}
            </h2>
          </div>
          {/* description */}
          <div className="text-center">
            <p className="
               text-black/* Warna default description */
              transition-colors duration-300 ease-in-out
              group-hover-text-darker /* Class kustom untuk warna description saat hover */
            ">{Description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { CardService };