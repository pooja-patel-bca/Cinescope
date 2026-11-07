
import React from "react";
import {
    Film,
    Home,
    Compass,
    Bookmark
} from "lucide-react";

function Navbar({ onOpenWatchlist, watchlistCount }) {
    return (
        <nav className="navbar">

            <div className="logo">
                <Film size={28} />
                <h2>CineScope</h2>
            </div>

            <div className="nav-links">

                <a href="/">
                    <Home size={18} />
                    Home
                </a>

                <a href="#explore">
                    <Compass size={18} />
                    Explore
                </a>

                <button
                    className="nav-watchlist"
                    onClick={onOpenWatchlist}
                >
                    <Bookmark size={18} />
                    Watchlist ({watchlistCount})
                </button>

            </div>
        </nav>
    );
}

export default Navbar;
