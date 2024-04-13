import React from "react";
import leftArrow from "../../../../images/Left.svg";
import rightArrow from "../../../../images/Right.svg";
import eyeIcon from "../../../../images/eye-icon.svg";
import "./finalpreview.css";

function FinalStep({ onButtonClick, onPrevButtonClick }) {
  return (
    <div className="card-container">
      <div className="title">
        <h2>Final Step</h2>
      </div>
      <div className="description">
        <p>
          Share some information about your career path. Remember to keep it
          direct, these pieces of information can place you ahead.
        </p>
      </div>
      <div className="form-container">
        <form>
          <div className="description-box">
            <input type="text" placeholder="Click here to start writing..." />
          </div>
        </form>
      </div>
      <div className="navigation-container">
        <button onClick={onPrevButtonClick}>
          {" "}
          <img src={leftArrow} alt="left arrow" />
          Previous
        </button>
        <button onClick={onButtonClick}>
          {" "}
          Preview
          <img src={eyeIcon} alt="preview icon" />
        </button>
        <button onClick={onButtonClick}>
          {" "}
          Next
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default FinalStep;
