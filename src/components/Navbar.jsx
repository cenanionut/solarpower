import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./css/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  async function handleLogout() {
    try {
      await logout();
      history("/");
      closeMobileMenu();
    } catch {
      alert("Failed to log out");
    }
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CNN SUNPWR
            <i className="fas fa-sun"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Acasa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tehnic"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Tehnic
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Servicii
              </Link>
            </li>
            <li className="nav-item">
              {!button &&
                (currentUser ? (
                  <button
                    className="btn btn--outline btn--large"
                    onClick={handleLogout}
                  >
                    LOGOUT
                  </button>
                ) : (
                  <Button
                    buttonStyle="btn--outline"
                    linkto="/sign-up"
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                ))}
            </li>
          </ul>
          {button &&
            (currentUser ? (
              <button
                className="btn btn--outline btn--large"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            ) : (
              <Button buttonStyle="btn--outline" linkto="/sign-up">
                SIGN UP
              </Button>
            ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
