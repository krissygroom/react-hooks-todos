import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-container">
        <input className="search__input" type="text" />
        <SearchIcon className="h-5 w-5 search__icon" />
      </div>
    </div>
  );
};

export default Search;
