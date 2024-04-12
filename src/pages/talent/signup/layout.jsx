import React from 'react';
import './styles/TalentCreateLayout.css';
import logo from '../../../images/logo-black.png';
import baseBackgroundImg from '../../../images/orange-left-img-color-holder.webp';

const TalentCreateLayout = ({ children }) => {
  return (
    <div className="main-layout-container">
      <div className="main-layout-bg">
        <div className="layout-bg-img">
          <img
            className="base-bg-img"
            src={baseBackgroundImg}
            alt="left background"
          />
        </div>
        <div className="layout-right-side"><div></div></div>
      </div>
      <div className="inner-layout-container">
        <div className="inner-left-img">
          <div className="talent-inner-left-container">
            <div className="talent-login-logo">
              <img src={logo} alt="company logo" />
            </div>
            <div className="talent-login-info">
              <p>Let advanced Joffer algorithms find your ideal career fit!</p>
            </div>
            <div className="talent-login-action-text">Just Swipe!</div>
          </div>
        </div>
        <div className="inner-right-side">{children}</div>
      </div>
    </div>
  );
}

export default TalentCreateLayout;
