const CardService = ({ Title, Description }) => {
  return (
    <>
      
      <div className="
        flex w-[345px] h-[291px] p-2.5 items-center bg-primary rounded-xl
      ">
        <div className="
          w-full h-full 
          
          flex flex-col items-center justify-center text-white
          transition-colors duration-300 ease-in-out /* Transisi untuk warna default */
          card-hover-effect     /* Kelas kustom untuk efek geser background */
        ">
          {/* Icon */}
          <div className="
            text-8xl
            transition-colors duration-300 ease-in-out
            group-hover-text-primary /* Warna default icon (gunakan warna utama Anda) */
            group-hover-icon-darker  /* Class kustom untuk warna ikon saat hover */
          ">
            <ion-icon name="globe-outline"></ion-icon>
          </div>
          {/* title */}
          <div className="text-center">
            <h2 className="
              font-bold text-2xl
               text-black/* Warna default title */
              transition-colors duration-300 ease-in-out
              group-hover-text-darker /* Class kustom untuk warna title saat hover */
            ">{Title}</h2>
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