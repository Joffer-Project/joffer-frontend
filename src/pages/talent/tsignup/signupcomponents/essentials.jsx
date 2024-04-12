import React from "react";
import rightArrow from "../../../../images/Right.svg";
import "./essentials.css";

function Essentials({ onButtonClick }) {
  return (
    <div className="t-essentials-main-container">
      <div className="t-essentials-title">
        <h2>Essential</h2>
        <p>
          Please mention your full name below. Recruiters will know you by this
          name...
        </p>
      </div>

      <div className="t-essentials-input-container">
        <input type="text" placeholder="Name" />
      </div>

      <div className="t-essentials-navigation-container">
        <div className="t-essentials-essentials-page-number-info">
          <p className="t-essentials-page-number">1</p>
          <p className="t-essentials-page-counter">/5</p>
        </div>
        <button onClick={onButtonClick}>
          <p>Next</p>
          <img src={rightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Essentials;
