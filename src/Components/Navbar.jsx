import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"



const Navbar = () => {

  const [click, setClick] =
    useState(false); /*creates opposite state to open and close menu on click*/

  const handleClick = () => setClick(!click); /*reverses false click state set*/
  const closeMobileMenu = () => setClick(false);
  
  return (
      <nav className={'navbar'} >
        <div className="navbar-container">
          <a href="#top" className="navbar-logo">
            <img className="logo" src="/ProductTemplate/assets/pthreads.png" alt="" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
            {/*? is equal to true. : creates toggle from one item to another.  */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                to="/mens"
                className="nav-links"
                onClick={closeMobileMenu}>
                Mens
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/womens"
                className="nav-links"
                onClick={closeMobileMenu}>
                Womens
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
