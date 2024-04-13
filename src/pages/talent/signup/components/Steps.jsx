import React from "react";
import leftArrow from "../../../../images/Left.svg";
import rightArrow from "../../../../images/Right.svg";
import eyeIcon from "../../../../images/eye-icon.svg";
import "../styles/Steps.css";

const Steps = ({ step = 1, setStep }) => {
  return (
    <div className="steps-container">
      {step > 1 && (
        <button
          type="button"
          className="step-previous-button"
          onClick={() => setStep(step - 1)}
        >
          <img src={leftArrow} alt="arrow" />
          <p>Previous</p>
        </button>
      )}

      {step === 5 ? (
        <button type="button" className="step-preview-button">
          <p>Preview</p>
          <img src={eyeIcon} alt="arrow" />
        </button>
      ) : (
        <div className="step-number">{step}/5</div>
      )}

      {step === 5 ? (
        <button type="button" className="step-start-button">
          <p>Start</p>
        </button>
      ) : (
        <button
          type="button"
          className="step-next-button"
          onClick={() => setStep(step + 1)}
        >
          <p>Next</p> <img src={rightArrow} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Steps;
