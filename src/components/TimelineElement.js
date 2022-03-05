import React from "react";
import "../styles/TimelineElement.css";
function TimelineElement({
  name,
  startDate,
  endDate,
  desc,
  dataAos,
  profile,
  bullets,
  bulletPoints,
}) {
  return (
    <div className="timelineElement" data-aos={dataAos}>
      <div className="timeline__date">
        <span>{endDate}</span>
        <span>{startDate}</span>
      </div>
      <div className="timeline__content">
        <h3 className="timeline__name">{name}</h3>
        <h4 className="timeline__profile">{profile}</h4>
        <p className="timeline__desc">{desc}</p>
        <ul className="timeline__bulletsList">
          {bullets && bulletPoints.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default TimelineElement;
