import React from "react";

import AboutMe from "../about-me";
import Resume from "../resume";
import Work from "../work";
import Contact from "../contact";

import home from '../../utils/images/Home Card.png';
import resume from '../../utils/images/Resume Card.png'
import work from '../../utils/images/work card.png';
import contact from '../../utils/images/contact card (1).png';


const NavBar = () => {
  return (
    <div style={{ width: '80%' }}>
      <div className="homeicons">
        <div className="navbar">
          <img id="colorfulhomeicon" onClick={() => console.log('Home')} width="50px" src={home} alt="home" />
          <img id="colorfulresumeicon" onClick={() => console.log('Resume')}width="50px" src={resume} alt="resume" />
          <img id="colorfulworkicon"onClick={() => console.log('Work')}width="50px" src={work} alt="work" />
          <img id="colorfulcontacticon" onClick={() => console.log('contact')} width="50px" src={contact} alt="contact" />
        </div>
      </div>
      {/* <AboutMe /> */}
      {/* <Resume /> */}
      {/* <Work /> */}
      <Contact />
    </div>
  )
}

export default NavBar
