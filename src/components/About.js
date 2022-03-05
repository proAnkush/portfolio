import React, { useEffect } from "react";
import "../styles/About.css";
import SocialCard from "./SocialCard";
import TimelineElement from "./TimelineElement";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <div></div>
      <div className="content">
        <div className="hero">
          <h1 className="hero__heading">About Me</h1>
          <div className="hero__summary">
            <p>
              I am an able full stack developer (NodeJS), with some devops tools
              in my skillset, focused more towards front-end develpoment with
              React. I am currently taking out some time, to learn and discover
              more, for my newfound love towards AWS/Devops in general.{" "}
            </p>
            <p>
              Previously being focused more towards competitive programming
              (Java) and thriving at it, I didn't focus much on development, but
              ever since I have, I just can't stop making new projects, learning
              new technologies everyday. I loved java, the bounds/features of
              oops, the legendary missing semicolon bugs, the vast libaries and
              stackoverflow support.
            </p>
            <p>
              The thrill while facing a problem, the excitement when thinking
              for solutions, the fear of the solution not working, the overjoy
              when a problem is fixed, and that feeling of foolishness when
              discovering a tool that already existed for solving that problem
              makes me stay in the development roller-coster.
            </p>
            <p>
              Would like to also add that I am listening to webinars (maybe drop
              a suggestion) for software development whenever possible to
              discover and learn something great everyday.
            </p>
          </div>
          <img
            data-aos="flip-down"
            src="https://www.incimages.com/uploaded_files/image/600x400/getty_501062623_20001333200092801_80323.jpg"
            srcSet="https://www.incimages.com/uploaded_files/image/300x200/getty_501062623_20001333200092801_80323.jpg"
            alt="Speech"
          />
        </div>

        <div className="subgrid">
          <div>
            <SocialCard />
          </div>
          <div className="subgrid__column">
            <h2 className="secondHeading">Work Experience</h2>
            <div
              className="secondContent"
              style={{ borderTop: "4px dotter #0009", padding: "20px" }}
            >
              <TimelineElement
                name="Krishi Network"
                profile="Full Stack SDE Intern"
                startDate="February, 2021"
                endDate="Present"
                desc="Getting to work on the much loved react framework. Along with similary popular Flask."
                dataAos={"fade-up"}
                bullets={true}
                bulletPoints={[
                  "Tech Stack: ReactJS, Flask, PostgresSQL",
                  "Delivered prod ready, design implemented, robust webpages from first week onwards.",
                  "Worked with like minded tech enthusiasts, who were passionate about their profession.",
                  "Doubled my love towards react.",
                ]}
              />
            </div>
          </div>
          <div></div>
          <div></div>

          <div className="subgrid__column">
            <h2 className="secondHeading">Education</h2>
            <div
              className="secondContent"
              style={{ borderTop: "4px dotted #0009", padding: "20px" }}
            >
              <TimelineElement
                name="SAGE University"
                profile="Bachelor's, Computer Science"
                startDate="November, 2021"
                endDate="August, 2024"
                desc="Pursuing Bachelor's in Computer Science. Constantly improving my web development skills, thriving in gathering certificates for extra skills that would fulfill my web development itch. Learning depth first rather than breadth first which I did during my diploma."
                dataAos={"fade-up"}
              />
              <hr className="timeline__divider" data-aos="fade-up" />
              <TimelineElement
                name="RGPV University"
                profile="Diploma, Computer Science"
                startDate="November, 2018"
                endDate="August, 2021"
                desc="Completed High School Equivalent Diploma in Computer Science and Engineering. Increased my love towards programming, made me interested in learning about every field in computers such as AI/ML, Android, Web Development, Graphics Designing etc. Ended up securing 8.4 CGPA."
                dataAos={"fade-up"}
              />
              <hr className="timeline__divider" data-aos="fade-up" />

              <TimelineElement
                name={"National Institute of Open Schooling"}
                profile="High School"
                startDate={"August, 2019"}
                endDate={"April, 2020"}
                desc="Completed part time high school (12th Grade) alongside my Diploma."
                dataAos={"fade-up"}
              />
              <hr className="timeline__divider" data-aos="fade-up" />

              <TimelineElement
                name={"Nehru Montessori Senior Secondary School"}
                profile="Student"
                startDate={"April, 2017"}
                endDate={"March, 2018"}
                desc="Completed 10th Grade securing 7.4/10 CGPA. "
                dataAos={"fade-up"}
              />
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
