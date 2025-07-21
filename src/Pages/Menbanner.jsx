import React from 'react';
import './CSS/Menbanner.css';
import Women from '../Components/Assets/teen.png';

const Menbanner = () => {
  return (
    <div className='banner'>
        <div className='banner-content'>
             <h1>FLAT 50% OFF</h1>
             <p>12 <span>Hours </span>20<span> Mins</span></p>
        <div className='banner-explore'>
           <button>Explore</button>  
        </div>
        </div>
         <div className='banner-image'>
             <img src={Women} />
        </div>
    </div>
  )
}

export default Menbanner;