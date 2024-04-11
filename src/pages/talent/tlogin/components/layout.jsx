import React from "react";
import "./layout.css";

const Layout = ({
  children,
  backgroundComponent,
  rightSideComponent,
  innerLeftComponent,
  innerRightComponent,
}) => {
  return (
    <div className="main-layout-container">
      <div className="main-layout-bg">
        <div className="layout-bg-img">{backgroundComponent}</div>
        <div className="layout-right-side">{rightSideComponent}</div>
      </div>
      <div className="inner-layout-container">
        <div className="inner-left-img">{innerLeftComponent}</div>
        <div className="inner-right-side">{innerRightComponent}</div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
