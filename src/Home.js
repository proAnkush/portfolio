import React, { useEffect } from "react";
import Certificate from "./Certificate";
import "./Home.css";
import amazonImage from "./static/amzncln.png";
import cardCreatorImage from "./static/bsncrtr.png";
import dictionaryImage from "./static/dictapp.png";
import weatherImage from "./static/wthrapp.png";
import ProjectCard from "./ProjectCard";
import SocialCard from "./SocialCard";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const hinge = (e) => {
    const anims = [
      "animate__zoomOut",
      "animate__hinge",
      "animate__flipOutY",
      "animate__rotateOutUpRight",
      "animate__rollOut",
      "animate__bounceOutDown",
      "animate__backOutDown",
    ];
    let anim = anims[getRandomInt(0, anims.length - 1)];
    e.target.className = "home__summary--strong animate__animated " + anim;
    // e.target.className ="home__summary--strong animate__animated animate__bounceOutDown";
    e.target.addEventListener("animationend", () => {
      console.log(e);
      e.target.style.visibility = "hidden";
    });
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="main">
      <div desc="grid-side-columns"></div>

      <div className="content">
        <div className="hero">
          <h1 className="hero__heading" title="No, This is Patrick.">
            Hi, I'm Ankush.
          </h1>
          <p className="hero__summary">
            I'm a{" "}
            <span
              style={{ display: "inline-block" }}
              onClick={hinge}
              className="home__summary--strong"
            >
              web developer
            </span>
            , who enjoys making{" "}
            <span
              style={{ display: "inline-block" }}
              onClick={hinge}
              className="home__summary--strong"
            >
              fun and interactive
            </span>{" "}
            web apps, currently pursuing Computer Science Bachelor's in
            <span
              style={{ display: "inline-block" }}
              onClick={hinge}
              className="home__summary--strong"
            >
              &nbsp; Indore{" "}
            </span>
            . This is my portfolio for displaying my love towards
            <span
              style={{ display: "inline-block" }}
              onClick={hinge}
              className="home__summary--strong"
            >
              &nbsp; Web Development{" "}
            </span>
            .
          </p>
        </div>

        <div className="subgrid">
          <div>
            <SocialCard />
          </div>
          <div className="subgrid__column">
            <h1 className="secondHeading">Favourite Projects</h1>
            <div className="projects">
              {/* second__content but 2*2 grid */}
              <ProjectCard
                dataAos="zoom-in-up"
                name={"Amazon.in Clone"}
                link="https://challenge-6ed71.web.app/"
                desc="A Complete Amazon.in React Clone SPA with Authentication, Payment Integration. This project was built using ReactJS, ExpressJS, ContextAPI, Firebase (Firestore, Firehost, FireAuth), AWS (Amplify, Lambda, API Gateway)."
                image={amazonImage}
              />
              <ProjectCard
                dataAos="zoom-in-up"
                name={"Business Card Creator"}
                link="https://proankush.github.io/business-card-app/"
                desc="A React SPA where user can create a stylish, minimalist, online business card. React hooks allow business card to update real time without page refreshes."
                image={cardCreatorImage}
              />
              <ProjectCard
                dataAos="fade-up"
                name={"Dictionary Application"}
                link="https://proankush.github.io/dictionary"
                desc="A free dictionary application, where user can search a word and get back the definition, part of speech, examples, pronunciation and other information for the word. The app uses https://dictionaryapi.dev/ for fetching the data."
                image={dictionaryImage}
              />
              <ProjectCard
                dataAos="fade-up"
                name={"Weather Application"}
                link="https://proankush.github.io/weather"
                desc="
                Created in HTML, CSS and Javascript. A search of a city leads to a call to OpenWeatherApi, whose response is processed and presented to the client in a well-structured manner. Errors are handled and presented to the user in a non-obtrusive way. A loading gif pops up until the promise is satisfied."
                image={weatherImage}
              />
              <div></div>
              <div className="moreDiv">
                <a
                  href="https://www.github.com/proankush"
                  className="projects__moreLink"
                >
                  more personal projects <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="secondHeading">Recent Certifications</h1>

              <div data-aos="fade-up" className="secondContent">
                <Certificate
                  name="AWS Certified Cloud Practitioner"
                  issuer="Amazon Web Services"
                  dataAos=""
                  date="January 2022"
                  link="https://bit.ly/ankush-ccp"
                />
                <Certificate
                  name="M001: MongoDB Basics"
                  issuer="MongoDB University"
                  dataAos=""
                  date="December 2021"
                  link="https://university.mongodb.com/course_completion/a2d598c6-725e-4ca4-804c-33f3f4b9b40a"
                />
                <Certificate
                  name="Software Engineering vitual experience"
                  issuer="JP Morgan Chase"
                  dataAos=""
                  date="December 2021"
                  link="https://drive.google.com/file/d/1bBSV2g6prBmmwrTeS-H2LxjI2nHhnysC/view?usp=sharing"
                />
                <Certificate
                  name="Responsive Web Design"
                  issuer="FreeCodeCamp"
                  dataAos=""
                  date="August 2021"
                  link="https://drive.google.com/file/d/1RdYXO86MZUNhGL58sIdmnng8L7M46d_l/view?usp=sharing"
                />
              </div>
              <div></div>
              <div className="moreDiv">
                <a
                  href="https://www.linkedin.com/in/proankush/details/certifications/"
                  className="projects__moreLink"
                >
                  more certificates <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div desc="grid-side-columns"></div>
    </div>
  );
}

export default Home;
