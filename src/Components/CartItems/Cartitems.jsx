import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import { CiCircleRemove } from "react-icons/ci";

const Cartitems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products?.map((e) => {
        if (cartItems && cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} className='carticon' alt={e.name} />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <CiCircleRemove
                  className='remove-icon'
                  onClick={() => removeFromCart(e.id)}
                  style={{ cursor: 'pointer', fontSize: '20px' }}
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div className='cartitems-total-item'>
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      <div className='cartitems-promocode'>
        <p>If you have a promo code, Enter it here</p>
        <div className='cartitems-promobox'>
          <input type='text' placeholder='promo code' />
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cartitems;
