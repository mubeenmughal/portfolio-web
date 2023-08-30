import React from "react";

import mobile from '../../utils/images/mobile.png';
import email from '../../utils/images/fluent-emoji-high-contrast_e-mail.png';

import './style.css';

const Contact = () => {
  return (
    <div id="contact" className="Contact">
      <h1 className="contact-phone"><b>Contact </b></h1>
      <div style={{display: 'flex'}}>
        <div className="phone">
          <img src={mobile} alt="mobile"/>
          <span className="phone-email"><b>Phone:</b></span><br />
          <span className="phone-number">+254723909353</span><br />
          <span className="phone-number">+254738509151</span>
        </div>
        <div className="email">
          <img src={email} alt="email" />
          <span className="phone-email"><b>Email:</b></span><br />
          <span className="phone-number">beatricewambuimbugua@gmail.com</span><br />
        </div>
      </div>
      <div className="submit">
        <div style={{paddingLeft: '30px', paddingTop:'30px'}}>
          <span style={{ fontSize: '20px' }}>
            I am always open to discussing<b> new projects, opportunities in tech world,
              partnerships</b> and more so<b> mentorship</b>
          </span>
        </div>
        <br />
        <div className="name-style">
          <span><b>Name:</b></span> <br />
          <hr /> <br />
        </div>
        <div className="name-style">
          <span><b>Email:</b></span> <br />
          <hr /> <br />
        </div>
        <div className="name-style">
          <span><b>Massage:</b></span> <br />
          <hr /> <br />
        </div>
        <button className="submit-btn">Submit</button>
      </div >

    </div >
  )
}

export default Contact;
