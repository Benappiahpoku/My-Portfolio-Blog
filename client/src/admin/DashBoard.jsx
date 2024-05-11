import React from "react";
import GetPost from "./GetPost";
import "./DashBoard.css";
import GetUser from "./GetUsers";
import GetComments from "./GetComments";
import GetUserActivities from "./GetUserActivities";

function DashBoard() {
  return (
    <>
      <div>
        <header>
          <div className="header-content">
            <h2>DashBoard</h2>
          </div>
        </header>
        <main>
          <GetPost />
          <GetUser />
          <GetComments />
          <GetUserActivities />
        </main>
      </div>
    </>
  )
}

export default DashBoard;
