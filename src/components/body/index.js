import React from "react";

import ContactInfo from "../contact-info";
import NavBar from "../nav-bar";

import './style.css'

const PortfolioBody = () => {
  return (
    <div className="parentDiv">
      <ContactInfo />
      <NavBar />
    </div>
  )
}

export default PortfolioBody;
