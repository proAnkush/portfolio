import React, { useEffect } from "react";
import { v4 } from "uuid";
import "../styles/Resume.css";
function Resume() {
  const skills = [
    "ReactJS",
    "ExpressJS",
    "MongoDB",
    "NodeJS",
    "EJS",
    "HTML",
    "CSS",

    "AWS",
    "Firebase",
    "Git",
    "Docker",
    "Java",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);

    document.getElementById("left__wavecontainer")?.remove();
  }, []);

  return (
    <div
      className="main resumain"
      style={{ width: "80%", margin: "auto", gridTemplateColumns: "1fr" }}
    >
      {/* <div></div> */}
      <div className="content">
        <div
          title="Press ctrl+p for printing the resume."
          className="subgrid resume"
          style={{
            gridTemplateColumns: "1fr",
            maxWidth: "1300px",
            margin: "auto",
            marginTop: "100px",
          }}
        >
          {/* <div>
            <SocialCard />
          </div> */}

          <div
            id="printDiv"
            className="subgrid__column"
            style={{ boxShadow: "0px 0px 20px #0002", padding: "0px" }}
          >
            <div className="resume__header">
              <h1>Ankush Patil</h1>
              <h2>Software Development Engineer</h2>
              <div className="resume__headerLinks">
                <div>
                  <a href="https://www.linkedin.com/in/proAnkush">
                    <i className="fab fa-linkedin" /> /proAnkush
                  </a>
                </div>
                <div>
                  <a href="https://www.github.com/proAnkush">
                    <i className="fab fa-github" /> /proAnkush
                  </a>
                </div>
                <div>
                  <a href="mailto:proAnkush69@gmail.com">
                    <i className="fab fa-at" /> proAnkush69@gmail.com
                  </a>
                </div>
                <div>
                  <a href="/">
                    <i className="fas fa-globe" /> Portfolio
                  </a>
                </div>
                <div>
                  <a href="https://www.codechef.com/users/pro_ankush">
                    <i className="fas fa-code" /> pro_ankush
                  </a>
                </div>
                <div>
                  <a href="https://www.hackerrank.com/proankush69">
                    <i className="fab fa-hackerrank" /> proankush
                  </a>
                </div>
                <div>
                  <a href="https://auth.geeksforgeeks.org/user/proankush69/practice/">
                    <i className="fas fa-code" /> proankush
                  </a>
                </div>
              </div>
            </div>
            {/* resume body */}
            <div className="resume__body">
              {/* skills */}
              <h3 style={{ marginTop: "0px" }}> Skills</h3>
              <div className="resume__skills resume__subsection">
                {skills.map((e) => (
                  <span key={v4()}>{e}</span>
                ))}
              </div>
              {/* skills */}
              <h3>Education</h3>
              {/* first education */}
              <div className="resume__education">
                <span>Bachelors</span>
                <div>
                  <h4 className="resume__h4">Sage University</h4>
                  <p>
                    <span>2021 - 2024 </span>
                    <span>TBD Aggregate</span>
                  </p>
                  <span>Computer Science and Engineering</span>
                </div>
              </div>
              {/* first education */}
              {/* second education */}
              <div className="resume__education" style={{ marginTop: "30px" }}>
                <span>Diploma (3 Years)</span>
                <div>
                  <h4 className="resume__h4">
                    <abbr title="Rajiv Gandhi Proudyogiki Vishwavidyalaya">
                      RGPV
                    </abbr>{" "}
                    University
                  </h4>
                  <p>
                    <span>2018 - 2021 </span>
                    <span>8.42 Aggregate</span>
                  </p>
                  <span>Computer Science and Engineering</span>
                </div>
              </div>
              {/* second education */}
              {/* personal projects */}

              <h3>Personal Projects</h3>
              {/* project 1 */}
              <div className="resume__project">
                <a href="https://challenge-6ed71.web.app/">
                  <h4 className="resume__h4">Amazon.in React Clone</h4>
                </a>
                <p className="resume__skills">
                  <span>ReactJS</span>
                  <span>Node JS</span>
                  <span>AWS</span>
                  <span>Stripe</span>
                  <span>Firebase</span>
                </p>
                <ul>
                  <li>
                    Complete amazon.com clone with authentication, payment
                    integration (stripe).
                  </li>
                  <li>Pixel perfect amazon clone built as SPA.</li>
                  <li>
                    Payment integration with stripe for super fast payment .
                  </li>
                </ul>
              </div>
              {/* project 1 */}
              {/* project 2 */}
              <div className="resume__project">
                <a href="https://www.github.com/proankush/weather">
                  <h4 className="resume__h4">Weather Application</h4>
                </a>
                <p className="resume__skills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>FetchAPI</span>
                  <span>RestAPI</span>
                </p>
                <ul>
                  <li>In-Depth weather information.</li>
                  <li>
                    {" "}
                    Uses open weather api (rest api) for querying weather
                    information for a specific city.
                  </li>
                  <li>90% SEO Google Lighthouse score</li>
                </ul>
              </div>
              {/* project 2 */}
              {/* project 3 */}
              <div className="resume__project">
                <a href="https://www.github.com/proankush/entudo">
                  <h4 className="resume__h4">Entudo -A todoist Clone</h4>
                </a>
                <p className="resume__skills">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
                  <span>Datefns</span>
                  <span>Webpack</span>
                </p>
                <ul>
                  <li>Todo app with lots of features</li>
                  <li> Users can CRUD todos and projects</li>
                  <li>
                    Organise todos in projects and prioritize them, or
                    postpone/prepone them.
                  </li>
                </ul>
              </div>
              {/* project 3 */}
              <h3>Achievements</h3>
              {/* achievements */}
              <div className="resume__achievements">
                <ul>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      Codechef Competitive Programming 3 stars
                    </h4>
                  </li>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      Hackerrank Competitive Programming 5 stars in Python
                    </h4>
                  </li>
                </ul>
              </div>
              {/* achievements */}
              <h3>Certifications</h3>
              <div className="resume__certificates">
                <ul>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      AWS Certified Cloud Practitioner
                    </h4>
                  </li>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      M001 MongoDB Basics
                    </h4>
                  </li>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      Software Engineering Virtual Experience
                    </h4>
                  </li>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      HackerRank Python Developer
                    </h4>
                  </li>
                  <li>
                    <h4 className="resume__h4" style={{ fontSize: "20px" }}>
                      FreeCodeCamp Responsive Web Design
                    </h4>
                  </li>
                </ul>

                <div></div>
              </div>
            </div>
            {/* ^ Resume body */}
          </div>
          {/* resume grid */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
