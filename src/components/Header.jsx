const Header = () => {
  return (
    <header className="bg-white shadow-sm py-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">
          🎬 Movie Search
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Instantly fetch movie details using the OMDb API
        </p>
      </div>
    </header>
  );
};

export default Header;
