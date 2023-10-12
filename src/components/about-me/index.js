import React from "react";

import App from '../../utils/images/App.png';
import code from '../../utils/images/code icon.png'
import mentor from '../../utils/images/Mentor icon.png';

import './style.css'

const AboutMe = () => {
  return (
    <div id="aboutme" className="aboutme">
      <div style={{ padding: '5px 34px 10px 52px' }}>
        <h1 style={{ fontSize: '30px' }}>About Me</h1>
        <p style={{ paddingLeft: 'px', fontSize: '20px', opacity: '0.6' }}>
          Hi Geeks! I'm thrilled to welcome you to my portfolio.'I bring a wealth of expertise in JavaScript, Web 3.0, and website
          development to the table. With a passion for crafting cutting-edge web
          solutions, I have honed my skills over the years to excel in architecting
          robust and dynamic websites. My proficiency in JavaScript frameworks,
          fundamental language in modern web development, allows me to
          create seamless, interactive, and feature-rich user experiences.
          Moreover, my deep understanding of Web 3.0, the next evolution of the
          internet, positions me to leverage decentralized technologies and
          innovative frameworks to build decentralized applications (dApps) and
          foster a more inclusive, secure, and user-centric web.
        </p>
        <h2>Services I offer!</h2>
        <div className="what-I-Do">
          <div className="app-dev-text">
            <img style={{ paddingTop: '8px', paddingLeft: '15px' }} src={code} alt="code" />
            <span style={{ fontSize: '23px', paddingLeft: '8px' }}><b>Web Development</b></span><br />
            <p className="project-info">
              I specialize in crafting exceptional web solutions that elevate user experiences. With expertise in ReactJS and Angular on the frontend and NodeJS, Rails, and Django on the backend, I bring your visions to life with seamless and dynamic applications. Whether it's building interactive, modern interfaces or robust backend systems, my proficiency in these technologies allows me to deliver efficient, scalable, and elegant web solutions. Let's collaborate to build web applications that stand out in both form and function!
            </p>
          </div>
          <div className="app-dev">
            <img className="app-dev-img" src={App} alt="app" />
            <span className="dev-text"><b>App Development</b></span><br />
            <p className="project-info">
            I excel in mobile application development with a specialization in React Native, focusing on HealthBase applications. My expertise lies in seamlessly integrating various third-party APIs, particularly in the health and kiosk domains. With a passion for creating intuitive and user-friendly mobile experiences, I leverage React Native to craft innovative applications that cater to the specific needs of the healthcare sector. Let's collaborate to develop mobile solutions that bring efficiency and convenience to the healthcare ecosystem!
            </p>
          </div>
        </div>
        <div className="what-I-Do" style={{ marginBottom: '20px' }}>
          <div className="app-dev">
            <img className="app-dev-img" src={App} alt="app" />
            <span className="dev-text"><b>Extensions/Plugins</b></span><br />
            <p className="backend-dev">
            I specialize in building powerful extensions and WordPress plugins that enhance web applications, with a focus on ReactJS and NodeJS technologies. Leveraging my expertise, I create seamless integrations that extend the functionality and capabilities of web platforms. Whether it's customizing WordPress to meet unique requirements or developing browser extensions that optimize user experiences, I'm dedicated to delivering high-quality solutions tailored to specific needs. Let's collaborate to enhance your web applications with efficient and versatile extensions and plugins!
            </p>
          </div>
          <div className="app-dev-text">
            <img className="app-dev-img" src={mentor} alt="mentor" />
            <span className="dev-text"><b>Web 3.0</b></span><br />
            <p className="project-info">
            I've had the privilege of actively contributing to the development of cutting-edge web 3.0 applications, notably Ternoa, a pioneering NFT-based platform. My expertise involves seamlessly integrating ReactJS for a dynamic and intuitive user interface, and employing smart contracts with Solidity to enable secure and transparent transactions within the NFT ecosystem. This includes the implementation of features allowing the sale and rental of NFTs, aligning with the innovative capabilities!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
