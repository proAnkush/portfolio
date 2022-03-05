import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Footer.css";
function Footer(props) {
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
    <footer className="footer">
      <div className="footer__borderTop"></div>
      <nav className="footer__nav">
        <ul className="header__navList">
          <li className="header__link">
            <Link
              name="/"
              to="/"
              id="home_LinkFooter"
              className="navLink"
              onClick={props.pageSwitch}
            >
              Home
            </Link>
          </li>
          <li className="header__link">
            <Link
              name="/about"
              to="/about"
              className="navLink"
              id="about_LinkFooter"
              onClick={props.pageSwitch}
            >
              About
            </Link>
          </li>

          <li className="header__link">
            <Link
              name="/resume"
              to="/resume"
              className="navLink"
              id="resume_LinkFooter"
              onClick={props.pageSwitch}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__grid">
        <div className="footer__text">
          <span>Ankush Patil</span>
          <blockquote>
            “ If you're good at the debugger it means you spent a lot of time
            debugging. I don't want you to be good at the debugger.”
          </blockquote>
          <div style={{ textAlign: "center" }}>- Robert C. Martin</div>
        </div>
        <div className="footer__links">
          <a
            title="Linkedin"
            className="footer__link"
            href="https://www.linkedin.com/in/proankush/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            title="Github"
            className="footer__link"
            href="http://github.com/proAnkush"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            title="E-mail"
            className="footer__link"
            href="mailto:proankush69@gmail.com"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
export default withRouter(Footer);
