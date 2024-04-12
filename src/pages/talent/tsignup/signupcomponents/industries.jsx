import React from "react";
import leftArrow from "../../../../images/Left.svg";
import rightArrow from "../../../../images/Right.svg";
import "./industries.css";

function Industries({ onButtonClick, onPrevButtonClick }) {
  const industries = [
    "IT",
    "Finance",
    "Healthcare",
    "Education",
    "Marketing",
    "Sales",
    "Engineering",
    "Retail",
    "Human Resources",
    "Manufacturing",
    "Legal",
    "Construction",
    "Hospitality",
    "Media",
    "Agriculture",
    "Transportation",
    "Non-profit",
    "Other",
  ];

  return (
    <div className="t-industries-card-container">
      <div className="t-industries-title">
        <h2>Industries</h2>
        <p>
          Select the industries that align best with your interests, knowledge,
          experience, and wishes.
        </p>
      </div>

      <div className="t-industries-form-container">
        <form>
          {industries.map((industry, index) => (
            <div key={index} className="checkbox-container">
              <input type="checkbox" id={industry} />
              <label htmlFor={industry}>{industry}</label>
            </div>
          ))}
        </form>
      </div>

      <div className="t-industries-navigation-container">
        <button onClick={onPrevButtonClick}>
          <img src={leftArrow} alt="left arrow" />
          Previous
        </button>

        <div className="t-industries-essentials-page-number-info">
          <p className="t-industries-page-number">1</p>
          <p className="t-industries-page-counter">/5</p>
        </div>

        <button onClick={onButtonClick}>
          <p>Next</p>
          <img src={rightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Industries;
