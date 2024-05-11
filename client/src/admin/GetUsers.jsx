import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../api/usersAPI"; // Import the getUsers function
import "./GetUsers.css";

function GetUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]); // Create a state variable for the users

  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users.data))
      .catch((error) => console.error(error));
    // Fetch the users when the component mounts
  }, []);
    const handleDelete = (userId) => {
      deleteUser(userId)
        .then(() => {
          // Remove the deleted user from the state
          setUsers(users.filter((user) => user.id !== userId));
        })
        .catch((error) => console.error(error));
    };

  return (
    <div>
      <div className="header-content">
        <h2>All Users</h2>
        <button
          className="btn create-post-btn"
          onClick={() => navigate("/create-user")}
        >
          Create User
        </button>
      </div>
      <div className="content-list">
        <table>
          <thead>
            <tr>
              <th>username</th>
              <th>email</th>
              <th>password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <Link to={`/post/${user.id}`}>{user.username}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => navigate(`/edit-user/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button className="btn" onClick={() => handleDelete(user.id)}>
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

export default GetUser;
