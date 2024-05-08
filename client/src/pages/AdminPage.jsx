import React from "react";
import ContentList from "./ContentList";
import "./AdminPage.css";

function AdminPage() {
  return (
    <div>
    <header>
        <div className="header-content">
          <h2>Admin Page</h2>
          <button className="btn create-post-btn">Create Post</button>
        </div>
      </header>
      <main>
        <ContentList />
      </main>
    </div>
  );
}

export default AdminPage;
