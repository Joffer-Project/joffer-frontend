import React, { useState } from "react";
import logo from "../../../images/logo-black.png";
import baseBackgroundImg from "../../../images/orange-left-img-color-holder.webp";
import Essentials from "../tsignup/signupcomponents/essentials";
import Industries from "../tsignup/signupcomponents/industries"; // Ensure this import path is correct
import Layout from "./components/layout";
import "./tlogin.css";

const BackgroundCarousel = () => {
  const [component, setComponent] = useState("Essentials");

  const handleNextClick = () => {
    setComponent("Industries");
  };

  return (
    <Layout
      backgroundComponent={
        <img
          className="base-bg-img"
          src={baseBackgroundImg}
          alt="left background"
        />
      }
      rightSideComponent={<div></div>}
      innerLeftComponent={
        <div className="talent-inner-left-container">
          <div className="talent-login-logo">
            <img src={logo} alt="" />
          </div>
          <div className="talent-login-info">
            <p>Let advanced Joffer algorithms find your ideal career fit!</p>
          </div>
          <div className="talent-login-action-text">Just Swipe!</div>
        </div>
      }
      innerRightComponent={
        component === "Essentials" ? (
          <Essentials onButtonClick={handleNextClick} />
        ) : (
          <Industries />
        )
      }
    />
  );
};

export default BackgroundCarousel;
