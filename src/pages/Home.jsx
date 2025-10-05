import MovieCard from "../components/MovieCard";

import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "Interstellar", year: "2014" },
    { id: 3, title: "The Dark Knight", year: "2008" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + searchQuery);  // shows what was typed in the search bar.
    setSearchQuery("");  // clears the input box after searching.
  };

  return (
    <div className="home">

      {/* search movies */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* movies list */}
      <div className="movies-grid">
        {movies.map((movie) => 
        // movie.title.toLowerCase().startsWith(searchQuery) &&
        (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
