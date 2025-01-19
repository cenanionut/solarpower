import React from "react";

export default function DataInfoItem(props) {
  return (
    <div className="DataInfoItem">
      <img src={props.img} alt="" className="img-data" />
      <h2>{props.info}</h2>
      <h1>
        <span className="database-value">{props.number}</span>
        {" " + props.unit}
      </h1>
    </div>
  );
}
