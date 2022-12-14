import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Technology from "./technology";
import App from "./App";
function Header() {
  const [navColor, setNavColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div id="App-header">
      <div className={navColor ? "navBar-bg" : "navBar"}>
        <Link to="/" className="navLeft">
          Autono
        </Link>
        <div className="navRight">
          <Link className="navRightTech" to="/technology">
            Technonoly
          </Link>
          <a className="navRightAbt">About</a>
          <a className="navRightCarr">Careers</a>
          <a href="#footer" className="navRightSub">
            Subcribe
          </a>
        </div>
      </div>

      <div className="headerBanner">
        <p className="headerBannerContent">THE FUTURE OF MOBILITY IS HERE</p>
        <p className="headerBannerSubContent">
          Discover the safest self-driving experience with Autono.
        </p>
      </div>
    </div>
  );
}

export default Header;
