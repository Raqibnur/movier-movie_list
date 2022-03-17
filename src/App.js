import { useState, useEffect } from "react";
import MovieCard from "./component/MovieCard";
import Header from "./component/Header";


const API_URL = "https://omdbapi.com?apikey=f3799eaf";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (movie) => {
    const response = await fetch(`${API_URL}&s=${movie}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data);
  };

  useEffect(() => {
    searchMovies("movie");
  }, []);

  return (
    <div className="px-2 mx-auto max-w-[1380px] sm:px-16">
      {/* Header Section */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovies={searchMovies}
      />
      {/* Fetch Movies */}
      {movies?.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div>
          <h3 className="text-2xl text-white">404 not found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
