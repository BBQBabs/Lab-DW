import { useState } from "react";
import { movies } from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Favorites from "./components/Favorites";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  
  const [query, setQuery] = useState(""); // texto del buscador
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]); 
  const [ratings, setRatings] = useState({}); 
  const [selectedId, setSelectedId] = useState(null); 

 

  function handleFilterChange(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  function rateMovie(id, stars) {
    setRatings({ ...ratings, [id]: stars });
  }


  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />

      <div className="layout">
        <aside>
          <Filters filters={filters} onChange={handleFilterChange} />
          <Favorites
            movies={favoriteMovies}
            onSelect={setSelectedId}
            onRemove={toggleFavorite}
          />
        </aside>

        <main>
          <MovieList
            movies={filteredMovies}
            favorites={favorites}
            ratings={ratings}
            onSelect={setSelectedId}
            onToggleFavorite={toggleFavorite}
          />
        </main>
      </div>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] || 0}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;
