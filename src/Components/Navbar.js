import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

import Incmain from "../Images/image.png" 

const Navbar = () => {
  // State to control the offcanvas navbar (whether it's open or closed)
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to toggle the navbar open/close state
  const handleNavbarToggle = () => {
    setIsNavbarOpen((prevState) => !prevState); // Toggle the state
  };

  // Function to close the navbar when a link is clicked
  const handleLinkClick = () => {
    setIsNavbarOpen(false); // Close the navbar
  };

  // useEffect to listen for state changes and trigger side effects
  useEffect(() => {
    if (isNavbarOpen) {
      console.log("Navbar is open");
    } else {
      console.log("Navbar is closed");
    }
  }, [isNavbarOpen]); // Effect runs every time isNavbarOpen changes

  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Incmain} className="inclogo" alt="Inc Global Logo" />
          </a>

          {/* Bootstrap button to toggle offcanvas */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavbarToggle} // Toggle navbar state on button click
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas navigation */}
          <div
            className={`offcanvas offcanvas-end text-bg-dark ${
              isNavbarOpen ? "show" : ""
            }`} // Dynamically add 'show' class based on state
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Inc Global
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={handleLinkClick} // Close navbar when the close button is clicked
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link to="/" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags" aria-current="page">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/About" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">About</a>
                  </li>
                </Link>
                <Link to="/Services" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">Services</a>
                  </li>
                </Link>
                <Link to="/careers" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">Careers</a>
                  </li>
                </Link>
                {/* <Link to="/Gallery" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">Gallery</a>
                  </li>
                </Link> */}
                <Link to="/insights" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">Insights</a>
                  </li>
                </Link>
                <Link to="/Connects" className="Link" onClick={handleLinkClick}>
                  <li className="nav-item">
                    <a className="Tags">Connects</a>
                  </li>
                </Link>
                <div className="SocialHead">
                  <div className="social">
                    <a
                      href="https://www.linkedin.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="iconhead">
                        {" "}
                        <FaLinkedin className="icon" />
                      </h3>
                    </a>
                    <a
                      href="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="iconhead">
                        <FaTwitter className="icon" />
                      </h3>
                    </a>
                    <a
                      href="https://www.facebook.com/login.php/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="iconhead">
                        {" "}
                        <FaFacebook className="icon" />
                      </h3>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="iconhead">
                        {" "}
                        <FaInstagram className="iconinsta"></FaInstagram>
                      </h3>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
