import React from "react";
import "../styles/Industries.css"; 

const Industries = ({}) => {
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
    <>
      <h2 className="ind-font-bold ind-text3xl ind-mb4 ind-orange">Industries</h2>
      <p className="ind-font-medium ind-textxl ind-mb6">
        Select the industries that align best with your interests, knowledge,
        experience, and wishes.
      </p>
      <div className="ind-industries-list">
        {industries.map((industry, index) => (
          <div className="ind-industry-item" key={index}>
            <input
              type="checkbox"
              id={`ind-${industry}`}
              className="hidden"
            />
            <label
              htmlFor={`ind-${industry}`}
              className="ind-industry-label"
            >
              {industry}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Industries;
