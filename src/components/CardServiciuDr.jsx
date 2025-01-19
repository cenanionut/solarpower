import React from "react";

function CardServiciuDr(props) {
  return (
    <>
      <li className="card_serviciu card-serviciu-dreapta">
        <div className="left-side-second">
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
          <p>{props.descr}</p>
          <i class="far fa-play-circle fa-3x serviciu-play"></i>
        </div>
        <div className="right-side-second">
          <img src={props.poza} alt="poza" className="img_serviciu" />
          <img src={props.icon} alt="icon" className="icon_serviciu_second" />
        </div>
      </li>
    </>
  );
}

export default CardServiciuDr;
