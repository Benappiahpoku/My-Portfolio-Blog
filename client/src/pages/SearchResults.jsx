import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchPosts } from "../api/search";
import "./SearchResults.css";

const SearchResults = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchResults = async () => {
      const params = new URLSearchParams(location.search);
      const searchTerm = params.get("q");
      const results = await searchPosts(searchTerm);
      setPosts(results);
    };

    fetchResults();
  }, [location]);

  return (
    <ul className="search-results">
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
