const Title = ({title,description}) =>{
    return(
        <>
            <div className="w-full inline-flex justify-center">
                <h1 className="text-primary text-[44px] font-bold">{title}</h1>
            </div>
            <div className="w-full inline-flex justify-center">
                <p className="lg:w-[800px] text-center  ">{description}</p>
            </div>
        </>
    )
}
export default Title;

