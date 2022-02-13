import React from "react";
import "../styles/TimelineElement.css";
function TimelineElement({ name, startDate, endDate, desc, dataAos }) {
  return (
    <div className="timelineElement" data-aos={dataAos}>
      <div className="timeline__date">
        <span>{endDate}</span>
        <span>{startDate}</span>
      </div>
      <div className="timeline__content">
        <h3 className="timeline__name">{name}</h3>
        <p className="timeline__desc">{desc}</p>
      </div>
    </div>
  );
}

export default TimelineElement;
