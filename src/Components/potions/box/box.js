import React from "react";
import "./box.css";

export default function Box(props) {
  return (
    <div className="box-1">
      <div className="box-2">
        <img src={props.image} />
      </div>
      <div className="flex-grow-1  ms-3 box ">
        <h5 className="box-3">{props.title}</h5>
        <p>{props.lines}</p>
      </div>
    </div>
  );
}
