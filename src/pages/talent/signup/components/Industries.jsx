import React from "react";
import "../styles/Industries.css";

const Industries = () => {
  const industries = [
    "Software Development",
    "Telecommunications",
    "Internet service provision",
    "EdTech",
    "Cybersecurity",
    "Wearables",
    "Data Analytics and Business Intelligence",
    "Cloud",
    "Mobile app development",
    "E-commerce",
    "Social media",
    "Artificial Intelligence",
    "FinTech",
    "Internet of Things (IoT)",
    "Robotics and Automation",
    "AR and VR",
    "Digital Marketing",
    "Web Development and Design",
    "IT Consulting",
    "Network infrastructures",
    "Big Data Management",
    "Gaming",
    "HealthTech",
    "Smart Cities",
    "Content Creation SW",
    "Hardware",
    "Biometrics",
    "Quantum Computing",
    "Blockchain",
    "GIS(geographic Information Systems)",
  ];

  return (
    <>
      <h2 className="ind-title">Industries</h2>
      <p className="ind-subtitle">
        Select the industries that align best with your interests, knowledge,
        experience, and wishes.
      </p>
      <div className="ind-industries-list">
        {industries.map((industry, index) => (
          <div className="ind-industry-item" key={index}>
            <input
              type="checkbox"
              id={`ind-${industry}`}
              className="ind-checkbox"
            />
            <label htmlFor={`ind-${industry}`} className="ind-industry-label">
              {industry}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Industries;
