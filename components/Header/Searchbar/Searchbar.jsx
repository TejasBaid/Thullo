import React from "react";

export const Searchbar = () => {
    return (
        <div className="searchbar">
            <input className="search-input" placeholder='Search by board name'/>
            <div className="search-button pointer">Search</div>
        </div>
    )
}
