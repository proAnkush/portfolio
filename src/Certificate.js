import React from "react";
import "./Certificate.css";
function Certificate({ name, issuer, dataAos, date, link }) {
  return (
    <div className="certificate" data-aos={dataAos}>
      <div>
        <i className="fas fa-medal" />
        <a href={link}>{name}</a>
        <br />
        <span>{issuer}</span>
      </div>
      <span>{date}</span>
    </div>
  );
}

export default Certificate;
