import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/Optimo_transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/employees"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Feedback
              </Link>
            </li>
          </ul>
          <div className="nav-div">
            <Link to="/" className="slogan" onClick={closeMobileMenu}>
              We deliver Tomorrow's Solutions Today
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
