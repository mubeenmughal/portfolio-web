import React from "react";

import group from '../../utils/images/Group.png';
import humbleicons from '../../utils/images/humbleicons_briefcase.png';

import './style.css';

const Resume = () => {
  return (
    <div id="resume" className="resumepage">
      <div>
        <h1 style={{ paddingLeft: '52px', paddingTop: '11px' }}>Resume</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="educationCol">
          <div>
            <img src={group} alt="group" />  &nbsp;
            <span style={{ fontSize: '25px' }}><b>Education</b></span>
          </div>
          <div className="education">
            <span style={{ color: 'gray', fontSize: '10px' }}>2017-2021</span><br />
            <span style={{ fontSize: '14px' }}><b>BSIT</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://pucit.edu.pk/"
              target="_blank"
              rel="noreferrer"
            ><b>Punjab University(PUCIT)</b></a>
          </div>
          <div className="education">
            <span style={{ color: 'gray', fontSize: '10px' }}>2015-2017</span><br />
            <span style={{ fontSize: '14px' }}><b>ICS (Computer Science)</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://gcu.edu.pk/"
              target="_blank"
              rel="noreferrer"
            ><b>GCU Lahore</b></a>
          </div>
        </div>
        <div className="educationCol">
          <div>
            <img src={humbleicons} alt="humbleIcon" /> &nbsp;
            <span style={{ fontSize: '25px' }}><b>Experience</b></span>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2021 - Present</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>MERN Stack</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://qbatch.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Qbatch Lahore</b></a>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2020-2021</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Website Development </b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://pucit.edu.pk/"
              target="_blank"
              rel="noreferrer"
            ><b>Punjab University</b></a>
          </div>
        </div>
      </div>
      <div className="workSkillParent">
        <div className="workSkill">
          <h2>Work Skills</h2>
          <div>
            <div className="Skills">
              <div className="skill"> NEXT.js </div>
              <div className="skill"> React.js </div>
              <div className="skill"> HTML 5 </div>
            </div>
            <div className="Skills">
              <div className="skill">CSS 3</div>
              <div className="skill"> Tailwind CSS </div>
              <div className="skill"> </div>
            </div>
            <div className="Skills">
              <div className="skill"> JavaScript </div>
              <div className="skill"> Mongo DB </div>
              <div className="skill"> SQL </div>
            </div>
            <div className="Skills">
              <div className="skill"> MongoDB </div>
              <div className="skill"> Android </div>
              <div className="skill"> Git </div>
            </div>
          </div>
        </div>
        <div className="workSkill">
          <h2>Soft Skills</h2>
          <div>
            <div className="Skills">
              <div className="skill"> NEXT.js </div>
              <div className="skill"> React.js </div>
              <div className="skill"> HTML 5 </div>
            </div>
            <div className="Skills">
              <div className="skill">CSS 3</div>
              <div className="skill"> Tailwind CSS </div>
              <div className="skill"> </div>
            </div>
            <div className="Skills">
              <div className="skill"> JavaScript </div>
              <div className="skill"> Mongo DB </div>
              <div className="skill"> SQL </div>
            </div>
            <div className="Skills">
              <div className="skill"> MongoDB </div>
              <div className="skill"> Android </div>
              <div className="skill"> Git </div>
            </div>

            <div className="Skills">
              <div className="skill">
                Time Management
              </div>
              <div className="skill">
                Mentorship
              </div>
            </div>
            <div style={{ marginRight: '-52px' }} className="Skills">
              <div className="skill">
                Impeccable Communication
              </div>
              <div className="skill">
                Flexibility
              </div>
            </div>
            <div style={{ marginRight: '70px' }} className="Skills">
              <div className="skill">
                Research
              </div>
              <div className="skill">
                Writing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
