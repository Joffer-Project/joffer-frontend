import React from "react";
import "../styles/Roles.css";


const Roles = ({}) => {
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
    <>
      <h2 className="ro-font-bold ro-text3xl ro-mb4 ro-orange">Roles</h2>
      <p className="ro-font-medium ro-textxl ro-mb6">
        Select the roles that align best with your interests, knowledge,
        experience, and wishes.
      </p>
      <div className="ro-roles-list">
        {roles.map((role, index) => (
          <div className="ro-role-item" key={index}>
            <input type="checkbox" id={`ro-${role}`} className="hidden" />
            <label htmlFor={`ro-${role}`} className="ro-role-label">
              {role}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roles;
