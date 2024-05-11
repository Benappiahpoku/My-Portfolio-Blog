import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "../../pages/Search";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect the user to the Auth0 login page
    loginWithRedirect();
  };


  return (
    <div className="App">
      <header className="App-header">
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <NavLink to="/" className="logo" onClick={removeActive}>
            Benji
          </NavLink>
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li>
              <NavLink to="/" className="navLink" onClick={removeActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className="navLink" onClick={removeActive}>
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                onClick={(e) => {
                  handleSubmit(e);
                  removeActive();
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navLink"
                onClick={(e) => {
                  handleSubmit(e);
                  removeActive();
                }}
              >
                Register
              </NavLink>
            </li>
            <li>
              <Search />
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
