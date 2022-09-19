import React from 'react';
import './FindUs.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

function FindUs() {
  return (
	 <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h3 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find Us</h3>
      
      <div className="app__wrapper-content">
        <p className='p__opensans' style={{marginBottom: '2rem'}}>TASHKENT, Yunusabad, SHAKHRISABZ St., OLOY (M-2) block of flats, 7 </p>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>Opening Hours</p>
        <p className='p__opensans' style={{color: '#fff', margin: '1rem 0'}}>Mon - Fri: 09:00 am - 21:00 pm</p>
        <p className='p__opensans' style={{color: '#fff'}}>Sat - Sun: 09:00 am - 18:00 pm</p>

        <button className='custom__btn' style={{marginTop: '2rem'}}>Visit Us</button>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
   </div>
  )
}

export default FindUs