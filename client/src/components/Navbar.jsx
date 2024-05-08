import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
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
              <NavLink to="/login" className="navLink" onClick={removeActive}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="navLink"
                onClick={removeActive}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/post/:id"
                className="navLink"
                onClick={removeActive}
              >
                SinglePost
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className="navLink" onClick={removeActive}>
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navLink" onClick={removeActive}>
                Contact
              </NavLink>
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
