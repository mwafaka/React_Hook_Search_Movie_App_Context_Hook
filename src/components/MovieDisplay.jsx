import { useState, useEffect } from "react";

const MovieDisplay = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=4a3b711b`
        );
        const data = await response.json();
        if (data.Response === "False") throw new Error(data.Error);
        setMovie(data);
      } catch (err) {
        setError(err.message || "Failed to fetch movie.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500" role="status" aria-live="polite">
        Loading movie details...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="flex justify-center items-center h-64 text-red-600"
        role="alert"
      >
        {error}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center p-6">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl">
        <img
          src={movie.Poster}
          alt={`Poster of ${movie.Title}`}
          className="w-full h-80 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{movie.Title}</h2>
          <p className="text-gray-600">
            <strong>Box Office:</strong> {movie.BoxOffice || "N/A"}
          </p>
          <p className="text-gray-600">
            <strong>Country:</strong> {movie.Country || "N/A"}
          </p>

          <a
            href={movie.Poster}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            View Poster
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
