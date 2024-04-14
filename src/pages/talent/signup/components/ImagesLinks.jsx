import React from "react";
import DribbleLogo from "../../../../images/svg-icons/light-dribble-logo.svg";
import GihubLogo from "../../../../images/svg-icons/light-github-logo.svg";
import LinkedinLogo from "../../../../images/svg-icons/light-linkedin-logo.svg";
import MediumLogo from "../../../../images/svg-icons/light-medium-logo.svg";
import PersonalLogo from "../../../../images/svg-icons/light-personal-logo.svg";
import plusNeutral from "../../../../images/svg-icons/plus-neutral.svg";
import plusTalent from "../../../../images/svg-icons/plus-talent.svg";

import "../styles/ImagesLinks.css";

const ImagesLinks = ({ form }) => {
  return (
    <div className="il-images-links-container">
      {/* MAIN TITLE */}
      <h2 className="il-title">Images & Links</h2>
      {/* SUBTITLE */}
      <p className="il-subtitle">
        The images and links that you added will be shown on your profile as
        listed below. You can always update your images in the settings.
      </p>

      {/* IMAGES MAIN CONTAINER */}
      <div className="il-images-section">
        {/* Images titles */}
        <h2 className="il-section-title">Images</h2>

        {/* Images input container */}
        <div className="il-input-group">
          {/* Profile img upload botton*/}
          <div className="il-img-upload-container">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="il-input-field"
              style={{ display: "none" }}
            />
            <label htmlFor="profileImage" className="profile-img-upload-button">
              <img
                src={plusTalent}
                alt="Add"
                className="il-talent-upload-icon"
              />
            </label>
            <div className="il-img-picture-label">Profile picture</div>
          </div>

          {/* Img upload button */}
          <div className="il-img-upload-container">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="il-input-field"
              style={{ display: "none" }}
            />
            <label htmlFor="profileImage" className="img-upload-button">
              <img
                src={plusNeutral}
                alt="Add"
                className="il-neutral-upload-icon"
              />
            </label>
          </div>

          {/* Img upload button */}
          <div className="il-img-upload-container">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="il-input-field"
              style={{ display: "none" }}
            />
            <label htmlFor="profileImage" className="img-upload-button">
              <img
                src={plusNeutral}
                alt="Add"
                className="il-neutral-upload-icon"
              />
            </label>
          </div>

          {/* Img upload button */}
          <div className="il-img-upload-container">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="il-input-field"
              style={{ display: "none" }}
            />
            <label htmlFor="profileImage" className="img-upload-button">
              <img
                src={plusNeutral}
                alt="Add"
                className="il-neutral-upload-icon"
              />
            </label>
          </div>

          {/* Img upload button */}
          <div className="il-img-upload-container">
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="il-input-field"
              style={{ display: "none" }}
            />
            <label htmlFor="profileImage" className="img-upload-button">
              <img
                src={plusNeutral}
                alt="Add"
                className="il-neutral-upload-icon"
              />
            </label>
          </div>
        </div>
      </div>

      {/* LINKS MAIN CONTAINER */}
      <div className="il-links-section">
        {/* Links titles */}
        <h2 className="il-section-title">Links</h2>

        {/* Links input container */}
        <div className="il-link-input-group">
          {/* Github Link upload button */}
          <div className="il-link-upload-container">
            <label htmlFor="githubLink" className="link-upload-button">
              <img
                src={GihubLogo}
                alt="Github"
                className="il-link-upload-icon"
              />
              <span className="il-link-label">Github</span>
            </label>
          </div>

          {/* Linkedin Link upload button */}
          <div className="il-link-upload-container">
            <label htmlFor="linkedinLink" className="link-upload-button">
              <img
                src={LinkedinLogo}
                alt="Linkedin"
                className="il-link-upload-icon"
              />
              <span className="il-link-label">Linkedin</span>
            </label>
          </div>

          {/* Medium Link upload button */}
          <div className="il-link-upload-container">
            <label htmlFor="mediumLink" className="link-upload-button">
              <img
                src={MediumLogo}
                alt="Medium"
                className="il-link-upload-icon"
              />
              <span className="il-link-label">Medium</span>
            </label>
          </div>

          {/* Dribble Link upload button */}
          <div className="il-link-upload-container">
            <label htmlFor="dribbleLink" className="link-upload-button">
              <img
                src={DribbleLogo}
                alt="Dribble"
                className="il-link-upload-icon"
              />
              <span className="il-link-label">Dribble</span>
            </label>
          </div>

          {/* Personal Link upload button */}
          <div className="il-link-upload-container">
            <label htmlFor="personalLink" className="link-upload-button">
              <img
                src={PersonalLogo}
                alt="Personal"
                className="il-link-upload-icon"
              />
              <span className="il-link-label">Personal</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesLinks;
