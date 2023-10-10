import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Spin } from 'antd';

import Notification from "../notification";

import mobile from '../../utils/images/mobile.png';
import email from '../../utils/images/fluent-emoji-high-contrast_e-mail.png';

import './style.css';

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_TEMPLATE_ID,
  REACT_APP_EMAIL_JS_PUBLIC_KEY
} = process.env;

const Contact = () => {
  const [from_name, setName] = useState('');
  const [from_email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Spin spinning={loading}>
      <div id="contact" className="Contact">
        <h1 className="contact-phone"><b>Contact </b></h1>
        <div className="parentContact">
          <div className="phone">
            <img src={mobile} alt="mobile" />
            <span className="phone-email"><b>Phone:</b></span><br />
            <span className="phone-number">+923030949729</span><br />
          </div>
          <div className="email">
            <img src={email} alt="email" />
            <span className="phone-email"><b>Email:</b></span><br />
            <span className="phone-number">afaqahmadkhan499@gmail.com</span><br />
          </div>
        </div>
        <div className="submit">
          <div style={{ paddingLeft: '30px', paddingTop: '30px' }}>
            <span style={{ fontSize: '20px' }}>
              I am always open to discussing<b> new projects, opportunities in tech world,
                partnerships</b> and more so<b> mentorship</b>
            </span>
          </div>
          <br />
          <div className="name-style">
            <span>
              <span style={{ color: 'red' }}>*</span>
              <b>Name:</b>
            </span> <br />
            <input className="input-filed" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="name-style">
            <span>
              <span style={{ color: 'red' }}>*</span>
              <b>Email:</b>
            </span> <br />
            <input className="input-filed" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="name-style">
            <span>
              <span style={{ color: 'red' }}>*</span>
              <b>Massage:</b>
            </span> <br />
            <textarea className="input-filed" onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button disabled={!from_name || !from_email || !message} className="submit-btn" onClick={async () => {
            setLoading(true);
            emailjs.send(
              REACT_APP_SERVICE_ID,
              REACT_APP_TEMPLATE_ID, {
              to_name: 'Afaq Khan',
              from_name,
              from_email,
              message
            },
              REACT_APP_EMAIL_JS_PUBLIC_KEY)
              .then((result) => {
                console.log(result.text);
                setLoading(false);
                Notification('success', 'Email Send Successfully');
              }, (error) => {
                console.log(error.text);
                setLoading(false);
                Notification('error', error.text);
              });
          }}>Submit</button>
        </div >
      </div >
    </Spin>
  )

}

export default Contact;
