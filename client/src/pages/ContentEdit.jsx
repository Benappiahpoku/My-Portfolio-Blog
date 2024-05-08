import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles
import { useParams } from "react-router-dom";
import posts from "../db/homeposts.json";
import "./ContentEdit.css";

function ContentEdit({ onUpdate }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(id));
    if (post) {
      setPost(post); // set the post state
      setTitle(post.title);
      setAuthor(post.author);
      setDate(post.date);
      setStatus(post.status);
      setContent(post.content);
    }
  }, [id]);

  if (!post) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate({ ...post, title, author, date, status, content });
  };

  return (
    <div className="ContentEdit" >
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
        <label>
          Content:
          <ReactQuill value={content} onChange={setContent} />
        </label>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}

export default ContentEdit;
