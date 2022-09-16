import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import "./Header.css";

function Header() {
  return (
	 <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The key to Fine dining</h1>
      <p className='p__opensans' style={{margin: "32px 0"}}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
      </p>
      <button className='custom__btn' type='button'>Explore Menu </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
   </div>
  )
}

export default Header