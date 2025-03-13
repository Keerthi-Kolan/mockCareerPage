import React from "react";
import Heading from "../HeadingComponent/Heading";
import ApplyNowComponent from "../ApplyNowComponent/ApplyNowComponent";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Heading />
      <ApplyNowComponent />
    </div>
  );
};

export default Header;
