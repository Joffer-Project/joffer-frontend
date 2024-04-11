import React from "react";
import logo from "../../../images/logo-black.png";
import baseBackgroundImg from "../../../images/orange-left-img-color-holder.webp";
import Layout from "./components/layout";
import "./tlogin.css";

const BackgroundCarousel = () => {
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
            <p>Let advanced Joffer algoritms find your ideal carreer fit!</p>
          </div>
          <div className="talent-login-action-text">Just Swipe!</div>
        </div>
      }
      innerRightComponent={<div></div>}
    ></Layout>
  );
};

export default BackgroundCarousel;
