import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUserActivities } from "../api/userActivitiesAPI"; // Import the getUserActivities function
import "./GetUserActivities.css";
import moment from "moment";

function GetUserActivities() {
  const navigate = useNavigate();
  const [userActivities, setUserActivities] = useState([]); // Create a state variable for the user activities

  useEffect(() => {
    getUserActivities()
      .then((userActivities) => setUserActivities(userActivities.data))
      .catch((error) => console.error(error));
    // Fetch the user activities when the component mounts
  }, []);

  return (
    <div>
      <div className="header-content">
        <h2>All User Activities</h2>
      </div>
      <div className="content-list">
        <table>
          <thead>
            <tr>
              <th>userID</th>
              <th>Activity</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userActivities.map((userActivity) => (
              <tr key={userActivity.id}>
                <td>
                  <Link to={`/post/${userActivity.id}`}>
                    {userActivity.userId}
                  </Link>
                </td>
                <td>{userActivity.activityType}</td>
                <td>
                  {moment(userActivity.timestamp).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>

                <td>
                  <button
                    className="btn"
                    onClick={() => navigate(`/edit-user/${userActivity.id}`)}
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

export default GetUserActivities;
