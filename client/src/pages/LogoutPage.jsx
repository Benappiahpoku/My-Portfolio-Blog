import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LogoutPage.css";

function Logout() {
  const { logout } = useAuth0();

  const handleLogout = (e) => {
    e.preventDefault();
    // Log the user out and redirect them to the home page
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      <h1>Logout</h1>
      <div className="card">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Logout;
