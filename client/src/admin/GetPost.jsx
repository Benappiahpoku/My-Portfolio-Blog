import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getPosts, deletePost } from "../api/postAPI"; // Import the getPosts function
import "./GetPost.css";
import moment from "moment";

function GetPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]); // Create a state variable for the posts

  useEffect(() => {
    getPosts()
      .then((posts) => setPosts(posts.data))
      .catch((error) => console.error(error));
    // Fetch the posts when the component mounts
  }, []);

const handleDelete = (postId) => {
  deletePost(postId)
    .then(() => {
      // Remove the deleted post from the state
      setPosts(posts.filter((post) => post.id !== postId));
    })
    .catch((error) => console.error(error));
};



  return (
    <div>
      <div className="header-content">
        <h2>All Posts</h2>
        <button
          className="btn create-post-btn"
          onClick={() => navigate("/create-post")}
        >
          Create Post
        </button>
      </div>
      <div className="content-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Date</th>
              <th>ImageUrl</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </td>
                <td>{post.author}</td>
                <td>{moment(post.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                <td>{post.imageUrl}</td>
                <td>{post.status}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => navigate(`/edit-posts/${post.id}`)}
                  >
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(post.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetPost;
