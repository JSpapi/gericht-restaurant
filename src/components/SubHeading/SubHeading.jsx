import React from 'react';
import "./SubHeading.css";
import {images} from '../../constants';

function SubHeading({title}) {
  return (
	 <div style={{marginBottom: '16px'}}>
    <p className='p__cormorant'>{title}</p>
    <img className='spoon__img' src={images.spoon} alt="spoon" />
   </div>
  )
}

export default SubHeading