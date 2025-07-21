import React, { useContext } from 'react';
import './Productdisplay.css';
import { IoMdStar } from "react-icons/io";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
import { ShopContext } from '../../Context/ShopContext';

const Productdispay = (props) => {
     
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdislpay'>
    <div className='productdisplay-left'>
        <div className='productdislpay-img-list'>
            <img src={product.image} />
            <img src={product.image} />
            <img src={product.image} />
            <img src={product.image} />
        </div>
        <div className='productdisplay-img'>
            <img src={product.image}  className='productdisplay-main'/>
        </div>
    </div>
    <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoStarHalfSharp />
            <IoMdStarOutline />
            <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-old'>
                ${product.old_price}
            </div>
            <div className='productdisplay-right-new'>
                ${product.new_price}
            </div>
        </div>
        <div className='productdisplay-right-description'>
                Men Regular Fit Checkered Spread Collar Casual Shirt
        </div>
        <div className='productdisplay-right-size'>
           <h1>Select Size</h1>
           <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
           </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <diV className='productdisplay-right-category'>
           <p><span>Category:</span> Women, T-Shirt, Casual-Shirt</p>
           <p><span>Tags:</span> Modern, Latest</p>  
        </diV>
    </div>
    </div>
  )
}

export default Productdispay