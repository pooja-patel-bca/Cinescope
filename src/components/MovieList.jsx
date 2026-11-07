
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({
    movies,
    onAddToWatchlist,
    onOpenDetails
}) {
    return (
        <div className="movie-grid">

            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onAddToWatchlist={onAddToWatchlist}
                        onOpenDetails={onOpenDetails}
                    />
                ))
            ) : (
                <p className="no-movies">
                    No movies found.
                </p>
            )}

        </div>
    );
}

export default MovieList;
