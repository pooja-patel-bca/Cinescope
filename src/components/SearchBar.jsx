
import React from "react";
import { Search } from "lucide-react";

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-bar">
            <Search size={20} />

            <input
                type="text"
                placeholder="Search movies by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
