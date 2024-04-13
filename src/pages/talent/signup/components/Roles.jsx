import React from "react";
import "../styles/Roles.css";
const Roles = () => {
  const roles = [
    "QA Engineer ",
    "Software Engineer",
    "Network Administrator",
    "AI/Machine Learning Engineer",
    "Systems Analyst",
    "Web Developer",
    "Data Scientist",
    "Cybersecurity Analyst",
    "Tester",
    "Project Manager",
    "Database Administrator",
    "Cloud Solutions Architect",
    "UX/UI Designer",
    "Mobile App Developer",
    "Network Engineer",
    "IT Support",
    "DevOps Engineer",
    "Information Security Officer",
    "Systems Administrator",
    "IT Consultant",
    "Business Intelligence Analyst",
    "IT Trainer/Educator",
    "Documentation Specialist",
    "IT Auditor",
    "Data Engineer",
    "Blockchain Developer",
    "GIS Specialist",
    "Digital Marketing Specialist",
    "IT Procurement Manager",
    "Telecommunications Engineer",
    "IT Compliance Officer",
  ];

  return (
    <>
      <h2 className="roles-title">Roles</h2>
      <p className="roles-subtitle">
        Select the roles that align best with your interests, knowledge,
        experience, and wishes.
      </p>
      <div className="roles-list">
        {roles.map((role, index) => (
          <div className="roles-item" key={index}>
            <input
              type="checkbox"
              id={`ro-${role}`}
              className="roles-checkbox"
            />
            <label htmlFor={`ro-${role}`} className="roles-label">
              {role}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Roles;
