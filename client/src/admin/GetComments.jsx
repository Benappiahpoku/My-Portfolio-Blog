import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getComments } from "../api/commentsAPI"; // Import the getComments function
import "./GetComments.css";

function GetComments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState([]); // Create a state variable for the comments

  useEffect(() => {
    getComments()
      .then((comments) => setComments(comments.data))
      .catch((error) => console.error(error));
    // Fetch the comments when the component mounts
  }, []);

  return (
    <div>
      <div className="header-content">
        <h2>All Comments</h2>
        <button className="btn create-post-btn">Create Comment</button>
      </div>
      <div className="content-list">
        <table>
          <thead>
            <tr>
              <th>Content</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>
                  <Link to={`/post/${comment.id}`}>{comment.content}</Link>
                </td>
                <td>{comment.author}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => navigate(`/edit-comment/${comment.id}`)}
                  >
                    Edit
                  </button>
                  <button className="btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetComments;
