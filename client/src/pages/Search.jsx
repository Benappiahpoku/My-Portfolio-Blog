import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-results?q=${searchTerm}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search for posts"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
// In this code snippet, we created a new component called Search. This component is a form that allows users to search for posts. When the form is submitted, the user is redirected to the search results page with the search term as a query parameter.