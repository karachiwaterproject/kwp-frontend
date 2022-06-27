import React from "react";
import "./spinner.css";
import icon from "./assets/img/kwp-logo.svg";

export default function Spinner() {
  return (
    <div className="spinner-container">
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
