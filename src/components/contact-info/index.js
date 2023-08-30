import React from "react";

import name from '../../utils/images/name.png';
import profile from '../../utils/images/profile picture.png';
import facebook from '../../utils/images/Facebook.png';
import details from '../../utils/images/career details.png';
import LinkedIn from '../../utils/images//Linkedin.png';
import twitter from '../../utils/images/Twitter.png';
import github from '../../utils/images/Github.png';
import phone from '../../utils/images/phone.png';
import location from '../../utils/images/Location (1).png';
import email from '../../utils/images/Email.png';
import download from '../../utils/images/Download Details.png';

const ContactInfo = () => {
    return(
        <div className="contact">
        <img width="150px" className="profileImage" height="150px" src={profile} alt="profile" />
        <div className="contectDetail">
          <img width="135px" src={name} alt="name" /><br />
          <img width="80px" src={details} alt="career" />
          <div className="icons">
            <img width="40px" src={facebook} alt="facebook" />
            <img width="40px" src={LinkedIn} alt="LinkedIn" />
            <img width="40px" src={twitter} alt="twitter" />
            <img width="40px" src={github} alt="github" />
          </div>
          <div className="personel">
            <div style={{ display: 'flex' }}>
              <img width=" 30px" src={phone} alt="profile" />
              <div>
                <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Phone</span><br />
                <span style={{ fontSize: '12px' }}>03023298340</span>
              </div>
            </div>
            <hr />
            <div style={{ display: 'flex' }}>
              <img width=" 30px" src={email} alt="email" />
              <div>
                <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Email</span><br />
                <span style={{ fontSize: '14px' }}>Maazkhan123@gmail.com</span>
              </div>
            </div>
            <hr />
            <div style={{ display: 'flex' }}>
              <img width=" 30px" src={location} alt="location" />
              <div>
                <span style={{ paddingTop: '7px', fontSize: '15px', color: 'silver' }}>Location</span><br />
                <span style={{ fontSize: '14px' }}>Lahore,Pakistan</span>
              </div>
            </div>
            <hr />
            <img width="110px" style={{ paddingBottom: '10px' }} src={download} alt="download" />
          </div>
        </div>
      </div>
    )
}

export default ContactInfo;
