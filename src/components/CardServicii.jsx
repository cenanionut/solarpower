import React from "react";

function CardServicii(props) {
  let fulger = "";

  if (props.nr === 1) {
    fulger = <i class="fas fa-bolt"></i>;
  }

  if (props.nr === 2) {
    fulger = (
      <div>
        <i class="fas fa-bolt"></i>
        <i class="fas fa-bolt"></i>
      </div>
    );
  }

  if (props.nr === 3) {
    fulger = (
      <div>
        <i class="fas fa-bolt"></i>
        <i class="fas fa-bolt"></i>
        <i class="fas fa-bolt"></i>
      </div>
    );
  }

  return (
    <>
      <li className="card_servicii">
        <img src={props.src} alt="" />
        <h2>{props.titlu}</h2>
        {fulger}
        <h1>{props.cost}</h1>
        <h3>lei/Watt</h3>
        <p id="descriere_servicii">
          <p class="descr_servicii_item"> {props.descr[0]}</p>
          <p class="descr_servicii_item"> {props.descr[1]}</p>
          <p class="descr_servicii_item"> {props.descr[2]}</p>
        </p>
      </li>
    </>
  );
}

export default CardServicii;
