import React, { useState } from "react";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/Watchlist";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  // Add movie to watchlist
  const addToWatchlist = (movie) => {
    const alreadyAdded = watchlist.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      setWatchlist((previous) => [...previous, movie]);
      alert("Movie added to Watchlist!");
    } else {
      alert("Movie already exists in Watchlist!");
    }
  };

  // Remove movie from watchlist
  const removeFromWatchlist = (id) => {
    setWatchlist((previous) =>
      previous.filter((movie) => movie.id !== id)
    );
  };

  // Open movie details
  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
    setCurrentPage("details");
  };

  // Go back to home
  const goToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="app-container">

      {currentPage === "home" && (
        <Home
          watchlist={watchlist}
          onAddToWatchlist={addToWatchlist}
          onOpenDetails={openMovieDetails}
          onOpenWatchlist={() => setCurrentPage("watchlist")}
        />
      )}

      {currentPage === "details" && (
        <MovieDetails
          movie={selectedMovie}
          onBack={goToHome}
          onAddToWatchlist={addToWatchlist}
        />
      )}

      {currentPage === "watchlist" && (
        <Watchlist
          watchlist={watchlist}
          onRemoveFromWatchlist={removeFromWatchlist}
          onBack={goToHome}
          onOpenDetails={openMovieDetails}
        />
      )}

    </div>
  );
}

export default App;