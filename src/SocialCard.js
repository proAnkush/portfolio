import React from "react";
import "./SocialCard.css";
function SocialCard() {
  return (
    <div className="home__socialCard" title="">
      <div className="animate_animated animate__bounceIn">
        <i className="fas fa-satellite-dish"></i>
        <h2>Let's Connect</h2>
        <p> Connect with me on</p>
        <ul
          className="socialLinksList"
          style={{ listStyle: "none", padding: 0, margin: 0 }}
        >
          <li>
            <a href="https://www.linkedin.com/in/proankush/">
              <abbr title="Linked in">
                <i className="fab fa-linkedin-in"></i>
              </abbr>
            </a>{" "}
          </li>
          <li>
            <a href="http://github.com/proAnkush">
              <abbr title="Github">
                <i className="fab fa-github"></i>
              </abbr>
            </a>
          </li>

          <li>
            <a href="mailto:proankush69@gmail.com">
              <abbr title="E-Mail">
                <i className="fas fa-at"></i>
              </abbr>
            </a>
          </li>
        </ul>
        {/* </p> */}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="220px"
        height="220px"
        data-shape="true"
        preserveAspectRatio="none"
        aria-hidden="true"
        id="socialcard__BGPattern"
      ></svg>
    </div>
  );
}

export default SocialCard;
