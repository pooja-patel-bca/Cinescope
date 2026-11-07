
import React from "react";
import { Star, Plus, Info } from "lucide-react";

function MovieCard({ movie, onAddToWatchlist, onOpenDetails }) {
    return (
        <div className="movie-card">

            <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
            />

            <div className="movie-info">

                <h3>{movie.title}</h3>

                <p>{movie.genre}</p>

                <div className="movie-rating">
                    <Star size={16} fill="gold" color="gold" />
                    <span>{movie.rating}</span>
                </div>

                <button onClick={() => onAddToWatchlist(movie)}>
                    <Plus size={16} />
                    Add to Watchlist
                </button>

                <button
                    className="details-button"
                    onClick={() => onOpenDetails(movie)}
                >
                    <Info size={16} />
                    View Details
                </button>

            </div>
        </div>
    );
}

export default MovieCard;
