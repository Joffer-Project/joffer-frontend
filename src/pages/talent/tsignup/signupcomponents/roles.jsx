import React from "react";
import leftArrow from "../../../../images/Left.svg";
import rightArrow from "../../../../images/Right.svg";
import "../../tsignup/tsignup.css";

function Roles({ onButtonClick, onPrevButtonClick }) {
  // Accept handlers via props
  const roles = [
    "Software Engineer",
    "QA Engineer",
    "Product Manager",
    "Data Analyst",
    "Data Scientist",
    "Business Analyst",
    "Sales Manager",
    "Marketing Manager",
    "HR Manager",
    "Recruiter",
    "Customer Support",
    "Customer Success",
    "Account Manager",
    "Accountant",
    "Finance Manager",
    "Legal Counsel",
    "Lawyer",
    "Paralegal",
    "Nurse",
    "Doctor",
    "Pharmacist",
    "Teacher",
    "Professor",
    "Principal",
    "Dean",
  ];

  return (
    <div className="center">
      <div className="card-container">
        <div className="title">
          <h2>Roles</h2>
        </div>
        <div className="description">
          <p>
            Select the roles that align best with your professional profile.
          </p>
        </div>
        <div className="form-container">
          <form>
            {roles.map((role, index) => (
              <div key={index} className="checkbox-container">
                <input type="checkbox" id={role} />
                <label htmlFor={role}>{role}</label>
              </div>
            ))}
          </form>
        </div>
        <div className="navigation-container">
          <button onClick={onPrevButtonClick}>
            <img src={leftArrow} alt="left arrow" />
            Previous
          </button>
          <button onClick={onButtonClick}>
            Next
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Roles;
