const Circle = ({ text, background, hover, icon, file }) => {
  const classes = `
    inline-flex items-center 
    px-5 sm:px-7 py-2 sm:py-2.5 
    rounded-lg sm:rounded-full 
    gap-1.5 sm:gap-2.5 
    cursor-pointer 
    hover:bg-dark transition-colors ease-in-out duration-300
    ${background} ${hover} text-base sm:text-lg md:text-[18px]
  `;

  return file ? (
    <a href={file} download className={classes}>
      <p className="font-extrabold text-white">{text}</p>
      <div className="text-white">
        <ion-icon name={icon}></ion-icon>
      </div>
    </a>
  ) : (
    <button className={classes}>
      <p className="font-extrabold text-white">{text}</p>
      <div className="text-white">
        <ion-icon name={icon}></ion-icon>
      </div>
    </button>
  );
};



const Line = ({text,hover,textColor,textColorHover}) => {
    return(
        <>
            <button className={`
                flex items-center justify-center text-base sm:text-lg md:text-[18px] gap-2 cursor-pointer
                transition-colors ease-in-out duration-300
                ${hover} 
                ${textColor} 
                group
            `}>
                <p className={`
                    underline underline-offset-8 decoration-3
                    transition-colors ease-in-out duration-300
                    ${textColorHover}
                `}>
                    {text}
                </p>
                <div className={`
                    font-extrabold rotate-230 text-3xl
                    transition-colors ease-in-out duration-300
                    ${textColorHover}
                `}>
                    <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
            </button>
        </>
    )
}
export {Circle, Line}
