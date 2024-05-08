// ContentItem.jsx
import React from "react";
import "./ContentItem.css";

function ContentItem({ post }) {
  return (
    <div className="content-item">
      <div className="content-item-details">
        <h2>{post.title}</h2>
        <p>Author: {post.author}</p>
        <p>Date: {post.date}</p>
        <p>Status: {post.status}</p>
      </div>
      <div className="content-item-actions">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default ContentItem;
