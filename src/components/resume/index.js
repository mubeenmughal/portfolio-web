import React from "react";

import group from '../../utils/images/Group.png';
import humbleicons from '../../utils/images/humbleicons_briefcase.png';

const Resume = () => {
  return (
    <div id="resume" className="resumepage">
      <div>
        <h1 style={{ paddingLeft: '52px', paddingTop: '1px' }}>Resume</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ paddingLeft: '52px' }}>
          <img src={group} alt="group" />  &nbsp;
          <span style={{ fontSize: '25px' }}><b>Education</b></span>
        </div>
        <div style={{ paddingLeft: '42%' }}>
          <img src={humbleicons} alt="humbleIcon" /> &nbsp;
          <span style={{ fontSize: '25px' }}><b>Experience</b></span>
        </div>
      </div>
      <div className="resumeInfo">
        <div className="education">
          <span style={{ color: 'gray', fontSize: '10px' }}>2020-2021</span><br />
          <span style={{ fontSize: '14px' }}><b>Software Development</b> </span><br />
          <span style={{ fontSize: '12px' }}><b>Moringa School</b></span>
        </div>
        <div className="experiance">
          <span className="tech-mentor">2022 - Present</span><br />
          <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Technical Mentor</b> </span><br />
          <span className="font-size"><b>Moringa School</b></span>
        </div>
      </div>
      <div className="resumeInfo">
        <div className="education">
          <span style={{ color: 'gray', fontSize: '10px' }}>2012-2016</span><br />
          <span style={{ fontSize: '14px' }}><b>Disaster Management</b> </span><br />
          <span className="font-size"><b>Masinde Muliro Universiity </b></span>
        </div>
        <div className="experiance">
          <span className="tech-mentor">2021-2022</span><br />
          <span style={{ fontSize: '14px', paddingTop: '30px' }}><b>Website Development </b> </span><br />
          <span className="font-size"><b>Village 2 Nation</b></span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
        <h2 style={{ paddingLeft: '60px' }}><b>Work Skills</b></h2>
        <h2 style={{ paddingRight: '265px' }}><b>Soft Skills</b></h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
        <div style={{ width: '30%' }}>
          <div className="Skills">
            <div className="skill"> NEXT.js </div>
            <div className="skill"> React.js </div>
            <div className="skill"> HTML 5 </div>
          </div>
          <br />
          <div className="Skills">
            <div className="skill">CSS 3</div>
            <div className="skill"> Tailwind CSS </div>
            <div className="skill"> Figma </div>
          </div>
          <br />
          <div className="Skills">
            <div className="skill"> JavaScript </div>
            <div className="skill"> Mongo DB </div>
            <div className="skill"> SQL </div>
          </div>
          <br />
          <div className="Skills">
            <div className="skill"> Angular </div>
            <div className="skill"> Android </div>
            <div className="skill"> Git </div>
          </div>
        </div>
        <div style={{ width: '30%', marginRight: '9%' }}>
          <div className="Skills">
            <div className="skill">
              Time Management
            </div>
            <div className="skill">
              Mentorship
            </div>
          </div>
          <br />
          <div style={{ marginRight: '-52px' }} className="Skills">
            <div className="skill">
              Impeccable Communication
            </div>
            <div className="skill">
              Flexibility
            </div>
          </div>
          <br />
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
  )
}

export default Resume;
