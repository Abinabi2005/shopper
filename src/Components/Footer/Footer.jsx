import React from 'react'
import './Footer.css';
import logo from '../Assets/logo.png';
import insta from '../Assets/insta.png';
import whatsapp from '../Assets/whatsapp.png';
import pinterest from '../Assets/pinterest.png';


const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-logo'>
          <img src={logo} />
          <p>SHOPPER</p>
       </div>
       <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={insta} />
        </div>
        <div className='footer-icons-container'>
            <img src={whatsapp} />
        </div>
        <div className='footer-icons-container'>
            <img src={pinterest} />
        </div>
       </div>
       <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2025 - All Rights Reserved</p>
       </div>
    </div>
  )
}

export default Footer;