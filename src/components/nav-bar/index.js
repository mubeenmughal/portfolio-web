import React, { useState } from "react";

import AboutMe from "../about-me";
import Resume from "../resume";
import Work from "../work";
import Contact from "../contact";

import home from '../../utils/images/Home Card.png';
import resume from '../../utils/images/Resume Card.png'
import work from '../../utils/images/work card.png';
import contact from '../../utils/images/contact card (1).png';
import whiteHomeImg from '../../utils/images/white home icon.png';
import workColorFull from '../../utils/images/work colorful.png';
import resumeColorFull from '../../utils/images/Resume colorfui.png';
import contactColorFull from '../../utils/images/contact colorful.png';

import "./style.css";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  return (
    <div className="navWidth">
      <div className="homeicons">
        <div className="navbar">
          <img id="colorfulhomeicon"
          style={{ marginRight: '10px' }}
            onClick={() => setSelectedTab('home')}
            width="60px" src={selectedTab === 'home' ? home : whiteHomeImg}
            alt="home" />
          <img
            style={{ marginRight: '10px' }}
            id="colorfulresumeicon"
            onClick={() => setSelectedTab('resume')}
            width="60px" src={selectedTab === 'resume' ? resumeColorFull : resume}
            alt="resume" />
          <img id="colorfulworkicon"
            style={{ marginRight: '10px' }}
            onClick={() => setSelectedTab('work')}
            width="60px" src={selectedTab === 'work' ? workColorFull : work}
            alt="work" />
          <img id="colorfulcontacticon"
            onClick={() => setSelectedTab('contact')}
            width="60px"
            src={selectedTab === 'contact' ? contactColorFull : contact}
            alt="contact" />
        </div>
      </div>
      {
        selectedTab === 'home' ? <AboutMe /> :
          selectedTab === 'resume' ? <Resume /> :
            selectedTab === 'work' ? <Work /> :
              selectedTab === 'contact' ? <Contact /> : ''
      }
    </div>
  )
}

export default NavBar
