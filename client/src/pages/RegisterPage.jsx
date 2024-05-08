import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./RegisterPage.css";

function Register() {
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect the user to the Auth0 login page
    loginWithRedirect();
  };

  return (
    <div>
      <h1>Register</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <button type="submit">Register</button>
        </form>
        <p>
          Do you have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
