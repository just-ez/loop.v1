import React from "react";
import "../assets/css/nav.css";
// import logo from "../assets/img/logo.svg";
import north from "../assets/img/north.svg";
import menu from "../assets/img/menu.svg";
import { Link } from "react-router-dom";
const Nav = () => {
  function openNav() {
    document.querySelector(".menu-bar").style.height = "100vh";
    document.querySelector(".menu-bar").style.zIndex = "99999";
    document.querySelector(".menu-bar").style.opacity = "1";
  }

  function closeNav() {
    document.querySelector(".menu-bar").style.height = "0vh";
    document.querySelector(".menu-bar").style.zIndex = "-1";
    document.querySelector(".menu-bar").style.opacity = "0";
  }

  return (
    <header >
      <nav>
        <div className="logo">L.Studio.</div>

        <div className="hero-menu">
          <div className="lang">
            <p>EN</p>
          </div>
          <button className="cool-link">
            <Link to="/contact">
              CONTACT US
              <img src={north} alt="" />
            </Link>
          </button>
          <div className="menu-btn" onClick={openNav}>
            <img src={menu} alt="" />
          </div>
        </div>
      </nav>
      <div className="menu-bar">
        <p style={{ position: "absolute", zIndex: "9999", top: "0", right: "20px", padding:"20px" }} onClick={closeNav}>
          close
        </p>
        <ul>
          <li>
            <Link to='' data-text="Home" className="menu-bar-a">
              Home
            </Link>
          </li>
          <li>
            <Link to='' data-text="About" className="menu-bar-a">
              About
            </Link>
          </li>
          <li>
            <Link to='' data-text="Work" className="menu-bar-a">
              Work
            </Link>
          </li>
          <li>
            <Link to='' data-text="Contact" className="menu-bar-a">
              Contact
            </Link>
          </li> 
        </ul>
        <div className="nav-c">
          <p>Get In Touch</p>
          <a href="mailto:loopstudio95@gmail.com">
          loopstudio95@gmail.com
          </a>
          <a href="https://wa.me/09135248299">
          +234-91-3524-82-99
          </a>
          <a href="mailto:loopstudio95@gmail.com">
          loopstudio95@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
