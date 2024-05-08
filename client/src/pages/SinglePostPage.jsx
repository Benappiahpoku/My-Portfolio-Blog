import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import homeposts from "../db/homeposts.json";
import "./SinglePost.css"; // Import the CSS file

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = homeposts.find((post) => post.id === Number(id));
    setPost(foundPost);
  }, [id]);

  if (!post) return null;

  return (
    <div className="single-post-container">
      <div className="single-post">
        <div className="single-post-text">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
        <div className="single-post-image">
          <img src={post.image} alt={post.title} />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
