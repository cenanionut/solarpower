import React from "react";
import "./css/HeroSection.css";

function CardServiciuSt(props) {
  return (
    <>
      <li className="card_serviciu">
        <div className="left-side">
          <img src={props.poza} className="img_serviciu" alt="" />
          <img src={props.icon} className="icon_serviciu" alt="" />
        </div>
        <div className="right-side">
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <p>{props.descr}</p>
          <i class="far fa-play-circle fa-3x serviciu-play"></i>
        </div>
      </li>
    </>
  );
}

export default CardServiciuSt;
