import * as React from "react";
import "../../../src/App.css";
import recruiterButtonImg from "../../../src/images/login-screen/login-screen-recruiter-button-bg.webp";
import talentButtonImg from "../../../src/images/login-screen/login-screen-talent-button-bg (2).webp";
import logoSlogan from "../../../src/images/logo-slogan.png";

import "./landpage.css";
const TalentSection = () => {
  return (
    <section className="talent-section">
      <div className="talent-content">
        <img class="logo" src={talentButtonImg} alt="Logo" />
        <div className="talent-text">
          <h2 className="talent-title">Talent</h2>
          <p className="talent-description">
            For the ones who seek new job opportunities!
          </p>
        </div>
      </div>
    </section>
  );
};

const RecruiterSection = () => {
  return (
    <section className="recruiter-section">
      <div className="recruiter-content">
        <img class="logo" src={recruiterButtonImg} alt="Logo" />
        <div className="recruiter-text">
          <h2 className="recruiter-title">Recruiter</h2>
          <p className="recruiter-description">
            For the ones who seek new talents to work with!
          </p>
        </div>
      </div>
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
