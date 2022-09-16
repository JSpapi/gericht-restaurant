import React from 'react';
import "./AboutUs.css";
import { images } from '../../constants';


function AboutUs() {
  return (
	 <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
            <h3 className='headtext__cormorant'>About Us</h3>
            <img src={images.spoon} alt="about_spoon" className='spoon__img' />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
            <button type='button' className='btn custom__btn'>Know More</button>
          </div>

          <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="about_knife" />
          </div>

          <div className="app__aboutus-content_history">
            <h3 className='headtext__cormorant'>Our History</h3>
            <img src={images.spoon} alt="about_spoon" className='spoon__img' />
            <p className='p__opensans'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </p>
            <button type='button' className='btn custom__btn'>Know More</button>
          </div>
      </div>
   </div>
  )
}

export default AboutUs