import * as React from "react";
import { useState } from "react";
import "../../../src/App.css";
import recruiterBg from "../../../src/images/login-screen/login-screen-recruiter-button-bg.webp";
import talentBg from "../../../src/images/login-screen/login-screen-talent-button-bg.webp";
import logoSlogan from "../../../src/images/logo-slogan.png";

import "./landpage.css";

const TalentSection = () => {
  // State to track if the button is hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`talent-section ${isHovered ? "shadow" : ""}`}>
      <div className="talent-content">
        <div className="talent-text">
          <button
            className="talent-btn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Talent
          </button>
          <p className={`talent-description ${isHovered ? "darker" : ""}`}>
            For the ones who seek new job opportunities!
          </p>
        </div>
      </div>
      <img
        className={`talent-bg ${isHovered ? "hovered" : ""}`}
        src={talentBg}
        alt=""
      />
    </section>
  );
};

const RecruiterSection = () => {
  // State to track if the button is hovered
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={`recruiter-section ${isHovered ? "shadow" : ""}`}>
      <div className="recruiter-content">
        <div className="recruiter-text">
          <button
            className="recruiter-btn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            recruiter
          </button>
          <p className={`recruiter-description ${isHovered ? "darker" : ""}`}>
            For the ones who seek new talents to work with!
          </p>
        </div>
      </div>

      <img
        className={`recruiter-bg ${isHovered ? "hovered" : ""}`}
        src={recruiterBg}
        alt=""
      />
    </section>
  );
};

function MyComponent() {
  return (
    <main className="main-container">
      <img class="logo" src={logoSlogan} alt="Logo" />
      <div className="sections-container">
        <TalentSection />
        <RecruiterSection />
      </div>
    </main>
  );
}

export default MyComponent();
