import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" activeClassName="active">
            Write
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
