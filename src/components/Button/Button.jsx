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

const Line = ({text,background,hover}) => {
    return(
        <>
            <button className={`flex`}>

            </button>
        </>
    )


}

export {Circle, Line}