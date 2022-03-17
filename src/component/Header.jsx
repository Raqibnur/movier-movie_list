import React from 'react'
import searchIcon from "../assets/search.svg";

function Header(props) {
    return (
      <div className="flex items-center justify-between px-2 space-x-4">
        <div>
          <img src="moviers.png" alt="Moviers" width="60px" />
        </div>
        <div className="w-full">
          <input
            placeholder="Search Movies"
            value={props.searchTerm}
            onChange={(e) => props.setSearchTerm(e.target.value)}
            className="w-full pl-2 bg-gray-100 border rounded-lg border-1 h-11"
          />
        </div>
        <div>
          <img
            src={searchIcon}
            alt="search"
            onClick={() => props.searchMovies(props.searchTerm)}
            className="p-2 bg-orange-500 rounded-lg cursor-pointer "
          />
        </div>
      </div>
    );
  }

export default Header