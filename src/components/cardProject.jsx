const CardProject = ({ imgSrc, title, caption }) => {
  return (
    <div className="w-[350px] h-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 relative">
      
      {/* Gambar */}
      <div className="w-full h-[200px] overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title}
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>

      {/* Text */}
      <div className="py-3 px-1">
        <h1 className="font-bold text-[20px]">{title}</h1>
        <p className="text-gray-600 text-sm">{caption}</p>
      </div>

      {/* Icon Pojok Kanan Bawah */}
      <div className="absolute bottom-8 right-4 
                      bg-primary p-3 rounded-full cursor-pointer 
                      hover:bg-primary-hover 
                      transition duration-300 ease-in-out 
                      flex items-center justify-center 
                      transform -rotate-45">
        <ion-icon name="arrow-forward-outline" class="text-white text-xl"></ion-icon>
      </div>
    </div>
  )
}

export default CardProject
