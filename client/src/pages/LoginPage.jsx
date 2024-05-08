import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginPage.css";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect the user to the Auth0 login page
    loginWithRedirect();
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
