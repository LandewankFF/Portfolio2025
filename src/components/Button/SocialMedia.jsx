const SocialMedia = ({ icon, url }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-primary rounded-full p-4 text-2xl flex-none w-13 h-13 flex justify-center items-center hover:bg-primary-hover transition duration-300 ease-in-out cursor-pointer"
    >
      <ion-icon name={icon}></ion-icon>
    </a>
  );
};

export default SocialMedia;
