const JobDesc = ({position, company, date, description}) =>{
    return(
        <>
        <div className="sm:w-full lg:max-w-[450px] md:w-[300px]sm:px-0 px-5">
            <h1 className="text-[40px] font-bold">{position}</h1>
            <address className="font-semibold text-2xl">{company}</address>
            <time className="text-gray-400">{date}</time>
            <p className="text-gray-400 text-justify hover:text-black transition-colors duration-300 ease-in-out">{description}</p>
        </div>
        </>
    )
}

export default JobDesc;