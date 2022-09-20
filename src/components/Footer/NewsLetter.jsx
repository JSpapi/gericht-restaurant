import React from 'react';
import  SubHeading from '../SubHeading/SubHeading';
import './NewsLetter.css';

function NewsLetter() {
  return (
	 <div className='app__newsletter'>
    <div className="app__newsletter-heading" >

      <SubHeading title="Newsletter"/>
      <h3 className='headtext__cormorant'>
        Subscribe to Our Newsletter
      </h3>

      <p className='p__opensans' style={{marginTop: '2rem'}}>And never miss latest Updates!</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Email Address' required/>
      <button type='button' className='custom__btn'>Subscribe</button>
    </div>
   </div>
  )
}

export default NewsLetter