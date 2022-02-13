import React, { useEffect } from "react";
import "./ProjectCard.css";
function ProjectCard({ name, link, desc, dataAos, image }) {
  useEffect(() => {
    let element = document.getElementById(name.split(" ")[0] + "wrap");
    element.addEventListener("mouseout", () => {
      imageMouseLeft(element);
    });
    element.addEventListener("mouseenter", () => {
      imageMouseOn(element);
    });
  });

  const imageMouseLeft = (element) => {
    element.style.animation = "imageShadeRoundOut 400ms linear forwards";
    let element2 = document.getElementById(name.split(" ")[0] + "img");
    element2.style.animation = "imageZoomOut 400ms linear forwards ";
  };
  const imageMouseOn = (element) => {
    element.style.animation = "imageShadeRound 400ms linear forwards";
    let element2 = document.getElementById(name.split(" ")[0] + "img");
    element2.style.animation = "imageZoom 400ms linear forwards ";
  };
  return (
    <div className="projects__project" data-aos={dataAos}>
      <a href={link}>
        <div id={name.split(" ")[0] + "wrap"} className="project__imgWrap">
          <img id={name.split(" ")[0] + "img"} src={image} alt="" />
        </div>
      </a>
      <h2 className="project__name">{name}</h2>
      <a className="project__link" href={link}>
        See Project
      </a>
      <hr />
      <p className="project__desc">{desc}</p>
    </div>
  );
}

export default ProjectCard;
