import React from 'react'
import './Hero.css';
import hand from '../Assets/hand-icon.png';
import portrait from '../Assets/portrait.png';
import arrow from '../Assets/arrow-icon.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='hand-hand-icon'>
              <p>New</p>
              <img src={hand} />
            </div>
            <p>Collections</p>
            <p>For everyone</p>
          </div>
          <div className='hero-latest-btn'>
            <div>latest-collection</div>
            <img src={arrow} />
          </div>
        </div>
        <div className='hero-right'>
             <img src={portrait} />
        </div>
    </div>
  )
}

export default Hero;