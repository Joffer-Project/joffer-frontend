import React, { useState } from "react";
import logo from "../../../images/logo-black.png";
import baseBackgroundImg from "../../../images/orange-left-img-color-holder.webp";
import Essentials from "../tsignup/signupcomponents/essentials";
import FinalStep from "../tsignup/signupcomponents/finalpreview";
import Industries from "../tsignup/signupcomponents/industries";
import Roles from "../tsignup/signupcomponents/roles"; //
import Layout from "./components/layout";
import "./tlogin.css";

const BackgroundCarousel = () => {
  const [component, setComponent] = useState("Essentials");

  const handleNextClick = () => {
    switch (component) {
      case "Essentials":
        setComponent("Industries");
        break;
      case "Industries":
        setComponent("Roles");
        break;
      case "Roles":
        setComponent("finalStep");
        break;
      default:
        setComponent("Essentials");
        break;
    }
  };

  const handlePrevClick = () => {
    switch (component) {
      case "FinalStep":
        setComponent("Roles");
        break;
      case "Roles":
        setComponent("Industries");
        break;
      case "Industries":
        setComponent("Essentials");
        break;
      default:
        setComponent("Essentials"); // Loop back or handle beginning
        break;
    }
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
            <img src={logo} alt="company logo" />
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
        ) : component === "Industries" ? (
          <Industries onButtonClick={handleNextClick} />
        ) : component === "Roles" ? (
          <Roles onButtonClick={handleNextClick} />
        ) : (
          <FinalStep
            onButtonClick={handleNextClick}
            onPrevButtonClick={handlePrevClick}
          />
        )
      }
    />
  );
};

export default BackgroundCarousel;
