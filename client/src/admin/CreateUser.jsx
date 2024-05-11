import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/usersAPI"; // Import the createUser function
import "./CreateUser.css";

function CreateUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({ username, email, password }) // Send a request to create a new user
      .then(() => navigate("/")) // Navigate back to the user list after the user is created
      .catch((error) => console.error(error)); // Log any errors
  };

  return (
    <div className="CreateUser">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="btn">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
