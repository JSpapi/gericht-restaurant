import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {FooterOverlay, NewsLetter} from '../../components';
import { images } from "../../constants";
import "./Footer.css";
function Footer() {

  const year = new Date().getFullYear();

  return (
    <div className="app__footer section__padding">
      <FooterOverlay/>
      <NewsLetter/>

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h3 className="app__footer-headtext">Contact Us</h3>
          <p className="p__opensans" style={{marginBottom: '1rem'}}>TASHKENT, Yunusabad, SHAKHRISABZ St., OLOY (M-2)</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer logo" />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}}/>
          <div className="app__footer-links_icons">
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h3 className="app__footer-headtext">Working Hours</h3>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans"> 09:00 am - 21:00 pm</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans"> 09:00 am - 18:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans" >{year} Made by Axror only for educational purpose</p>
      </div>
    </div>
  );
}

export default Footer;
