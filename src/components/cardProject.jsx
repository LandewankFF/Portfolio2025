const CardProject = ({ title, description }) => {
    return (
        <div className="w-[300px] h-[250px] bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:scale-105 transition">
            <div className="w-[300px] h-[200px] bg-amber-300">
                <img src="" alt="" />
            </div>
            <div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="text-right ">
                
                <span className="text-blue-500 text-2xl rotate-320  bg-primary rounded-full">→</span>
            </div>
        </div>
    )
}
export default CardProject
