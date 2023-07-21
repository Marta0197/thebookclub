import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { logout } from "../../stores/AccessTokenStore";
import logo from "../../assets/images/voladores.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="Logo" className="logo-navbar" />
        </Link>
        <div
          className={`navbar-burger ${menuOpen ? "is-active" : ""}`}
          onClick={handleMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${menuOpen ? "is-active" : ""}`}>
        {!currentUser ? (
          <div className="navbar-end">
            <Link to="/login" className="navbar-item" onClick={handleMenuOpen}>
              Log in
            </Link>
            <Link to="/signup" className="navbar-item" onClick={handleMenuOpen}>
              Sign up
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link
              to="/create-book"
              className="navbar-item"
              onClick={handleMenuOpen}
            >
              Upload a text
            </Link>
            <Link
              to="/my-books"
              className="navbar-item"
              onClick={handleMenuOpen}
            >
              My texts
            </Link>
            <Link
              to="/profile"
              className="navbar-item"
              onClick={handleMenuOpen}
            >
              My profile
            </Link>
            <button className="btn btn-secondary logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;