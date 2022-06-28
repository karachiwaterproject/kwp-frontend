import React from "react";
import "./spinner.css";
import icon from "./assets/img/kwp-logo.svg";

export default function Spinner({ _height }) {
  return (
    <div className="spinner-container" style={{ height: _height }}>
      <img
        className="icon"
        src={icon}
        alt="kwp"
        height={"100px"}
        width="220px"
      />
    </div>
  );
}
