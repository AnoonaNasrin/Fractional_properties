import React from "react";
import "./potion.css"

export default function Potion(props) {
  return (
    <div className="main">
      <div className="content-icon ">
        <img src={props.image} />
      </div>
      <div className="flex-grow-1  ms-3 ">
        <h2>{props.title}</h2>
        <p>
          {props.lines}
        </p>
      </div>
    </div>
  );
}
