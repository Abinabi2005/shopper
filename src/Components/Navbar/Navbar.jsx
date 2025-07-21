import React, { useContext } from 'react'
import './Navbar.css';
import { useState, useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../Assets/logo.png';
import cart from '../Assets/cart.png';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
    
     const navRef = useRef();
     const [isNavOpen, setIsNavOpen ] = useState(false);
     
     const toggleNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
      setIsNavOpen(prev => !prev);
     }
  
    const { getTotalCartItem } = useContext(ShopContext);
      
  return (

    <header>
       <div className='nav-logo'>
           <img src={logo} alt='' />
           <p>SHOPPER</p>
       </div>
       {!isNavOpen && (
                <button className="nav-btn nav-open-btn" onClick={toggleNavbar}>
                    <FaBars />
                </button>
        )}
        <nav ref={navRef}>
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Shop</NavLink>
          <NavLink to="/mens" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Men</NavLink>
          <NavLink to="/womens" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Women</NavLink>
          <NavLink to="/kids" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Kid</NavLink>
          <div className='nav-login-cart'>
            <NavLink to="/login"><button>Login</button></NavLink>
          </div>
          <div className='login-cart'>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}><img src={cart} alt='' /></NavLink>
            <div className='nav-cart-count'>{getTotalCartItem()}</div>
          </div>
       <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
         <FaTimes />
      </button>
      </nav>
    </header>
  );
}

export default Navbar;