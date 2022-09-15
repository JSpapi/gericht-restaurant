import React, {useState} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
	 <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#pages">Pages</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">Blog</a>
        </li>
        <li className="p__opensans">
          <a href="#landing">Landing</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a className='p__opensans' href="#login">Log in / registration</a>
        <div></div>
        <a className='p__opensans' href="#book">book table</a>
      </div>

      {/* !small screen codes */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#pages">Pages</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact Us</a>
              </li>
              <li className="p__opensans">
                <a href="#blog">Blog</a>
              </li>
              <li className="p__opensans">
                <a href="#landing">Landing</a>
              </li>
            </ul>
          </div>
        )}
        
      </div>
   </nav>
  )
}

export default Navbar