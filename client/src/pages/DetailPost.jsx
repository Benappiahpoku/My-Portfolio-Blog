import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/postAPI"; // Import the getPost function
import "./DetailPost.css"; // Import the CSS file

function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id)
      .then((post) => setPost(post.data))
      .catch((error) => console.error(error));
    // Fetch the post when the component mounts
  }, [id]);

  console.log(id);

  if (!post) return null;

  return (
    <div className="single-post-container">
      <div className="single-post">
        <div className="single-post-text">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
        <div className="single-post-image">
          <img src={post.imageUrl} alt={post.title} />
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
