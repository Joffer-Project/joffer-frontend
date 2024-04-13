import React from "react";
import "../styles/AboutInfo.css";

const AboutInfo = ({ form }) => {
  return (
    <>
      <h2 className="ai-title">Final step</h2>
      <p className="ai-subtitle">
        Share some information about your career path. Remember to keep it
        direct, these pieces of information can place you ahead.
      </p>
      <div className="ai-formGroup">
        <textarea
          id="description"
          {...form.register("description")}
          placeholder="Click to start typing..."
          className="ai-inputField"
        ></textarea>
      </div>
    </>
  );
};

export default AboutInfo;
