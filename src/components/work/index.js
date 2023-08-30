import React from "react";

import Rectangle1 from '../../utils/images/Rectangle 20.png'
import Rectangle2 from '../../utils/images/Rectangle 22.png'
import Rectangle3 from '../../utils/images/Rectangle 24.png'
import Rectangle4 from '../../utils/images/Rectangle 21.png'
import rental from '../../utils/images/rental.png'

const Work = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 style={{ paddingLeft: '75px', paddingTop: '28px' }}><b>Portfolio</b></h1>
      <div className="development">
        <span style={{ color: 'orangered' }}>All</span>
        <span className="color-gray">App Development</span>
        <span className="color-gray">Web Development</span>
        <span className="color-gray">Design</span>
        <span className="color-gray">Mentorship</span>
      </div>
      <div className="d-flex">
        <div className="work">
          <img className="rec-img" src={Rectangle1} alt="rectangle" />
          <span className="project-info-basic">App Development</span><br />
          <span className="project-title"><b>Smart Bank App</b></span>
        </div>
        <div style={{ marginLeft: '30px', backgroundColor: '#FFEED9' }} className="work">
          <img className="rec-img" src={Rectangle2} alt="rectangle" />
          <span className="project-info-basic">Blog</span><br />
          <span className="project-title"><b>NEXT.js</b></span>
        </div>
      </div>

      <div className="d-flex">
        <div className="work" style={{ backgroundColor: '#FFEED9', marginTop: '-10px' }}>
          <img className="rec-img" src={rental} alt="rental" />
          <span className="project-info-basic">UI/UX</span><br />
          <span className="project-title"><b>Renta</b></span>
        </div>
        <div style={{ marginLeft: '30px' }} className="work">
          <img className="rec-img" src={Rectangle3} alt="rectangle" />
          <span style={{ fontSize: '7px', color: 'gray', paddingLeft: '5px' }}>Mentorship</span><br />
          <span className="project-title"><b>Tech Mentor</b></span>
        </div>
      </div>
      <div className="work" style={{ backgroundColor: '#FFEED9', marginTop: ' -30px' }}>
        <img className="rec-img" src={Rectangle4}alt="rectangle" />
        <span className="project-info-basic">Web Development</span><br />
        <span className="project-title"><b>IdeaFlow</b></span>
      </div>
    </div>
  )
}

export default Work;
