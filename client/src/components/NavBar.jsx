import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    }

    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  };

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">MERN Project Template</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
};

export default NavBar;
