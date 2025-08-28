const Title = ({ title, description }) => {
  return (
    <>
      <div className="w-full inline-flex justify-center">
        <h1 className="text-primary text-[44px] font-bold text-center">{title}</h1>
      </div>
      <div className="w-full inline-flex justify-center">
        <p className="max-w-[800px] w-full px-4 text-center">{description}</p>
      </div>
    </>
  );
};

export default Title;
