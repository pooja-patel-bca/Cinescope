
import React from "react";
import { ArrowLeft, Trash2 } from "lucide-react";
import MovieCard from "../components/MovieCard";

function Watchlist({
    watchlist,
    onRemoveFromWatchlist,
    onBack,
    onOpenDetails
}) {
    return (
        <div className="watchlist-page">

            <button className="back-button" onClick={onBack}>
                <ArrowLeft size={18} />
                Back to Home
            </button>

            <h1>My Watchlist</h1>

            <p>Your favourite movies saved for later.</p>

            {watchlist.length > 0 ? (

                <div className="movie-grid">

                    {watchlist.map((movie) => (
                        <div key={movie.id}>

                            <MovieCard
                                movie={movie}
                                onAddToWatchlist={() => { }}
                                onOpenDetails={onOpenDetails}
                            />

                            <button
                                className="remove-button"
                                onClick={() => onRemoveFromWatchlist(movie.id)}
                            >
                                <Trash2 size={16} />
                                Remove
                            </button>

                        </div>
                    ))}

                </div>

            ) : (

                <p className="empty-watchlist">
                    Your watchlist is empty. Explore movies and add your favourites!
                </p>

            )}

        </div>
    );
}

export default Watchlist;
