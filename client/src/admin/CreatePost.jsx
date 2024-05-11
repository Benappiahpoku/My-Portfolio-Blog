import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createPost } from "../api/postAPI"; // Import the createPost function
import "./CreatePost.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [file, setFile] = useState(null); // Add a state variable for the file

const handleSubmit = (event) => {
  event.preventDefault();
  const contentWithoutTags = content
    .replace(/<p>/g, "\n")
    .replace(/<\/p>/g, "")
    .replace(/<br>/g, "");
  createPost(
    { userId, title, author, date, status, content: contentWithoutTags },
    file
  )
    .then(() => {
      toast.success("Post Created successfully!");
      setTimeout(() => {
        navigate("/");
      }, 4000); // Wait for 3 seconds before navigating
    })
    .catch((error) => console.error(error)); // Log any errors
};

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Update the file state variable when the file input field changes
    toast.success("Image Uploaded successfully!");
  };

  return (
    <div className="CreatePost">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
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
          Image:
          <input type="file" onChange={handleFileChange} />
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
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </label>
        <label>
          Content:
          <ReactQuill value={content} onChange={setContent} />
        </label>
        <button type="submit" className="btn">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
// In this file, we've added a new state variable, file, to store the file that the user selects. We've also added a new input field for the file in the form. When the user selects a file, we update the file state variable using the handleFileChange function.
