
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const movieData = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
        id: 2,
        title: "Interstellar",
        genre: "Adventure",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        id: 4,
        title: "Avatar",
        genre: "Fantasy",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
    },
    {
        id: 5,
        title: "Titanic",
        genre: "Romance",
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    },
    {
        id: 6,
        title: "Joker",
        genre: "Drama",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    }
];

function Home({
    watchlist,
    onAddToWatchlist,
    onOpenDetails,
    onOpenWatchlist
}) {
    const [movies] = useState(movieData);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app">
            <Navbar
                onOpenWatchlist={onOpenWatchlist}
                watchlistCount={watchlist.length}
            />

            <main className="main-content">
                <section className="hero">
                    <p className="hero-label">
                        YOUR MOVIE DISCOVERY PLATFORM
                    </p>

                    <h1>Discover Your Next Favourite Movie</h1>

                    <p>
                        Explore amazing movies, discover new stories
                        and create your personal watchlist.
                    </p>
                </section>

                <section id="explore" className="movies-section">
                    <h2>Explore Movies</h2>

                    <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    <MovieList
                        movies={filteredMovies}
                        onAddToWatchlist={onAddToWatchlist}
                        onOpenDetails={onOpenDetails}
                    />
                </section>
            </main>
        </div>
    );
}

export default Home;
