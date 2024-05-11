import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/postAPI";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import "./EditPost.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditPost({ onUpdate }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");

useEffect(() => {
  getPost(id)
    .then((post) => {
      console.log("Fetched post:", post);
      setPost(post.data);
      setTitle(post.data.title || "");
      setAuthor(post.data.author || "");
      setDate(post.data.date || "");
      setStatus(post.data.status || "");
      setContent(post.data.content || "");
    })
    .catch((error) => console.error("Error fetching post:", error));
}, [id]);

  useEffect(() => {
    console.log("Content:", content);
  }, [content]);

  if (!post) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    const contentWithoutTags = content
      .replace(/<p>/g, "\n")
      .replace(/<\/p>/g, "")
      .replace(/<br>/g, "");
    onUpdate({
      ...post,
      title,
      author,
      date,
      status,
      content: contentWithoutTags,
    });
    toast.success("Post updated successfully!");
  };

  return (
    <div className="ContentEdit">
      <ToastContainer />
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

export default EditPost;
