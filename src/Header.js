import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";
function Header(props) {
  const navClick = (e) => {
    let elements = document.getElementsByClassName("navLink");
    const targetId = e.target.id.split("_")[0];
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.classList = "navLink";
      if (element.id.split("_")[0] === targetId) {
        element.classList = "selected navLink";
      }
    }
    e.target.classList = "selected navLink";
    document.getElementById("home_LinkFooter");
  };

  useEffect(() => {
    let elements = document.getElementsByClassName("navLink");
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];

      if (element.name === props.location.pathname) {
        element.classList = "selected navLink";
      }
    }
    // window.addEventListener("beforeunload", alertUser);
    // return () => {
    //   window.removeEventListener("beforeunload", alertUser);
    // };
  });

  return (
    <header className="header">
      <div className="header__borderTop"></div>
      <div className="header__bg">
        <svg
          id="header__wave"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,128L12,144C24,160,48,192,72,218.7C96,245,120,267,144,261.3C168,256,192,224,216,213.3C240,203,264,213,288,229.3C312,245,336,267,360,277.3C384,288,408,288,432,240C456,192,480,96,504,69.3C528,43,552,85,576,85.3C600,85,624,43,648,32C672,21,696,43,720,80C744,117,768,171,792,165.3C816,160,840,96,864,106.7C888,117,912,203,936,202.7C960,203,984,117,1008,112C1032,107,1056,181,1080,218.7C1104,256,1128,256,1152,240C1176,224,1200,192,1224,160C1248,128,1272,96,1296,74.7C1320,53,1344,43,1368,80C1392,117,1416,203,1428,245.3L1440,288L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
          ></path>
        </svg>
      </div>
      <nav className="header__nav">
        <span className="header__logo">A</span>
        <ul className="header__navList">
          <li className="header__link">
            <Link
              name="/"
              to="/"
              id="home_LinkHeader"
              className="navLink"
              onClick={navClick}
            >
              Home
            </Link>
          </li>
          <li className="header__link">
            <Link
              name="/about"
              to="/about"
              id="about_LinkHeader"
              className="navLink"
              onClick={navClick}
            >
              About
            </Link>
          </li>

          <li className="header__link">
            <Link
              name="/resume"
              to="/resume"
              id="resume_LinkHeader"
              className="navLink"
              onClick={navClick}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Header);
