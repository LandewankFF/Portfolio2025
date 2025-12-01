const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Page Not Found or on progress</p>
      <a
        href="/"
        className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-dark transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
