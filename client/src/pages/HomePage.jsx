import React from "react";
import { Link } from "react-router-dom";
import homeposts from "../db/homeposts.json";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  return (
    <div className="container">
      <div className="home">
        {homeposts.map((post, index) => (
          <div
            key={post.id}
            className={`post ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <div className="text">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <Link to={`/post/${post.id}`} className="btn">
                Read More
              </Link>
            </div>
            <div className="image">
              <div className="border">
              <img src={post.image} alt={post.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
