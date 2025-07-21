// import React, { createContext, useState } from 'react';
// import all_products from '../Components/Assets/all_products';

// export const ShopContext = createContext(null);

// // Initialize cart with product IDs
// const getDefaultCart = () => {
//   let cart = {};
//   all_products.forEach((product) => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] + 1,
//     }));
//     console.log("Cart:", cartItems);
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max(prev[itemId] - 1, 0), // prevent negative quantity
//     }));
//   };

//   const contextValue = {
//     all_products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useState } from 'react';
import all_products from '../Components/Assets/all_products';

export const ShopContext = createContext(null);

// Initialize cart with product IDs as keys
const getDefaultCart = () => {
  let cart = {};
  all_products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () =>{
    let totalItem = 0;
    for (const item in cartItems)
    {
       if(cartItems[item] > 0)
        {
            totalItem += cartItems[item];  
        } 
    }
    return totalItem;
  }

  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
