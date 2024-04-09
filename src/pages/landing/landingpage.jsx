import * as React from "react";
import "../../../src/App.css";
import logoSlogan from "../../../src/images/logo-slogan.png";
import "./landpage.css";
const TalentSection = () => {
  return (
    <section className="talent-section">
      <div className="talent-content">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/349182bd2c56ab027023d979c48e3b86953b07cec1a23a8633c83a43a7a32040?apiKey=d5d118b7190b41549398dbbdd251edfc&"
          alt=""
          className="talent-background"
        />
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
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec64a07570cf11a760cf05b9a029f1cf141fa05bb5027d9a83814da73b14446c?apiKey=d5d118b7190b41549398dbbdd251edfc&"
          alt=""
          className="recruiter-background"
        />
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
