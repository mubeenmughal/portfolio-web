import React from "react";

import group from '../../utils/images/Group.png';
import humbleicons from '../../utils/images/humbleicons_briefcase.png';

import './style.css';

const Resume = () => {
  return (
    <div id="resume" className="resumepage">
      <div>
        <h1 style={{ paddingLeft: '52px', paddingTop: '11px' }}></h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="educationCol">
          <div>
            <img src={group} alt="group" />  &nbsp;
            <span style={{ fontSize: '25px' }}><b>Education</b></span>
          </div>
          <div className="education">
            <span style={{ color: 'gray', fontSize: '10px' }}>2021-2021</span><br />
            <span style={{ fontSize: '14px' }}><b>Machine Learning/Deep learning certifications</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://coursera.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Coursera</b></a>
          </div>
          <div className="education">
            <span style={{ color: 'gray', fontSize: '10px' }}>2021-2021</span><br />
            <span style={{ fontSize: '14px' }}><b>AWS Machine Learning Foundations Nanodegree Program</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://udacity.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Udacity</b></a>
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
            <span style={{ fontSize: '14px' }}><b>FSc (pre-engineering)</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://gcu.edu.pk/"
              target="_blank"
              rel="noreferrer"
            ><b>Central College</b></a>
          </div>
        </div>
        <div className="educationCol">
          <div>
            <img src={humbleicons} alt="humbleIcon" /> &nbsp;
            <span style={{ fontSize: '25px' }}><b>Experience</b></span>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2021-present</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Fullstack Developer (contractual)</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://www.upwork.com/freelancers/~01fb7b2cec9a13fbd9"
              target="_blank"
              rel="noreferrer"
            ><b>Upwork</b></a>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2021-2023</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Senior Software Engineer</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://netsoltech.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Netsol Technologies</b></a>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2021-2022</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Software Engineer</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://devsinc.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Devsinc</b></a>
          </div>
          <div className="experiance">
            <span className="tech-mentor">2020 - 2021</span><br />
            <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Data Analyst</b> </span><br />
            <a
              style={{ fontSize: '12px', textDecoration: 'none' }}
              href="https://gomotive.com/"
              target="_blank"
              rel="noreferrer"
            ><b>Motive</b></a>
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
            <div className="Skills">
              <div className="skill"> REST APIs </div>
              <div className="skill"> Redis </div>
              <div className="skill"> Jira </div>
            </div>
            <div className="Skills">
              <div className="skill">  CI/CD </div>
              <div className="skill">  Docker Products </div>
              <div className="skill"> Datadog </div>
            </div>
            <div className="Skills">
              <div className="skill"> rspec </div>
              <div className="skill"> Git </div>
              <div className="skill"> Ruby </div>
            </div>
            <div className="Skills">
              <div className="skill"> Ruby on Rails </div>
              <div className="skill"> Python </div>
              <div className="skill"> Django </div>
            </div>
            <div className="Skills">
              <div className="skill"> sql server </div>
              <div className="skill"> Micro services </div>
              <div className="skill"> Docker </div>
            </div>
          </div>
        </div>
        <div className="workSkill">
          <h2>Soft Skills</h2>
          <div>
            <div className="Skills">
              <div className="skill"> Project Management </div>
              <div className="skill"> Slack </div>
              <div className="skill"> Teams </div>
            </div>
            <div className="Skills">
              <div className="skill">Jira</div>
              <div className="skill"> SDLC </div>
              <div className="skill"> Client Communication</div>
            </div>
            <div className="Skills">
              <div className="skill"> JavaScript </div>
              <div className="skill"> Postgres </div>
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
