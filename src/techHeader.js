import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Technology from "./technology";
import App from "./App";
function Techheader() {
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
    <div id="Tech-header">
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
      <h1 className="techHeading">PERCEPTION ENABLED TECHNOLOGY</h1>
      <p className="techContent">
        Click here to edit this paragraph and add your own content. This is a
        great place to expand on the title and any relevant details or
        information.
      </p>
    </div>
  );
}

export default Techheader;
