
import React from "react";
import { Star, ArrowLeft, Bookmark } from "lucide-react";

function MovieDetails({ movie, onBack, onAddToWatchlist }) {
    if (!movie) {
        return <p>Movie details not available.</p>;
    }

    return (
        <div className="details-page">
            <button className="back-button" onClick={onBack}>
                <ArrowLeft size={18} /> Back to Movies
            </button>

            <div className="details-container">
                <img src={movie.poster} alt={movie.title} />

                <div className="details-info">
                    <h1>{movie.title}</h1>

                    <p className="details-genre">{movie.genre}</p>

                    <div className="movie-rating">
                        <Star size={18} fill="gold" color="gold" />
                        {movie.rating}/10
                    </div>

                    <h3>About this movie</h3>

                    <p>
                        Discover the story of {movie.title}.
                        Explore its genre and add it to your personal watchlist.
                    </p>

                    <button onClick={() => onAddToWatchlist(movie)}>
                        <Bookmark size={18} /> Add to Watchlist
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
