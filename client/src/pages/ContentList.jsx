import React from "react";
import homePosts from "../db/homeposts.json";
import { Link, useNavigate } from "react-router-dom";
import "./ContentList.css";

function ContentList() {
  const navigate = useNavigate();

  return (
    <div className="content-list">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {homePosts.map((post) => (
            <tr key={post.id}>
              <td>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </td>
              <td>{post.author}</td>
              <td>{post.date}</td>
              <td>{post.status}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => navigate(`/edit-post/${post.id}`)}
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
  );
}

export default ContentList;
