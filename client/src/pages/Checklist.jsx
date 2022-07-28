import React from "react";
import pwLogo from "../assets/illustrations/pack-way_logo_final.png";
import lists from "../packingList.json";
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
      <div className="overviewBtns">
        <button id="overviewBtn">OVERVIEW</button>
        <button id="checklistBtn">CHECKLIST</button>
      </div>
      <div className="checklistContainer">
        <div className="itemsHeader">Items</div>
        <div className="addCategory">
          <button id="addCatBtn">+ NEW CATEGORY</button>
        </div>
        <div className="friendOneHeader">Friend 1</div>
        <div className="friendTwoHeader">Friend 2</div>
        <div className="friendThreeHeader">Friend 3</div>
        <div className="categoryName">Category</div>
        <div className="itemCheckbox">
          <input type="checkbox"></input>
        </div>
        <div className="items">item</div>
        <div className="friendStatus">friend</div>
        <div className="friendStatus">friend</div>
        <div className="friendStatus">friend</div>
      </div>
    </div>
  );
}

export default Checklist;
