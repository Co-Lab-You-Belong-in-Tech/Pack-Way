import React from "react";
import { useState } from "react";
import cx from "classnames";
import "../styles/Toggle.css";

function Toggle({ rounded = false, isToggled, onToggle }) {
  const sliderCX = cx("slider", { rounded: rounded });

  return (
    <div>
      <label className="toggle">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className={sliderCX} />
      </label>
    </div>
  );
}

export default Toggle;
