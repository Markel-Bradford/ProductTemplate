import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";



const Navbar = () => {

  const [click, setClick] =
    useState(false); /*creates opposite state to open and close menu on click*/

  const handleClick = () => setClick(!click); /*reverses false click state set*/
  const closeMobileMenu = () => setClick(false);
  
  return (
      <nav className={'navbar'} >
        <div className="navbar-container">
          <a href="#top" className="navbar-logo">
            <img className="logo" src="/ProductTemplate/src/assets/pthreads.png" alt="" srcset="" />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
            {/*? is equal to true. : creates toggle from one item to another.  */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <AnchorLink href="#top" className="nav-links" onClick={closeMobileMenu}>
                Home
              </AnchorLink>
            </li>
            
            <li className="nav-item">
              <AnchorLink
                href="#menu"
                className="nav-links"
                onClick={closeMobileMenu}>
                Mens
              </AnchorLink>
            </li>
            <li className="nav-item">
              <AnchorLink
                href="#contact"
                className="nav-links"
                onClick={closeMobileMenu}>
                Womens
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
