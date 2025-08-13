const JobDesc = ({position, company, date, description}) =>{
    return(
        <>
        <div className="w-[450px]">
            <h1 className="text-[40px] font-bold">{position}</h1>
            <address className="font-semibold text-2xl">{company}</address>
            <time className="text-gray-400">{date}</time>
            <p className="text-gray-400 hover:text-black transition-colors duration-300 ease-in-out">{description}</p>
        </div>
        </>
    )
}

export default JobDesc;