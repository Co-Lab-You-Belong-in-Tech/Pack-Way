import React from "react";
import pwLogo from "../assets/illustrations/pack-way_logo_final.png";
import "../styles/Checklist.css";

function Checklist() {
  return (
    <div className="container">
      <div className="logo">
        <img src={pwLogo}></img>
      </div>
      <div className="tripHero">
        <h1>Summer Getaway</h1>
        <h2>July 28 - July 31, 2022</h2>
      </div>
      <div className="overviewBtns"></div>
    </div>
  );
}

export default Checklist;
