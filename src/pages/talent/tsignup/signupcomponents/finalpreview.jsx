import React from "react";
import eyeIcon from "../../../../images/Eye icon.svg";
import leftArrow from "../../../../images/Left.svg";
import rightArrow from "../../../../images/Right.svg";
import "./finalpreview.css";

function FinalStep({ onButtonClick, onPrevButtonClick }) {
  // Accept handlers via props
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
          {/* Attach handlers here */}
          <img src={leftArrow} alt="left arrow" />
          Previous
        </button>
        <button onClick={onButtonClick}>
          {" "}
          {/* Typically this might be used to preview or save the form */}
          Preview
          <img src={eyeIcon} alt="preview icon" />
        </button>
        <button onClick={onButtonClick}>
          {" "}
          {/* Reuse onButtonClick for Next assuming it leads to form submission or similar */}
          Next
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default FinalStep;
