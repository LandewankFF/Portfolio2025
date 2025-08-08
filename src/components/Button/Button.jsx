const Circle = ({text,background,hover,icon}) => {
    return(
        <>
            <button className={`inline-flex px-7 py-2.5 rounded-full gap-2.5 cursor-pointer hover:bg-dark transition-colors ease-in-out duration-300 ${background} ${hover} ${icon} text-[18px]`}>
                <p className="font-extrabold text-white">{text}</p>
                <div className="text-white">
                    <ion-icon name={icon}></ion-icon>
                </div>
                {/* <ion-icon name="cloud-download-outline"></ion-icon> */}
            </button>
        </>
    )
}



const Line = ({text,hover,textColor,textColorHover}) => {
    return(
        <>
            <button className={`
                flex items-center justify-center text-[18px] gap-2 cursor-pointer
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